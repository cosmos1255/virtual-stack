# How to use REST API Server #
## 1. Install a REST Client
* You can use any kind of rest client of your choosing like Postman, Imsomnia, Swagger.

## 2. Start the server ##
* Before testing out the server, run the command "**npm install**" to download the modules.
* If you are testing the server locally, use the commands "**npm start**" or "**npm test**" to startup the server.
* If you are using the heroku REST API server, then use the link https://virtual-stack.herokuapp.com.

## 3. How to send HTTP requests ##
* The main method in sending an HTTP request is by sending the Base64 Auth Token. To do this, go to this website https://www.base64encode.org/ and enter in the username and **hashed password**. Note that the username and **hash password** must be seperated by a colon. This picture shows an example of encoding the credentials in Base 64.

![](https://raw.githubusercontent.com/cosmos1255/DBJS-LargeProj/API/readme/base64.png)

* Once you got the credentials encoded, go to your REST client of your choice and type in "Authorization" in the header key and put the word "Basic" followed by the Base64 token. Note that this will be need for the following routes.
``` 
api/signin      -- User signin
api/signup      -- User signup
api/user        -- Get all user info
api/user/list   -- Get list of business cards, delete a business card, and add a business carrd
api/user/names  -- Get all names from list of business cards
api/user/person -- Get a certain business card,
api/user/card   -- Get user's card and update user's card
```
* Here are example pictures of adding a virtual business card by using the api/user/list route.

![](https://raw.githubusercontent.com/cosmos1255/DBJS-LargeProj/API/readme/postheader.png)

![](https://raw.githubusercontent.com/cosmos1255/DBJS-LargeProj/API/readme/postbody.png)
