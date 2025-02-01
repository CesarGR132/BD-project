import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import db from './db.js'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.get('/api/dataUsers', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, rows) => {
    if (err) {
      res.status(500)
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/data', (req, res) => {
  db.query('SELECT precio FROM oc', (err, rows) => {
    if (err) {
      res.status(500)
    } else {
      res.json(rows)
    }
  })
})

app.get('/api/data1', (req, res) => {
  db.query('SELECT * FROM bdpedidos', (err, rows) => {
    if (err) {
      res.status(500).send(err)
    } else {
      const result = rows.map(row => ({
        id: row.idproducto,
        value: row.cantidad,
        label: row.producto
      }))
      res.json(result)
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
