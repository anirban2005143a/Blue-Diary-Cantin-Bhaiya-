import React, { useEffect } from 'react'
import img from "/download (5).jpeg"

const home = () => {

    useEffect(() => {
        const h = document.querySelector("#part2 .leftPart").clientHeight
        document.querySelector("#part2 .rightPart").style.height = `${h}px`
    }, [])


    return (
        <>
            <div id="part1">
                <div className="topBg bg-neutral-900 flex justify-center" style={{ height: `${window.innerHeight * 0.3}px` }}>
                    <div className="heding text-4xl font-[800] text-white mt-5">Headlines</div>
                </div>

                <div className="topHeadLine">
                    <div className="1stHeadLineImg -mt-10 mx-auto mb-4 w-5/12">
                        <img className=' w-full' src={img} />
                    </div>
                    <div className="headline text-3xl text-center font-[500] mx-auto font-serif text-black w-7/12 ">My name is anirban and i am from kolkata west bengal</div>
                </div>

                <div className=" py-4 px-4 w-8/12 mx-auto content font-serif mb-6 border-b-2 border-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia voluptate nostrum ex quis? Explicabo voluptate quidem, molestiae distinctio minima ea illo sapiente doloremque totam. Fuga id aspernatur quo vel.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia voluptate nostrum ex quis? Explicabo voluptate quidem, molestiae distinctio minima ea illo sapiente doloremque totam. Fuga id aspernatur quo vel.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia voluptate nostrum ex quis? Explicabo voluptate quidem, molestiae distinctio minima ea illo sapiente doloremque totam. Fuga id aspernatur quo vel.
                </div>

                <div className="otherHeadLines p-4 flex flex-wrap justify-center items-center mx-auto w-full">
                    {[1, 2, 3, 4, 5, 6].map(() => {
                        return <div className='p-3 m-3 bg-gray-200 w-3/12'>
                            <div className="img">
                                <img className=' w-full' src={img} />
                            </div>
                            <div className="headline text-lg font-[600] font-serif">my nam eis anirban das and i love kolkata</div>
                            <div className="content text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eveniet expedita consequuntur nemo saepe, perspiciatis, corrupti laudantium doloribus vitae reprehenderit quia, asperiores ipsam </div>
                        </div>
                    })}
                </div>

            </div>

            <div id="part2" >
                <div className="link py-4 px-12 mx-12 text-xl hover:font-[500] cursor-pointer border-t-2 border-slate-900 ">Technology</div>
                <div className=' flex justify-center items-center'>
                    <div className="leftPart w-7/12 bg-stone-200 py-6">
                        <div className="topHeadLine">
                            <div className="1stHeadLineImg mx-auto mb-4 w-4/5">
                                <img className=' w-full' src={img} />
                            </div>
                            <div className="headline text-3xl text-center font-[500] mx-auto font-serif text-black w-10/12 ">My name is anirban and i am from kolkata west bengal</div>
                        </div>

                        <div className=" py-4 px-2 w-10/12 mx-auto content font-serif mb-6 border-b-2 border-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia voluptate nostrum ex quis? Explicabo voluptate quidem, molestiae distinctio minima ea illo sapiente doloremque totam. Fuga id aspernatur quo vel.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia voluptate nostrum ex quis? Explicabo voluptate quidem, molestiae distinctio minima ea illo sapiente doloremque totam. Fuga id aspernatur quo vel.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium mollitia voluptate nostrum ex quis? Explicabo voluptate quidem, molestiae distinctio minima ea illo sapiente doloremque totam. Fuga id aspernatur quo vel.
                        </div>
                    </div>
                    <div className="rightPart w-3/12  p-3 overflow-auto">
                        <div className="verticalSlide">
                            {[1, 2, 3, 4, 5, 6].map(() => {
                                return <div className=' my-4 bg-gray-200 w-full'>
                                    <div className="img">
                                        <img className=' w-full' src={img} />
                                    </div>
                                    <div className="headline text-lg font-[600] font-serif">my nam eis anirban das and i love kolkata</div>
                                    <div className="content text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus eveniet expedita consequuntur nemo saepe, perspiciatis, corrupti laudantium doloribus vitae reprehenderit quia, asperiores ipsam </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default home