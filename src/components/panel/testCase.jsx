import React, { useState } from 'react'
import  PlayButton from '../../assets/play-button.svg'
import  SettingButton from '../../assets/settings.svg'
import  Down from '../../assets/down.svg'

function TestCase({testcase}) {
    // const {name, test_case} = testData;
    const [state, setState] = useState({
        drop: false,
    })

    const pattern = /(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/;
    const steps = testcase?.expectation?.description.split(pattern);
    // console.log("steps: ",steps);
  return (
    <div className='my-2'>
        <div className="w-full h-[50px] rounded-lg flex justify-between px-6 items-center shadow-sm shadow-[#3b82f6] select-none">  
            <div className="flex items-center gap-2">
                <img 
                    src={Down} 
                    style={{
                        width: '18px', 
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        rotate: `${!state.drop ? '270deg' : '0deg'}`
                    }}
                /> 
                <p className="text-white font-medium text-lg hover:underline hover:cursor-pointer" onClick={(prev) => { setState({... prev, drop: !state.drop}) }}>{testcase.name}</p>
            </div>
            <div className="flex gap-2 items-center">
                <img 
                    src={SettingButton} 
                    style={{
                        width: '18px', 
                        height: '18px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                /> 
                <img 
                    src={PlayButton} 
                    style={{
                        width: '20px', 
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                /> 
            </div>
        </div>
        {state.drop ? 
        <div className="w-full pl-12 mt-4">
            <div>
                <div className='font-bold text-lg text-[#e2e8f0]'>Action</div>
                <div className='pl-6 mt-4'>
                    <div className="w-full flex justify-start items-start gap-8 mb-4">
                        <h2 className='font-bold text-base text-slate-400'>Type</h2>
                        <div className='font-medium text-white'>{testcase?.action?.type}</div>
                    </div>
                    <div className="w-full flex justify-start items-start gap-8 mb-4">
                        <h2 className='font-bold text-base text-slate-400'>Value</h2>
                        <div className='font-medium text-white'>{testcase?.action?.value}</div>
                    </div>
                </div>

            </div>

            <div>
                <div className='font-bold text-lg text-[#e2e8f0]'>Expectation</div>
                <div className='pl-6 mt-4'>
                    <div className="w-full flex justify-start items-start gap-8 mb-4">
                        <h2 className='font-bold text-base text-slate-400'>isReload</h2>
                        <div className='font-medium text-white'>{`${testcase?.expectation?.isReload}`}</div>
                    </div>
                    <div className="w-full flex justify-start items-start gap-8 mb-4">
                        <h2 className='font-bold text-base text-slate-400'>isComponentVisible</h2>
                        <div className='font-medium text-white'>{`${testcase?.expectation?.isComponentVisible}`}</div>
                    </div>
                    {/* <div className="w-full flex justify-start items-start gap-8 mb-4">
                        <h2 className='font-bold text-base text-slate-400'>Description</h2>
                        <textarea className='w-full h-[200px] bg-transparent font-medium text-white' value={dom.test_case?.expectation?.description}/>
                    </div> */}
                </div>
            </div>
            <div>
                <div className='font-bold text-lg text-[#e2e8f0]'>Description</div>
                <ul className='pl-6 mt-4 list-disc'>
                    <div className='pl-6 mt-4'>
                        {
                        steps.map((value, index) => {
                                return (
                                    <li className="text-white text-base mb-2"> {value} </li>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        </div> : null
    }
    </div>

  )
}

export default TestCase