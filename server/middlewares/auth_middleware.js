import jwt from 'jsonwebtoken'

const SECRET =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczNTAwODI2MCwiaWF0IjoxNzM1MDA4MjYwfQ.CkYUxOh3_KY-Pj2GgpO7jzuI7-esGZIpIIA2l1hNj_w'

const verifyAuth = async (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) return res.status(401).json({ error: 'Access denied' })
  try {
    const decoded = jwt.verify(token, SECRET)
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'invalid token', message: error })
  }
}

export default verifyAuth
