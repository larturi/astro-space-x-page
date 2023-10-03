import { useState } from "preact/hooks"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div class="flex justify-center gap-4 mb-10">
            <button class="bg-sky-500 p-3 text-white" onClick={() => setCounter(counter - 1)}>-</button>
            <span class="text-white text-3xl mt-1">{counter}</span>
            <button class="bg-sky-500 p-3 text-white" onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}

export default Counter

