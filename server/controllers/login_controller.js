import User from '../db/models/user_model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const SECRET =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczNTAwODI2MCwiaWF0IjoxNzM1MDA4MjYwfQ.CkYUxOh3_KY-Pj2GgpO7jzuI7-esGZIpIIA2l1hNj_w'

const login_controller = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Authentication' })
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication Failed' })
    }
    const token = jwt.sign({ userId: user._id }, SECRET, {
      expiresIn: '1h',
    })
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Login Failed', message: error })
  }
}

export default login_controller
