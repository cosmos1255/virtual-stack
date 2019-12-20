const {Users} = require('../models/users')
const atob = require('atob')
const StatusError = require("../utilities/status-error")
const auth = async function(req, res, next){
  try{
  	const [type, encodedCredentials] = req.header("Authorization").split(' ')
    const [username, password] = atob(encodedCredentials).split(':')

    const user = await Users.findOne({
      username,
      password
    })

    if(!user){
      throw new StatusError({
        message: 'Username / Password is invalid.',
        status: 'authorization_failed',
        statusCode: 401
      });
    }
    req.auth = { username }
    next();
  }
  catch(err){
  	next(err)
  }
}