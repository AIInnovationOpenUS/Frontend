import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form'
import LayoutFlow from './components/reactFlowPane'
import ConfigPanel from './components/panel'

function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState();
    console.log('data: ',data)
    return (
        <>
            <div className="h-lvh flex gap-1 justify-center">
                {!data ? <Form data={data} setData={setData} />
                    :
                    <>
                        <LayoutFlow data={data} />
                        <ConfigPanel />  
                    </>

            }
            </div>
        </>
    )
}

export default App
