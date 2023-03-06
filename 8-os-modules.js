const os = require('os')

// Info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds.`)

const currentSystem = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalmem: os.totalmem()
}
console.log(currentSystem)