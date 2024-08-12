import React, { useEffect } from 'react'
import RightArrow from './rightArrow'
import { Link } from 'react-router-dom'

const navbar = () => {

    useEffect(() => {
        const bar = document.querySelector("#navbar .bar")
        const cross = document.querySelector("#navbar .cross")
        const sideNavbar = document.querySelector("#sideNavbar")
        bar.addEventListener('click', () => {
            bar.classList.add("hidden")
            cross.classList.remove("hidden")
            sideNavbar.classList.remove("-left-full")
            sideNavbar.classList.add("left-0")
        })
        cross.addEventListener('click', () => {
            bar.classList.remove("hidden")
            cross.classList.add("hidden")
            sideNavbar.classList.add("-left-full")
            sideNavbar.classList.remove("left-0")
        })
    }, [])


    return (
        <>
            <div id="navbar" className=' w-full bg-neutral-900  py-3 px-3 z-10 '>
                <div className='relative w-full flex justify-start items-center'>

                    <div className=" cursor-pointer" style={{ height: "30px" }}>
                        <svg className='bar h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <svg className='cross h-full hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>

                    <div id="name" className=' mx-4 text-2xl text-white font-[600]'>Diaries</div>

                    <div id="sideNavbar" className=' transition-all duration-500 bg-neutral-900 w-2/12 mt-4 absolute top-full -left-full'>
                        <ul className=' relative w-full text-white text-lg font-[600] flex flex-col justify-evenly' style={{ height: `${window.innerHeight - 80}px` }}>
                           <Link to="/billionaires"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Billionaires<RightArrow/> </li></Link>
                           <Link to="/institutions"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Institutions<RightArrow/> </li></Link>
                           <Link to="/technology"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Technology<RightArrow/> </li></Link>
                           <Link to="/celebrity"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Celebrity<RightArrow/> </li></Link>
                           <Link to="/lists"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Lists<RightArrow/> </li></Link>
                           <Link to="/startups"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Startups<RightArrow/> </li></Link>
                           <Link to="/top10"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Top 10<RightArrow/> </li></Link>
                           <Link to="/realestate"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Real estate<RightArrow/> </li></Link>
                           <Link to="/sports"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Sports<RightArrow/> </li></Link>
                           <Link to="/blogwritting"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Blog writting<RightArrow/> </li></Link>
                           <Link to="/contact"> <li className=' w-full px-4 transition-all cursor-pointer hover:scale-105 flex justify-between items-center' >Contact us<RightArrow/> </li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar