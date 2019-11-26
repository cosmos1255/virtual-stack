# How to use REST API Server #
## 1. Install REST Client
* You can use anykind of rest client like Postman, Imsomnia, Swagger

## 2. Start the server ##
* If you running the server local, use the commands **npm start** or **npm test**.
* If you are using the heroku REST API server, the use the link https://virtual-stack.herokuapp.com

## 3. How to send HTTP requests ##
* There are two methods in sending HTTP request. The first is just sending in the user's username and password. This will work for the following routes.
``` 
api/signin
api/signup
```
* The picture below shows an example of what this will look like.

* The other method of sending an HTTP request is by sending the Base64 Auth Token. To do this, go to this website https://www.base64encode.org/ and enter in the username and password. Note that the username and **hash password** must be seperated by a colon. This picture shows an example encoding the credentials in Base 64.

* Once you got the credentials encoded, go to your REST client of your choice and type in "Authorization" in the header key and put the word "Basic" followed by the Base64 token. Here is an example picture. Note that this will be need for the following routes.
``` 
api/user
api/user/list
api/user/names
api/user/card
```
