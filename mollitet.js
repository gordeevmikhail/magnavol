var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);  // Opens a GET request to the specified URL asynchronously
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);  // Logs the response data if request was successful
    } else {
      console.error('Request failed with status:', xhr.status);  // Logs error if request failed
    }
  }
};
xhr.send();  // Sends the request
