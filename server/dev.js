import express from 'express'
import morgan from 'morgan'
import responseTime from 'response-time'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'

import fs from 'fs'
import path from 'path'

import webpackConfig from './webpack/dev'

const logFile = path.resolve(__dirname, '../log/dev.log')
const logDir = path.resolve(__dirname, '../log')
const accessLogStream = fs.createWriteStream(logFile, { flags: 'a' })
const PORT = process.env.PORT || 3000

fs.existsSync(logDir) || fs.mkdirSync(logDir)

const app = express()
const wp = webpack(webpackConfig)

app.use(morgan('combined', { stream: accessLogStream }))
app.use(responseTime())
app.use(webpackDevMiddleware(wp, {
  publicPath: '/assets',
  index: path.resolve(__dirname, '../app/views/index.html'),
  stats: {
    color: true,
  },
}))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
