require('dotenv').config()
const express = require('express')


const app = express()

app.use(express.json())

app.use('/api/users', userRoute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
});