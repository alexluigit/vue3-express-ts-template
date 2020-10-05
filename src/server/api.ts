import express from 'express'
// import createIndex from './createIndex'

const router = express.Router()

router.get('/posts', async (req, res) => {
  // const index = await createIndex
  res.send('api-posts')
})

router.get('/tags', (req, res) => {
  res.send('api-tags')
})

export default router
