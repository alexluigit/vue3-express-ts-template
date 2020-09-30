import express from 'express'
const router = express.Router()

router.get('/posts', (req, res) => {
  res.send('api-post')
})

router.get('/tags', (req, res) => {
  res.send('api-tags')
})

export default router
