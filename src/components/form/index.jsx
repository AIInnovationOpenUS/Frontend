import React, { useState, useContext } from 'react';
import Loading from '../loading';
import { DOMContext } from '../../context';
import { getResponse } from '../../utils';

function Form({data, setData}) {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    // const [resp, setResp] = useState();
    const { dom, setDom} = useContext(DOMContext);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        // const response = await fetch("https://tailwindcss.com/",{
        //     method: 'GET',
        //     headers: {
        //         // 'User-Agent': 'PostmanRuntime/7.41.1',
        //         'Accept': '*/*',
        //         'Accept-Encoding':'gzip, deflate, br',
        //     }
        // })
        const resp = await getResponse();
        // console.log("resp: ", resp)
        // setDom(dom)
        setData(resp);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    };
    console.log("resp: ",data);
    return (
        <div className="flex items-center h-full w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full justify-center items-center">
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className=" w-[50%] rounded-[50px] text-2xl p-4 border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="URL"
            />
            {loading ? <Loading /> :
                <button
                type="submit"
                className="bg-[#d10361] hover:brightness-110 text-white font-bold py-2 px-4 rounded-[50px]"
                >
                    Submit
                </button>
            }
        </form>
        </div>
  )
}

export default Form