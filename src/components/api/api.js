export var axios = require('axios')
var MockAdapter = require('axios-mock-adapter')

var mock = new MockAdapter(axios)

mock.onGet('/data').reply(200, {
  gasTemp: [
    //информация о температуре газа
    { id: 1, value: 29 },
    { id: 2, value: 31 },
    { id: 3, value: 26 },
    { id: 4, value: 26 },
    { id: 5, value: 28 },
    { id: 6, value: 0 },
  ],
  gasPress: [
    //информация о давлении газа
    { id: 1, value: 1900 },
    { id: 3, value: 1900 },
  ],
})

export const mockAPI = {
  // запрос на получение данных
  getData() {
    return axios.get('/data').then((response) => {
      return response.data
    })
  },
}
