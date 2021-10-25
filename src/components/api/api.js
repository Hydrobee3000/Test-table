var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/gasTemp').reply(200, {
  gasTemp: [
    { id: 1, temp: 27 },
    { id: 2, temp: 31 },
    { id: 3, temp: 26 },
    { id: 4, temp: 26 },
  ],
})

axios.get('/gasTemp').then(function (response) {
  console.log(response.data)
})
