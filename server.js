import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()
// this will enable us to accept json data in the body
app.use(express.json())
const PORT = process.env.PORT || 8000

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
	PORT,
	console.log(
		`Server started running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.magenta.underline
	)
)
