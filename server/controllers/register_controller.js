import User from '../db/models/user_model.js'
import bcrypt from 'bcryptjs'

const register_controller = async (req, res) => {
  try {
    const { firstname, lastname, number, email, password } = req.body

    // Tüm alanların dolu olduğundan emin olun
    if (!firstname || !lastname || !number || !email || !password) {
      return res.status(400).json({ error: 'All fields are required!' })
    }

    // Kullanıcı e-posta adresi çakışması kontrolü
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered!' })
    }

    // Şifre hashleme
    const hashedPassword = await bcrypt.hash(password, 10)

    // Kullanıcı oluşturma
    const user = new User({
      firstname,
      lastname,
      number,
      email,
      password: hashedPassword,
    })

    // Kullanıcıyı kaydetme
    await user.save()

    res.status(201).json({ message: 'User registered successfully!' })
  } catch (error) {
    res.status(500).json({ error: 'Registration failed!', message: error.message })
  }
}

export default register_controller
