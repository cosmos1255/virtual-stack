// Tasks - Replace the headers
// If you want to generate Base64 in javascript use
// var base64 = btoa(username + ':' + password)
// Then replace the headers with
// "Authorization": "Basic " + base64

// Task 2 - Fill in the body
// Once you have the data, you need to send it in JSON
// To do this simply put
// body: JSON.stringify(data)
// where data is the body format

// The body format has to be like
/*
{
    "name": "Jacob Thomas",
    "address": "1234 university blvd",
    "phoneNumber": "0987654321",
    "email": "student@gmail.com",
    "occupation": "student"
}
*/

// signin
fetch("https://virtual-stack.herokuapp.com/api/signin", {
  method: "POST",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// signup
fetch("https://virtual-stack.herokuapp.com/api/signup", {
  method: "POST",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
  // body: put where
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// get user's list of business card
fetch("https://virtual-stack.herokuapp.com/api/user/list", {
  method: "GET",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// get names from list of business cards
fetch("https://virtual-stack.herokuapp.com/api/user/names", {
  method: "GET",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// get user's business card
fetch("https://virtual-stack.herokuapp.com/api/user/card", {
  method: "GET",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// get other person's business card
fetch("https://virtual-stack.herokuapp.com/api/user/person", {
  method: "GET",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
  //  body: enter the info for the person you want to find
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// update user's business card
fetch("https://virtual-stack.herokuapp.com/api/user/card", {
  method: "PUT",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
  //  body: whatever you want to change in the user's business card
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// delete a business card
fetch("https://virtual-stack.herokuapp.com/api/user/list", {
  method: "DELETE",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
  //  body: put the info for the user you want to deletel
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });

// add a user business card
fetch("https://virtual-stack.herokuapp.com/api/user/list", {
  method: "POST",
  headers: {
    Authorization:
      "Basic V2hpdGVTbm93OiQyeSQxMCRJWThNY0dMQnlpenQ1TXZzSWtXSEVlMmZMRHZEb1pYam1lTHRHMWY2TkpTcXNRblNxQ1BYeQ==",
    "Content-Type": "application/json"
  }
  //  body: add the info into the the list of business card
})
  .then(response => {
    return response.text();
  })
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error.message);
  });
