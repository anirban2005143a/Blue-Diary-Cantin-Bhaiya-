import React, { useEffect, useRef, useState } from 'react'
import img from "/download (5).jpeg"
import Navbar from '../navbar'


const home = () => {


    return (
        <>
            <Navbar />
            <div id="part1">
                <div className="items flex flex-wrap justify-center items-center">
                    {[1, 2, 3, 4, 5].map(() => {
                        return <>
                            <div className="item md:w-60 sm:w-52 w-40  md:h-72 sm:h-64 h-56 relative md:m-3 m-1">
                                <div className="img absolute w-full h-full">
                                    <img className='w-full h-full object-cover' src={img} alt="oops" />
                                </div>
                                <div className="texts absolute w-full bottom-0 left-0 text-white m-2">
                                    <div className=" text-xl font-bold">Virtual world</div>
                                    <div>16k views</div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
            <div id="part2">
                    <div className=' flex flex-wrap justify-center items-center border-t-2'>
                        {[1,2,3,4,5].map(()=>{

                            return <>
                                <div className=' w-72 capitalize m-3'>
                                    <div className="img w-full h-48">
                                        <img className=' w-full h-full' src={img} alt="oops" />
                                    </div>
                                    <div className="title text-lg font-bold">richest persons in every country</div>
                                    <div>5k views</div>
                                </div>
                            </>
                        })}
                    </div>
            </div>
        </>
    )
}

export default home