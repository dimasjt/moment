import express from 'express'
import morgan from 'morgan'
import responseTime from 'response-time'
import fs from 'fs'
import path from 'path'

const logFile = path.resolve(__dirname, '../log/dev.log')
const logDir = path.join(__dirname, 'log')
const accessLogStream = fs.createWriteStream(logFile, { flags: 'a' })

fs.existsSync(logDir) || fs.mkdirSync(logDir)

const app = express()

app.use(morgan('combined', { stream: accessLogStream }))
app.use(responseTime())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server running')
})
