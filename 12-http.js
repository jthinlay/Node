const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('This is about page')
    }
    res.end(`
        <h1>Oooop!</h1>
        <p>Can not find the page you are looking for</p>
        <a href='/'>Back Home</a>
    `)
})

server.listen(5000)