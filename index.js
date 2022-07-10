const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const routerUser = jsonServer.router('users.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')
const userdb = JSON.parse(fs.readFileSync('users.json', 'UTF-8'))

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

// Use default router
server.use('/api', router)
server.use('/user', routerUser)
server.listen(3000, () => {
    console.log('JSON Server is running')
})


server.post('/auth/login', (req, res) => {

    const { email, password } = req.body
    console.log('tempt to login with ', email, 'and', password);
    if (authenticate({ email, password }) === undefined) {
        const status = 401
        const message = 'Incorrect email or password'
        res.status(status).json({ status, message })
        return
    }
    res.status(200).json(authenticate({ email, password }))
})


function authenticate({ email, password }) {
    return userdb.users.find((element) => element.email == email && element.password == password)
}


