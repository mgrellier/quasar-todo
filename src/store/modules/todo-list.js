// shape [{text, done}]
const state = {
  list: []
}

const getters = {
  completedTasks: state => {
    return state.list.filter(task => task.done)
  },
  incompleteTasks: state => {
    return state.list.filter(task => !task.done)
  }
}

const mutations = {
  addTask (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  editTask (state, {task, newText}) {
    task.text = newText
  },
  deleteTask (state, { task }) {
    state.list.splice(state.list.indexOf(task), 1)
  },
  toggleTask (state, { task }) {
    task.done = !task.done
  }
}

const actions = {
  addTask ({ commit }, text) {
    commit('addTask', text)
  },
  editTask ({ commit }, { task, newText }) {
    commit('editTask', { task, newText })
  },
  deleteTask ({ commit }, { task }) {
    commit('deleteTask', { task })
  },
  toggleTask ({ commit }, { task }) {
    commit('toggleTask', { task })
  }
}

export default ({
  namespaced: true,
  state,
  getters,
  mutations,
  actions
})
