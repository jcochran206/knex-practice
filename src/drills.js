require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

function searchByListName(searchTerm) {
    knexInstance
    .select('*')
    .from('shopping_list')
    .where('list_name', 'ILIKE', '%${searchTerm}%')
    .then(result => {
        console.log('Search term', {searchTerm})
        console.log(result)
    })
}

searchByListName('urger')


console.log('knex and driver installed correctly');