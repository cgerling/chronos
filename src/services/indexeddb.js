function transaction (db, stores, mode) {
  return db.transaction(stores, mode)
}

function read (db, stores) {
  const mode = IDBTransaction.READ_ONLY || 'readonly'
  return transaction(db, stores, mode)
}

function write (db, stores) {
  const mode = IDBTransaction.READ_WRITE || 'readwrite'
  return transaction(db, stores, mode)
}

function listenRequest (request, resolve, reject) {
  request.addEventListener('error', reject)
  request.addEventListener('success', resolve)
}

function connect (database, version) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(database, version)
    listenRequest(request, event => {
      resolve(event.target.result)
    }, reject)
    request.addEventListener('upgradeneeded', event => {
      const db = event.target.result

      db.createObjectStore('category', { autoIncrement: true })
    })
  })
}

function find (db, store, key) {
  return new Promise((resolve, reject) => {
    const objectstore = read(db, [store]).objectStore(store)
    const request = objectstore.get(key)
    listenRequest(request, request => resolve(request.result), reject)
  })
}

function add (db, store, value) {
  return new Promise((resolve, reject) => {
    const objectstore = write(db, [store]).objectStore(store)
    const request = objectstore.add(value)
    listenRequest(request, resolve, reject)
  })
}

export default {
  connect,
  find,
  add
}