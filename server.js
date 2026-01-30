import express from 'express'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

async function initDatabase() {
  const db = await open({
    filename: './transactions.db',
    driver: sqlite3.Database
  })

  await db.exec(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      service TEXT NOT NULL,
      amount REAL NOT NULL,
      status TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  return db
}

let db
initDatabase()
  .then(database => {
    db = database
    console.log('Database initialized successfully')
  })
  .catch(err => {
    console.error('Database initialization failed:', err)
  })

app.post('/api/transaction', async (req, res) => {
  try {
    const { user_id, service, amount } = req.body
    const result = await db.run(
      'INSERT INTO transactions (user_id, service, amount, status) VALUES (?, ?, ?, ?)',
      [user_id, service, amount, 'PENDING']
    )
    res.json({ transactionId: result.lastID, status: 'success' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})