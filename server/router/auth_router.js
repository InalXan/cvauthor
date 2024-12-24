import { Router } from 'express'
// middleware
import verifyAuth from '../middlewares/auth_middleware.js'
// controllers
import login_controller from '../controllers/login_controller.js'
import register_controller from '../controllers/register_controller.js'

const router = Router()

router.post('/login', verifyAuth, login_controller)
router.post('/register', register_controller)

export default router
