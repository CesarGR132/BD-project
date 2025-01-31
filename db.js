import mysql from 'mysql'

export const db = mysql.createConnection({
  host: '31.170.167.204',
  port: 3306,
  database: 'u269761573_project_db',
  user: 'u269761573_test',
  password: 'JuanitoMijares123'
})

export default db
