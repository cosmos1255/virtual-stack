const {Users} = require('../models/users')
const atob = require('atob')

const auth = async function(req, res, next){
  try{
  	const [type, encodedCredentials] = req.header("Authorization").split(' ')
    const [username, password] = atob(encodedCredentials).split(':')

    const user = await Users.findOne({
      username,
      password
    })

    if(!user){
      res.send("Cannot find user")
    }
    req.auth = { username }
    next();
  }
  catch(err){
  	next(err)
  }
}