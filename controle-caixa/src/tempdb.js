const {  Pool, Client } = require('pg');
const connectionURI = 'postgresql://pe_de_chinelo:@localhost:5432/bd_chinelo';

const client = new Client({
    user: 'pe_de_chinelo',
    host: 'localhost',
    database:'bd_chinelo',
    password: '',
    port: 5432,
});
client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

