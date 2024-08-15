import React, { useEffect } from 'react'
import RightArrow from './rightArrow'
import { Link } from 'react-router-dom'

const navbar = () => {


    return (
        <>
            <div id="navbar" className=' w-full  py-3 px-3 z-10 capitalize'>
                <div className="nameandIcon flex justify-between items-center">
                    <div className="name text-xl font-bold text-blue-800">diaries</div>
                    <div className="icons h-6 flex justify-center items-center">
                        <svg className=' h-full mx-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                        <svg className=' h-full mx-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        <div className=' h-6 w-6 rounded-full bg-black mx-3'></div>
                    </div>
                </div>
                <div className="categoris flex flex-wrap justify-center items-center text-base font-semibold md:my-4 my-2">
                    <span className=' px-2 me-2 py-1 my-1 bg-slate-300 rounded-md'>billionaires</span>
                    <span className=' px-2 mx-2 py-1 my-1 bg-slate-300 rounded-md'>innovation</span>
                    <span className=' px-2 mx-2 py-1 my-1 bg-slate-300 rounded-md'>leadership</span>
                    <span className=' px-2 mx-2 py-1 my-1 bg-slate-300 rounded-md'>money</span>
                    <span className=' px-2 mx-2 py-1 my-1 bg-slate-300 rounded-md'>business</span>
                    <span className=' px-2 mx-2 py-1 my-1 bg-slate-300 rounded-md'>lifestyle</span>
                    <span className=' px-2 mx-2 py-1 my-1 bg-slate-300 rounded-md'>real estate</span>
                    <span className=' px-2 ms-2 py-1 my-1 bg-slate-300 rounded-md'>store</span>
                </div>

            </div>
        </>
    )
}

export default navbar