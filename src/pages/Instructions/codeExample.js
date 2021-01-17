export const JAVASCRIPT = 'javascript'
export const PYTHON = 'python'

export const getUsageBlock = (language, token, dbName) => {
    const code = {
        'python':
`from dbhub import get_database

db = get_database(
   token='${token}',
   db_name='${dbName}'
)

collection = db.get_collection('users')
collection[1] = {'name': 'Ivan'}
user = collection[1]
user.age = 5
collection.update({1: {'age': user.age}})
# user = {name: 'Ivan', age: user}

del collection[1]`,

        'javascript':
            `const {getDatabase} = require('dbhub');

const db = getDatabase(
   '${token}',
   '${dbName}'
);

const collection = db.getCollection('users');
collection[1] = {name: 'Ivan'}
let user = collection[1]
user.age = 5
collection.update({1: {age: user.age}})
// user = {name: 'Ivan', age: user}

collection.delete(1)`
    }

    return code[language]
}

export const getInstall = (language) => {
    let installs = {
        'javascript': 'npm install dbhub -s',
        'python': 'pip install dbhub'
    }
    return installs[language]
}