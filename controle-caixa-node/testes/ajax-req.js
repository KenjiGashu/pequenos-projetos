var axios = require('axios');

var instance = axios.create({
    timeout: 1000,
    proxy: {
	host: '127.0.0.1',
	port: 4200,
    }
});
instance.get(process.argv[2])
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
