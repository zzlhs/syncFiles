const express = require('express')
const cors = require('cors')
const config = require('./utils/config')
const logger = require('./utils/logger')

const app = express()


/**
 * 方便地访问数据，我们需要 express json-parser 的帮助，它可以通过命令 
 * app.use(express.json()) 来使用。
 **/
app.use(cors())
app.use(express.json())

let notes = [
    { name: "zyf"}
]

/**
 * 
 * nodejs + nextjs 各大云厂商都提供 js 的 API

 */
  
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    // 这个body中的数据就是由 express.json() 放进去的
    const note = request.body
    console.log(note)
    response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// console.log('hello...');