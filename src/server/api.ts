import express, {Request, Response} from 'express'

const router = express.Router()

router.get('/posts', async (req: Request, res: Response) => {
  res.send('api-posts')
})

router.get('/tags', (req, res) => {
  res.send('api-tags')
})

export default router
