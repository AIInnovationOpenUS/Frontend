import React, { useState } from 'react'
import DataPane from './dataPane'
import TestPane from './testPane'
import ImgPane from './imgPane'

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
        <div className="w-1/3 h-full">
            {/* <div className="w-full h-1/3 bg-[#19233b] rounded-xl overflow-hidden border-2 border-solid border-white mb-0.5">
                <ImgPane />
            </div> */}
            <div className="w-full h-full bg-[#19233b] rounded-xl overflow-hidden border-2 border-solid border-white">
                <div class="inline-flex">
                    <button 
                        onClick={onClickData}
                        className={`${state.select=='DATA' ? 'bg-gray-300' : 'bg-gray-400 '} hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-xl mt-2 ml-2`}    
                    >
                        DATA
                    </button>
                    <button 
                        onClick={onClickTest}
                        className={`${state.select=='TEST' ? 'bg-gray-300' : 'bg-gray-400 '} hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-xl mt-2 ml-2`}    
                    >
                        TESTCASE
                    </button>
                </div>
                <div className="w-full h-full p-2 flex flex-col items-center gap-8 pb-6">
                    <div className="w-full h-[90%] bg-transparent rounded-xl">
                        {
                            state.select == 'DATA' ? <DataPane /> : <TestPane />
                        }
                    </div>
                </div>
            </div> 
        </div>
  )
}

export default ConfigPanel