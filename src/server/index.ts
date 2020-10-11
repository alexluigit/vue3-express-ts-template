import express, { Application } from 'express'
import path from 'path'
import configureAPI from './configureAPI'

const app:Application = express()
configureAPI(app)

app.use(express.static(path.resolve('dist')))

app.listen(3000, () => {
  console.log("hello")
})
