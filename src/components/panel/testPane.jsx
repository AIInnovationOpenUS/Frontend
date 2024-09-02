import React from 'react';
import { useContext } from 'react';
import { DOMContext } from '../../context';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import TestCase from './testCase';

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
    <>
    <div className="w-full h-full text-white px-4 py-6 overflow-auto scrollbar">
        <TestCase  />
    </div>
    <div className="w-full flex justify-center gap-4">
        <button className="w-2/6 bg-transparent hover:bg-lime-500 text-white font-semibold hover:text-white py-2 px-4 border border-lime-500 hover:border-transparent rounded">
            Create
        </button>
        <button className="w-2/6 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Run all
        </button>
    </div>
</>
  )
}

export default TestPane