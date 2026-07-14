'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, RotateCcw, Sparkles, BookOpen, MessageCircle } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp?: Date
}

interface Props {
  locale: string
  userName: string
  uiLanguage: string
  currentLevel: number
}

const tx = {
  zh: {
    title: 'AI 阿拉伯语老师',
    subtitle: '随时解答您的问题',
    placeholder: '用中文、英文或阿拉伯语提问...',
    send: '发送',
    clear: '清空对话',
    thinking: 'ANALIA 正在思考...',
    suggestions: '快速提问',
    error: '出错了，请重试',
  },
  en: {
    title: 'AI Arabic Teacher',
    subtitle: 'Ask anything, anytime',
    placeholder: 'Ask in English, Chinese, or Arabic...',
    send: 'Send',
    clear: 'Clear chat',
    thinking: 'ANALIA is thinking...',
    suggestions: 'Quick questions',
    error: 'Something went wrong, please retry',
  },
  ar: {
    title: 'معلم العربية الذكي',
    subtitle: 'اسألني في أي وقت',
    placeholder: 'اسأل بالعربية أو الإنجليزية أو الصينية...',
    send: 'إرسال',
    clear: 'مسح المحادثة',
    thinking: 'أناليا تفكر...',
    suggestions: 'أسئلة سريعة',
    error: 'حدث خطأ، أعد المحاولة',
  },
}

const SUGGESTIONS: Record<string, string[]> = {
  zh: [
    '阿拉伯语字母表有多少个字母？',
    '如何说"你好"？',
    '解释阿拉伯语的阴阳性',
    '什么是"الحمد لله"的意思？',
    '阿拉伯数字怎么写？',
  ],
  en: [
    'How many letters does Arabic have?',
    'How do I say "thank you"?',
    'Explain masculine and feminine in Arabic',
    'What does "إن شاء الله" mean?',
    'How do I introduce myself in Arabic?',
  ],
  ar: [
    'علّمني كيف أحسب بالعربية',
    'ما الفرق بين المذكر والمؤنث؟',
    'كيف أقول "أنا أحب العربية" بالصينية؟',
    'اشرح لي الفعل الماضي',
    'ما معنى كلمة مرحبا؟',
  ],
}

const GREETING: Record<string, string> = {
  zh: `مرحباً! 👋 我是 ANALIA，您的AI阿拉伯语老师！

我可以帮您：
• 📚 解释语法规则
• 🔤 学习词汇和发音
• 💬 练习对话
• ✍️ 纠正您的阿拉伯语写作
• 🌍 了解阿拉伯文化

请随时用中文、英文或阿拉伯语问我任何问题！`,
  en: `مرحباً! 👋 I'm ANALIA, your AI Arabic teacher!

I can help you with:
• 📚 Grammar explanations
• 🔤 Vocabulary & pronunciation
• 💬 Conversation practice
• ✍️ Correcting your Arabic writing
• 🌍 Arabic culture & context

Ask me anything in English, Chinese, or Arabic!`,
  ar: `مرحباً! 👋 أنا أناليا، معلمة العربية الذكية!

أستطيع مساعدتك في:
• 📚 شرح القواعد النحوية
• 🔤 المفردات والنطق
• 💬 التحدث والمحادثة
• ✍️ تصحيح كتابتك
• 🌍 الثقافة العربية

اسألني بالعربية أو الإنجليزية أو الصينية!`,
}

function MessageBubble({ msg, locale }: { msg: Message; locale: string }) {
  const isUser = msg.role === 'user'
  const isArabic = /[؀-ۿ]/.test(msg.content.slice(0, 50))

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-1"
          style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
          <span className="text-white text-sm font-bold" style={{ fontFamily: 'Amiri, serif' }}>أ</span>
        </div>
      )}
      <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${
        isUser
          ? 'text-white rounded-tr-sm'
          : 'bg-white border border-gray-100 shadow-sm rounded-tl-sm'
      }`}
        style={isUser ? { background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' } : {}}>
        <p className={`text-sm whitespace-pre-wrap leading-relaxed ${isUser ? 'text-white' : 'text-gray-800'}`}
          dir={isArabic && !isUser ? 'rtl' : 'ltr'}
          style={{ fontFamily: isArabic ? 'Noto Naskh Arabic, Amiri, serif, sans-serif' : 'inherit' }}>
          {msg.content}
        </p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ml-2 mt-1 bg-gray-200">
          <span className="text-gray-600 text-xs font-bold">
            {locale === 'ar' ? 'أنت' : locale === 'zh' ? '你' : 'You'}
          </span>
        </div>
      )}
    </div>
  )
}

export default function AiTutorClient({ locale, userName, uiLanguage, currentLevel }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const suggestions = SUGGESTIONS[locale] || SUGGESTIONS.en
  const greeting = GREETING[locale] || GREETING.en

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: greeting, timestamp: new Date() }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(text?: string) {
    const content = (text || input).trim()
    if (!content || loading) return

    const userMsg: Message = { role: 'user', content, timestamp: new Date() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          ui_language: uiLanguage,
        }),
      })

      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      }])
    } catch {
      setError(t.error)
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  function clearChat() {
    setMessages([{ role: 'assistant', content: greeting, timestamp: new Date() }])
    setError(null)
  }

  return (
    <main className="ml-20 lg:ml-64 flex-1 flex flex-col" style={{ height: '100vh' }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900">{t.title}</h1>
            <p className="text-xs text-gray-600">{t.subtitle}</p>
          </div>
        </div>
        <button onClick={clearChat}
          className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all">
          <RotateCcw size={13} />
          {t.clear}
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} locale={locale} />
        ))}

        {loading && (
          <div className="flex justify-start mb-4">
            <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mr-2"
              style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
              <span className="text-white text-sm font-bold" style={{ fontFamily: 'Amiri, serif' }}>أ</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full animate-bounce"
                      style={{ background: '#2D5A8E', animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
                <span className="text-xs text-gray-600">{t.thinking}</span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-2">
            <p className="text-sm text-red-500 bg-red-50 inline-block px-3 py-1.5 rounded-lg">{error}</p>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-6 pb-3 flex-shrink-0">
          <p className="text-xs text-gray-600 mb-2 flex items-center gap-1">
            <BookOpen size={12} />
            {t.suggestions}
          </p>
          <div className="flex gap-2 flex-wrap">
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => sendMessage(s)}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all bg-white">
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-6 pb-6 pt-3 flex-shrink-0 bg-white border-t border-gray-100">
        <div className="flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.placeholder}
            rows={1}
            className="flex-1 resize-none px-4 py-3 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
            style={{ maxHeight: '120px', minHeight: '48px' }}
            onInput={e => {
              const el = e.currentTarget
              el.style.height = 'auto'
              el.style.height = Math.min(el.scrollHeight, 120) + 'px'
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-40 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-gray-600 text-center mt-2">
          {locale === 'ar' ? 'Enter للإرسال • Shift+Enter لسطر جديد' : locale === 'zh' ? 'Enter 发送 • Shift+Enter 换行' : 'Enter to send • Shift+Enter for new line'}
        </p>
      </div>
    </main>
  )
}
