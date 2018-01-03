import Database from './database'

const store = 'category'

function add (value) {
  return Database.add(store, value)
    .catch(console.error.bind(console))
}

function getAll () {
  return Database.findAll(store)
    .catch(console.error.bind(console))
}

export default {
  getAll,
  add
}
