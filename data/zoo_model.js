const knex = require('knex')

const config = {
    client: 'sqlite3', //depends on the library we're using
    connection: {
        filename: './data/lambda.sqlite3' //where the db file is
    },
    useNullAsDefault: true, //sqlite3 specific
}

const db = knex(config) //object all querie methods live on

//all queries resolve to a promise
//get all zoos
const find = async () => await db('zoos')

//select * from zoos where id = id
const findById = async id => await db('zoos').where('id', id)
//OR
// const findById = async id => await db('zoos').where({id})

//insert into zoos (name, age) values (zoo.name, zoo.age)
const add = async zoo => await db('zoos').insert(zoo)

//update users set name=changes.name where id = id
const update = async (id, changes) => await db('zoos').where({id}).update(changes)

//testing
const execute = async () => {
    await update(2, {name: 'farts5'})
    const zoos = await find()
    console.log(zoos)
}
execute()