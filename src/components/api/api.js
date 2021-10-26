export var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/data').reply(200, {
  gasTemp: [
    { id: 1, temp: 27 },
    { id: 2, temp: 31 },
    { id: 3, temp: 26 },
    { id: 4, temp: 26 },
    { id: 5, temp: 28 },
    { id: 6, temp: 0 },
  ],
})

export const mockAPI = {
  getData() {
    return axios.get('/data').then((response) => {
      return response.data
    })
  },
}
