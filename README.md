# How to use REST API Server #
## 1. Install a REST Client
* You can use any kind of rest client of your choosing like Postman, Imsomnia, Swagger.

## 2. Start the server ##
* If you are testing the server locally, use the commands "**npm start**" or "**npm test**" to startup the server.
* If you are using the heroku REST API server, then use the link https://virtual-stack.herokuapp.com

## 3. How to send HTTP requests ##
* There are two methods in sending HTTP request. The first is just sending in the user's username and **hashed password**. This will work for the following routes.
``` 
/signin
/signup
```
* The picture below shows an example of what this will look like.

![](https://raw.githubusercontent.com/cosmos1255/DBJS-LargeProj/API/readme/apisignin.png)

* The other method of sending an HTTP request is by sending the Base64 Auth Token. To do this, go to this website https://www.base64encode.org/ and enter in the username and **hashed password**. Note that the username and **hash password** must be seperated by a colon. This picture shows an example of encoding the credentials in Base 64.

![](https://raw.githubusercontent.com/cosmos1255/DBJS-LargeProj/API/readme/base64.png)

* Once you got the credentials encoded, go to your REST client of your choice and type in "Authorization" in the header key and put the word "Basic" followed by the Base64 token. Note that this will be need for the following routes.
``` 
api/user
api/user/list
api/user/names
api/user/card
```
* Here is an example picture of the process.

![](https://raw.githubusercontent.com/cosmos1255/DBJS-LargeProj/API/readme/apiauth.png)
