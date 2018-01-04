import Database from './database'

const store = 'category'

function logError (operation) {
  return operation.catch(console.error.bind(console))
}

function add (value) {
  return logError(Database.add(store, value))
}

function get (name) {
  return logError(Database.find(store, name))
}

function getAll () {
  return logError(Database.findAll(store))
}

function update (category) {
  return logError(Database.update(store, category))
}
export default {
  get,
  getAll,
  add,
  update
}
