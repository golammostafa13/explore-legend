import {Computed, Show, useObservable} from '@legendapp/state/react'
import { useInterval } from '../utils/hooks'

function LegendStateModal() {
    const showChild = useObservable(false)
    // const text = useComputed(() => showChild.get() ? 'true' : 'false')
  
    useInterval(() => {
      showChild.set((v) => !v)
    }, 1000)
  
    return (
      <div className='flex flex-col'>
        <span>Showing child: </span>
  
        <Computed>
          <span
            className={showChild.get() ? 'text-red-900' : 'text-green-900'}
          >
            {showChild.get() ? 'true' : 'false'}
          </span>
        </Computed>
  
        <Show if={showChild}>
          <div>Child element</div>
        </Show>
        <button onClick={() => showChild.set((v) => !v)}>Show child</button>
      </div>
    )
  }

  export default LegendStateModal;