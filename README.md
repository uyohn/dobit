# DOBIT Proxy Server

This is just a simple, basic node-js proxy server. 
I've made it to avoid CORS errors while working 
with external APIs on localhost.

## USAGE

1. clone the repo `git clone ...` and `cd dobit`
2. create `.env` file and set the variables
3. install deps `npm ci`
4. start `node index.js`
  
Now your DOBIT proxy should be running.
  
Make requests to it:

```js
    fetch(`${BASE_URL}/?url=/api/path/to/resource?param1=true...`)
        .then(res => res.json())
        .then(data => console.log(data))
```

DOBIT will take the query param `url` and forward  
it to the API URL set in `.env`. Then it returns  
the response back to client.