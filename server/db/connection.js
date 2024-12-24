import { connect } from 'mongoose'

const connection = async () => {
  try {
    connect(
      'mongodb+srv://admin:3y3vaye1@admin.pap9oas.mongodb.net/?retryWrites=true&w=majority&appName=Admin',
    )
    console.log('Database Connection Succesfully')
  } catch (error) {
    console.log('Database connection unsuccessfully: ', error)
  }
}

export default connection
