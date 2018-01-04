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

function addTask (categoryName, task) {
  return logError(Database.find(store, categoryName).then(category => {
    const { tasks } = category

    const newCategory = {
      ...category,
      tasks: [...tasks, task]
    }

    return Database.update(store, newCategory)
  }))
}

export default {
  get,
  getAll,
  add,
  update,
  addTask
}
