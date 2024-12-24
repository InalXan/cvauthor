import express from 'express'
import morgan from 'morgan'
import router from './router/auth_router.js'
import connection from './db/connection.js'
// configure host
const PORT = 5000
const a = express()

a.use(router)
a.use(morgan('dev'))

a.listen(PORT, () => {
  connection()
  console.log(`http://localhost:${PORT}/` + ' ' + 'server started')
})
