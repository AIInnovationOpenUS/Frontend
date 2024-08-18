import React, { useState } from 'react'
import DataPane from './dataPane'
import TestPane from './testPane'

function ConfigPanel() {
    const [state,setState] = useState({
        select: 'DATA'
    })

    const onClickData = () => {
        setState({...state, select: 'DATA'})
    }

    const onClickTest = () => {
        setState({...state, select: 'TEST'})
    }
    return (
        <div className="w-1/3 h-full border-2 border-white  rounded-tr-lg rounded-br-lg">
            <div class="inline-flex">
                <button 
                    onClick={onClickData}
                    className={`${state.select=='DATA' ? 'bg-gray-400' : 'bg-gray-300 '} hover:bg-gray-400 text-gray-800 font-bold py-2 px-4`}    
                >
                    DATA
                </button>
                <button 
                    onClick={onClickTest}
                    className={`${state.select=='TEST' ? 'bg-gray-400' : 'bg-gray-300 '} hover:bg-gray-400 text-gray-800 font-bold py-2 px-4`}    
                >
                    TESTCASE
                </button>
            </div>
            <div className="w-full h-full p-2 flex flex-col items-center gap-8">
                <div className="w-full h-4/5 bg-transparent border-2 border-solid border-gray-500">
                    {
                        state.select == 'DATA' ? <DataPane /> : <TestPane />
                    }
                </div>
                <button className="w-2/3 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Run
                </button>
            </div>
            
        </div>
  )
}

export default ConfigPanel