const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express();
const zooRoutes = require('./routes/zoos')

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/zoos', zooRoutes)

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});