// Run this script to set up the database: node scripts/setup-db.js
const fs = require('fs')
const path = require('path')

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wjbznnrcemldjoetipcp.supabase.co'
const SERVICE_KEY = process.env.SUPABASE_SECRET_KEY || ''

async function runSQL(sql) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
    },
    body: JSON.stringify({ sql }),
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('SQL Error:', err.substring(0, 200))
    return false
  }
  return true
}

async function main() {
  console.log('Setting up ANALIA database...')
  console.log('Please run the SQL files manually in Supabase SQL Editor:')
  console.log('1. supabase/migrations/001_schema.sql')
  console.log('2. supabase/migrations/002_seed.sql')
  console.log('\nGo to: https://supabase.com/dashboard/project/wjbznnrcemldjoetipcp/editor')
}

main()
