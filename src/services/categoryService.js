import Database from './database'

const store = 'category'

function logError (operation) {
  return operation.catch(console.error.bind(console))
}

function add (value) {
  const category = {
    ...value,
    tasks: []
  }
  return logError(Database.add(store, category))
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
