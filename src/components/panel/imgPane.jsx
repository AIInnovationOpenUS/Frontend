import React, { useContext, useEffect, useState } from 'react'
import { DOMContext } from '../../context'
// import puppeteer from 'puppeteer';

function ImgPane() {
    const { dom, setDom } = useContext(DOMContext);
    const [cover, setCover] = useState(false);
    // console.log("parse: ", parse(dom.DOM));
    // useEffect(async ()=>{
    //     const loadImg = async() => {
    //         const browser = await puppeteer.launch();
    //         const page = await browser.newPage();
    //         await page.goto(dom.url);
    //         const fileElement = await page.waitForSelector('div');
    //         const res = await fileElement.screenshot();
    //         setImg(res);
    //     }
    //     await loadImg();
    // },[])
    // console.log("DOM: ",img)
    console.log("base64: ", dom)
  return (
    <div className="w-full h-full flex justify-center items-center" >
        <div className='w-full h-full flex justify-center items-center hover:brightness-110 hover:cursor-pointer' onClick={() => {setCover(!cover)}}>
            <img className='object-contain max-w-[100%] max-h-[100%]' src={`data:image/png;base64,${dom.imageBase64}`}  />
        </div>
        {!cover ? null :
        <div className="absolute top-0 left-0 backdrop-blur-sm bg-slate-400/60  w-full h-svh z-10" onClick={() => {setCover(!cover)}}>
            <img className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg z-20' src={`data:image/png;base64,${dom.imageBase64}`} />
        </div>
        }
         {/* <embed src={'https://tailwindcss.com/'} className='w-full h-full' scale="tofit" onClick={() => {console.log("a")}} /> */}
    </div>
  )
}

export default ImgPane