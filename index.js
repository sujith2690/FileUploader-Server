import express from 'express'
import cors from 'cors'
import uploadRoute from './routes/uploadRoute.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use('/upload',uploadRoute)

const PORT = process.env.PORT
app.listen(PORT, () => console.log( `App is running on PORT:${PORT}`))