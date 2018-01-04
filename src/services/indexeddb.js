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

function connect (database, version, createDatabase) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(database, version)
    listenRequest(request, event => {
      resolve(event.target.result)
    }, reject)
    request.addEventListener('upgradeneeded', createDatabase)
  })
}

function find (db, store, key) {
  return new Promise((resolve, reject) => {
    const objectstore = read(db, [store]).objectStore(store)
    const request = objectstore.get(key)
    listenRequest(request, request => resolve(request.target.result), reject)
  })
}

function findAll (db, store, key, count) {
  return new Promise((resolve, reject) => {
    const objectstore = read(db, [store]).objectStore(store)
    const request = objectstore.getAll(key, count)
    listenRequest(request, request => resolve(request.target.result), reject)
  })
}

function add (db, store, value) {
  return new Promise((resolve, reject) => {
    const objectstore = write(db, [store]).objectStore(store)
    const request = objectstore.add(value)
    listenRequest(request, resolve, reject)
  })
}

function update (db, store, value, key) {
  return new Promise((resolve, reject) => {
    const objectstore = write(db, [store]).objectStore(store)
    const request = objectstore.put(value, key)
    listenRequest(request, resolve, reject)
  })
}

export default {
  connect,
  find,
  findAll,
  add,
  update
}
