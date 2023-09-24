import { reactive, Reactive, useObservable } from '@legendapp/state/react'
import { enableReactComponents } from "@legendapp/state/config/enableReactComponents";
import { motion } from "framer-motion"
import { State } from './State'

enableReactComponents();

const MotionDiv = reactive(motion.div)

export default function Persistence() {
  const animPosition = () => ({
    width: State.settings.showSidebar.get() ? 96 : 0
  })

  return (
    <div className="flex absolute inset-0">
      <MotionDiv
        className="bg-gray-600 text-center pt-2 text-white text-sm"
        $initial={animPosition}
        $animate={animPosition}
      >
        Sidebar
      </MotionDiv>
      <div className="flex-1 p-4">
        <div className="text-gray-500 text-sm pb-4">
        </div>
        <div>Username:</div>
        <Reactive.input
          className={classNameInput}
          $value={State.user.profile.name}
          placeholder="Type here..."
        />
        <div>
          <button
            className="bg-gray-300 rounded-lg px-4 py-2 mt-6"
            onClick={State.settings.showSidebar.toggle}
          >
            Toggle sidebar
          </button>
        </div>
        <div>
          <button
            className="bg-gray-300 rounded-lg px-4 py-2 mt-6"
            onClick={() => location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}

const classNameInput = "border rounded border-gray-300 px-2 py-1 mt-2"
const classNameError = "text-sm text-red-500 mb-2 h-5 pt-1"