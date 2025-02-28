import useCounterStore from "./stores/store";


export default function Counter() {
    const {count ,increment , decrement , initState} = useCounterStore();
    return(
    <div>
        
         <div className="flex items-center justify-center">
        <span className="text-4xl font-bold mr-4">{count}</span>
        </div>

        <div className="flex flex-col">

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2" onClick={increment}>
            increment
        </button>

        <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={decrement}>
            Decrement
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={initState}>
        InitialState
        </button>

        </div>
    </div>
    )
}