module.exports ={
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
  },
  debug: true
}