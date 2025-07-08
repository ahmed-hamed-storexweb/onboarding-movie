import {Server} from '@storexweb/kernel'

const server  = new Server({
    name : "MOVIES_SERVICE",
    dist : `${__dirname}/..`
})

// console.log(server)

server.start()