export default function createLocalStoragePlugin (
  {
    storageKey = 'vuex',
    namespace = '',
    data = ''
  } = {}
) {
  return store => {
    store.subscribe((mutation, state) => {
      window.localStorage.setItem(storageKey, JSON.stringify(state[namespace][data]))
    })
  }
}
