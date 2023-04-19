const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if(name == "dog"){
        res.send({'sound': '멍멍'})
    }  else if(name == "cat") {
        res.send({'sound': '야용'})
    } else if(name == "pig") {
        res.send({'sound': '꿀꿀'})
    } else {
        res.send({'sound': '알 수 없음'})
    }

    

    console.log(name);


    res.send({'sound': '야용'})
})

app.get('/cat', (req, res) => {
    res.send('고양이')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
