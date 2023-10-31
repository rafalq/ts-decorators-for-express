import express, { Express } from 'express'
import { router } from './routes/loginRoutes.js'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

const app: Express = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: [''] }))
app.use(router)

app.listen(3000, () => console.log('Server started at http://127.0.0.1:3000'))
