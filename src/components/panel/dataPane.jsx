import React, { useContext } from 'react'
import { DOMContext } from '../../context'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import ImgPane from './imgPane';

function DataPane() {
    const { dom, setDom } = useContext(DOMContext);

    // console.log("DOM: ",dom)
  return (
    <div className="w-full h-full text-white px-4 py-6">
        <div className="w-full h-1/3 bg-[#19233b] rounded-xl overflow-hidden border-2 border-solid border-white mb-8">
                <ImgPane />
            </div>
        <div className="w-full flex justify-start items-center gap-8 mb-8">
            <h2 className='font-bold text-lg text-[#b3b9c4]'>Name</h2>
            <div className='font-medium text-white'>{dom.label}</div>
        </div>
        <div className="w-full flex justify-start items-start gap-8">
            <h2 className='font-bold text-lg text-[#b3b9c4]'>DOM</h2>
            <SyntaxHighlighter
                className=""
                language='html'
                wrapLongLines={true}
                style={materialDark}
            >
                {dom.DOM}
            </SyntaxHighlighter>
        </div>
    </div>
  )
}

export default DataPane