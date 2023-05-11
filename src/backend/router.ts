import express,{Express} from "express";
// import bodyParser from 'body-parser'

const router: express.Router = express.Router()

router.get('/api/version', (req: express.Request, res: express.Response) => {
    console.log("/api/version")
    res.json({version: '0.0.1'})
})

router.post('api/hello',(req,res) => {
  console.log(res)
  res.send(`ハロー, 4${req.body.userName}`)
})

export default router