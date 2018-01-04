import IndexedDb from './indexeddb'

const dbName = 'chronos'
const version = 1

function createDatabase (event) {
  const db = event.target.result

  if (!db.objectStoreNames.contains('category')) {
    const category = db.createObjectStore('category', { keyPath: 'name' })
    category.createIndex('tasks', 'tasks', { unique: true, multiEntry: true })
  }
}

function connect () {
  return IndexedDb.connect(dbName, version, createDatabase)
}

function find (store, key) {
  return connect().then(db => IndexedDb.find(db, store, key))
}

function findAll (store, key, count) {
  return connect().then(db => IndexedDb.findAll(db, store, key, count))
}

function add (store, value) {
  return connect().then(db => IndexedDb.add(db, store, value))
}

function update (store, value, key) {
  return connect().then(db => IndexedDb.update(db, store, value, key))
}

export default {
  name: dbName,
  find,
  findAll,
  add,
  update
}
