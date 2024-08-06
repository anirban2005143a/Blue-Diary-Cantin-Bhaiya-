import React from 'react'
import img from "/download (5).jpeg"

const Billionaires = () => {
    return (
        <>
            <div className="topBg bg-neutral-900 flex justify-center" style={{ height: `${window.innerHeight * 0.3}px` }}>
                <div className="heding text-4xl font-[800] text-white mt-5">Billionaires</div>
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

            <div className="exploreBtn flex justify-center my-6">
                <button
                    className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-900 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                >
                    <span className="text-lg">More</span>
                    <div
                        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                    >
                        <div className="relative h-full w-10 bg-white/20"></div>
                    </div>
                </button>

            </div>

        </>
    )
}

export default Billionaires