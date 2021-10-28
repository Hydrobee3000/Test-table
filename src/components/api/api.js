export var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios)

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/data').reply(200, {
  gasTemp: [
    { id: 1, value: 26 },
    { id: 2, value: 31 },
    { id: 3, value: 26 },
    { id: 4, value: 26 },
    { id: 5, value: 28 },
    { id: 6, value: 0 },
  ],
  gasPress: [
    { id: 1, value: 1900 },
    { id: 3, value: 1900 },
  ],
})

export const mockAPI = {
  getData() {
    return axios.get('/data').then((response) => {
      return response.data
    })
  },
}
