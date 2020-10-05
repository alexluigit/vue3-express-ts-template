import {json} from 'body-parser'
import {Application} from 'express'
import api from './api'

export default (app: Application) => {
  app.use(json())
  app.use('/api',api)
}
