import { computed, observable } from '@legendapp/state'
import { persistObservable } from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

export const State = observable({
  settings: {
    showSidebar: false
  },
  user: {
    profile: {
      name: ''
    }
  }
})

persistObservable(State, {
  local: 'example',
  persistLocal: ObservablePersistLocalStorage,
})

export const Profile = observable({
  fname: 'hello',
  lname: 'there',
  setName: (name) => {
      // Create Actions by just adding a function
      const [fname, lname] = name.split(name)
      Profile.assign({
          fname,
          lname
      })
  },
  fullname: computed(() => {
      // Set up computed observables within your state object
      // or if you prefer them elsewhere that's cool too 🤟
      return `${Profile.fname.get()} ${Profile.lname.get()}`
  })
})