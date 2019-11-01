const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// fetches the json from the url
const promise = fetch(DOG_URL);

// grab the doggos element on the page
const doggos = document.querySelector(".doggos");

// what the fetch returns is called a promise
promise
  .then(function(response) {
    // will take the response from promise, format it into 
    // a json and will put it into processingPromise
    return response.json();
  })
  .catch(function(err){
    console.log(err)
  })

  // will log the json response
  .then(function(processedResponse) {
    console.log(processedResponse);
    const img = document.createElement("img");
    img.src  = processedResponse.message;
    doggos.appendChild(img);

    document.getElementById("myData").innerText = `URL ${processedResponse.message} Status ${processedResponse.status} `
    

  });

console.log("this will log first");

