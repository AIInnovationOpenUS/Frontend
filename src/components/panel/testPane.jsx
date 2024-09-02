import React from 'react';
import { useContext } from 'react';
import { DOMContext } from '../../context';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

function TestPane() {
    const { dom, setDom } = useContext(DOMContext);

    // "action": {
    //     "type": "onChange",
    //     "value": "/feeds/feed.xml"
    //   },
    //   "expectation": {
    //     "description": "Set the RSS feed link",
    //     "isReload": false,
    //     "isComponentVisible": true
    //   }
    console.log(dom.test_case)
  return (
    <div className="w-full h-full text-white px-4 py-6">
        <div>
            <h1 className='font-bold text-2xl text-[#e2e8f0]'>Action</h1>
            <div className='pl-6 mt-4'>
                <div className="w-full flex justify-start items-start gap-8 mb-8">
                    <h2 className='font-bold text-lg text-slate-400'>Type</h2>
                    <div className='font-medium text-white'>{dom.test_case?.action?.type}</div>
                </div>
                <div className="w-full flex justify-start items-start gap-8 mb-8">
                    <h2 className='font-bold text-lg text-slate-400'>Value</h2>
                    <div className='font-medium text-white'>{dom.test_case?.action?.value}</div>
                </div>
            </div>

        </div>

        <div>
            <h1 className='font-bold text-2xl text-[#e2e8f0]'>Expectation</h1>
            <div className='pl-6 mt-4'>
                <div className="w-full flex justify-start items-start gap-8 mb-8">
                    <h2 className='font-bold text-lg text-slate-400'>isReload</h2>
                    <div className='font-medium text-white'>{`${dom.test_case?.expectation?.isReload}`}</div>
                </div>
                <div className="w-full flex justify-start items-start gap-8 mb-8">
                    <h2 className='font-bold text-lg text-slate-400'>isComponentVisible</h2>
                    <div className='font-medium text-white'>{`${dom.test_case?.expectation?.isComponentVisible}`}</div>
                </div>
                <div className="w-full flex justify-start items-start gap-8 mb-8">
                    <h2 className='font-bold text-lg text-slate-400'>Description</h2>
                    <textarea className='w-full h-[200px] bg-transparent font-medium text-white' value={dom.test_case?.expectation?.description}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TestPane