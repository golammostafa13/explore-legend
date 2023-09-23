import { computed, observable } from "@legendapp/state"

const state$ = observable({
    fname: 'hello',
    lname: 'there',
    setName: (name: string) => {
        // Create Actions by just adding a function
        const [fname, lname] = name.split(name)
        state$.assign({
            fname,
            lname
        })
    },
    fullname: computed((): string => {
        // Set up computed observables within your state object
        // or if you prefer them elsewhere that's cool too 🤟
        return `${state$.fname.get()} ${state$.lname.get()}`
    })
})

export default function Observable() {
  return (
    <>
      
    </>
  );
}
