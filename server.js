const express=require('express')

const app = express()

const PORT = 5000

app.listen(PORT, () =>console.log(`Server is booted up at port ${PORT}`))