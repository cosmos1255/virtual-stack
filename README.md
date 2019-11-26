<<<<<<< HEAD
# Tasks #

### 1. Charts ###
##### Due Monday 10/28 #####
* UCD -> Jay
* ERD -> Jorge
* Activity Diagram -> Blake
* Wireframe
##### Constant Progress #####
* Gantt Chart/Trello -> David

### 2. Steps to Completion ###
##### a) Project Pitch #####
* Charts finished
* Powerpoint finished 
  * (Google Slides link: https://docs.google.com/presentation/d/1EevzsiSq6cIixowf9u_3gvBOMFnr7QFkdgFIz3w9hWA/edit?usp=sharing)
* Presentation practice

##### b) Before 2/3 of Nov #####
* Database up and running
* AWS server active
* API routes established
* Front-end rough draft (web and mobile)
* QR-code reader in good shape and functional
* Begin testing

##### c) Last 1/3 of Nov until Dec. 4 (Last day of classes) #####
* Front-end optimization (beautification)
* API route testing and finalizing
* Powerpoint for presentation completed 
  * Updated charts (ERD, UCD, Activity, Wireframe, Gantt)
* Finish testing
* Practice presentation 


### 3. Other tidbits ###
* Learn all the skills needed (swagger, android studio, react, MERN stack, react native, QR code info)
* Communication is key (Discord, texting, meetings, etc.)
* Organization of main branch as well as subsequent branches is important
* Be an expert in your area but have an understanding of the ***big picture***
* If you are working on a task, mark it as being worked on in Trello

### 4. Directory ###
* /.vscode <------- Don't touch
* /models <-------- Where models/schema are stored
* /node_modules <-- Don't touch
* /routes <-------- API routes and routes functions


=======
# How to use REST API Server #
## 1. Install REST Client
* You can use anykind of rest client like Postman, Imsomnia, Swagger

## 2. Start the server ##
* If you running the server local, use the commands **npm start** or **npm test**.
* If you are using the heroku REST API server, the use the link https://virtual-stack.herokuapp.com

## 3. How to send HTTP requests ##
* There are two methods in sending HTTP request. The first is just sending in the user's username and password. This will work for both the login and signup routes. The picture below shows an example of what this will look like.

* The other method of sending an HTTP request is by sending the Base64 Auth Token. To do this, go to this website https://www.base64encode.org/ and enter in the username and password. Note that the username and **hash password** must be seperated by a colon. This picture shows an example encoding the credentials in Base 64.

* Once you got the credentials encoded, go to your REST client of your choice and type in "Authorization" in the header key and put the word "Basic" followed by the Base64 token. Here is an example picture. Note that this will be need for the following routes.
``` 
/user
/user/list
/user/names
/user/card
```
>>>>>>> master
