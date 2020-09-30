import {json} from 'body-parser'
import api from './api'

export default (app) => {
  app.use(json())
  app.use('/api',api)
}
