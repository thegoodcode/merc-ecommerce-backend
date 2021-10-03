import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import colors from 'colors'

dotenv.config()

connectDB()

const app = express()
const PORT = process.env.PORT || 8000

app.use('/api/products', productRoutes)

app.listen(
	PORT,
	console.log(
		`Server started running in ${process.env.NODE_ENV} mode on port ${PORT}`
			.magenta.underline
	)
)
