const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
  res.send('api-post')
})

router.get('/tags', (req, res) => {
  res.send('api-tags')
})

module.exports = router
