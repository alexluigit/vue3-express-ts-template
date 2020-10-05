import express from 'express'
import path from 'path'
import configureAPI from './configureAPI'

const app = express()
configureAPI(app)

app.use(express.static(path.resolve('dist')))

app.listen(3000, () => {
  console.log("hello")
})
