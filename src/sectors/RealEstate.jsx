import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar'

const RealEstate = () => {

    const otherNews = useRef()

    const [topHeadLines, settopHeadLines] = useState([
        {
            "title": "NASA to study rock samples from Mars using machine learning algorithms",
            "description": "Machine learning algorithms will be used to detect organic compounds in the Martian samples.",
            "content": "The use cases of AI/ML seem endless as US space agency NASA has now said that it is developing machine learning algorithms that can help analyse rocks and other samples from Mars.\nIn order to collect these samples and more, the European Space Agency ... [2095 chars]",
            "url": "https://indianexpress.com/article/topHeadLines/science/nasa-rock-samples-mars-machine-learning-9500352/",
            "image": "https://images.indianexpress.com/2024/08/Tech-feature-images11.jpg",
            "publishedAt": "2024-08-07T09:29:39Z",
            "source": {
                "name": "The Indian Express",
                "url": "https://indianexpress.com"
            }
        },
        {
            "title": "Government set to table Waqf (Amendment) Bill in Lok Sabha soon",
            "description": "Several Opposition parties have said they will resist any plans by the government to bring a Bill in Parliament to make changes to the Waqf Act, 1995.",
            "content": "The government is set to table the Waqf (Amendment) Bill, 2024, in the Lok Sabha to amend the Waqf Act, 1995. The new Bill has introduced the ‘district collector’ in the Act and has given the post some powers to resolve disputes related to the Waqf A... [4820 chars]",
            "url": "https://indianexpress.com/article/india/government-set-to-table-waqf-amendment-bill-in-lok-sabha-9499863/",
            "image": "https://images.indianexpress.com/2024/08/cover_fee45d.jpg",
            "publishedAt": "2024-08-07T08:40:55Z",
            "source": {
                "name": "The Indian Express",
                "url": "https://indianexpress.com"
            }
        },
        {
            "title": "Ola Electric Mobility IPO: Share allotment expected on August 7, here’s how to check status",
            "description": "The investors, who participated in the IPO subscription, can check the share allotment status on the websites of the NSE, BSE and the IPO registrar Link Intime India Pvt Ltd.",
            "content": "NSE\nOla Electric Mobility IPO details\nAbout Ola Electric Mobility\nOla Electric Mobility IPO allotment status is expected to be finalised on Wednesday, August 7, after the subscription window for the IPO closed on Tuesday.The initial public offering (... [2892 chars]",
            "url": "https://www.cnbctv18.com/market/ola-electric-mobility-ipo-gmp-share-allotment-expected-on-august-7-how-to-check-status-19455518.htm",
            "image": "https://images.cnbctv18.com/uploads/2024/07/ola-electric-1-2024-07-09b937bf0e8ae05210cbc7f63d05a0da.jpg?im=FitAndFill,width=500,height=300",
            "publishedAt": "2024-08-07T02:52:39Z",
            "source": {
                "name": "CNBCTV18",
                "url": "https://www.cnbctv18.com"
            }
        },
        {
            "title": "Chandrababu Naidu holds talks with key officials from Google, YouTube",
            "description": "Andhra Pradesh Chief Minister held talks with top officials from Google and YouTube, including YouTube CEO Neal Mohan and proposed the setting up of a YouTube Academy in Amaravati.",
            "content": "Andhra Pradesh Chief Minister Chandrababu Naidu on Tuesday held talks with top officials from Google and YouTube, including YouTube CEO Neal Mohan, about the setting up of a YouTube Academy in Amaravati.\nThe virtual meeting \"explored strategic collab... [1743 chars]",
            "url": "https://www.indiatoday.in/india/andhra-pradesh/story/andhra-pradesh-chandrababu-naidu-talks-google-youtube-academy-amaravati-ceo-officials-neal-mohan-2578119-2024-08-07",
            "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/chandrababu-naidu-073237241-16x9_0.jpg?VersionId=bRgNMfHElP9V3m0Qs5k0_ikWSCvrhCQL",
            "publishedAt": "2024-08-07T00:35:10Z",
            "source": {
                "name": "India Today",
                "url": "https://www.indiatoday.in"
            }
        },
        {
            "title": "IIT-Madras gets largest-ever single donation of Rs 228 cr from alumnus",
            "description": "IIT Madras largest donation: This donation will be utilized for multiple purposes, including supporting international students to study at IIT-Madras through scholarship",
            "content": "The Indian topHeadLines of topHeadLines-Madras (IIT-Madras) has received the largest single donation in its history of Rs 228 crore from industrialist and its alumnus Krishna Chivukula. This donation is one of the largest-ever made to an educational insti... [4100 chars]",
            "url": "https://www.business-standard.com/india-news/iit-madras-gets-largest-ever-single-donation-of-rs-228-crore-124080601481_1.html",
            "image": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/06/thumb/featurecrop/400X400/1654534943-6009.jpg",
            "publishedAt": "2024-08-06T14:43:59Z",
            "source": {
                "name": "Business Standard",
                "url": "https://www.business-standard.com"
            }
        },
        {
            "title": "A new AI entertainment and smart home hub",
            "description": "Google TV Streamer offers an AI-powered, next-generation, personalized streaming and smart home experience for just $99.99.",
            "content": "Today, we’re announcing how we’re using Gemini to boost our smart home devices and experiences, while reinventing two of our most iconic and beloved devices: Nest Learning Thermostat (4th gen) and our latest streaming device: Google TV Streamer.\nGoog... [1255 chars]",
            "url": "https://blog.google/products/google-nest/google-tv-streamer/",
            "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Hero_1_UKrtiMZ.width-1300.jpg",
            "publishedAt": "2024-08-06T13:03:18Z",
            "source": {
                "name": "The Keyword | Google Product and topHeadLines News",
                "url": "https://blog.google"
            }
        },
        {
            "title": "IIT Madras receives single largest donation of Rs 228 crore from alumnus",
            "description": "The Madras-based topHeadLines to honour Chivukula has now named an academic block as Krishna Chivukula Block. It was during an event when the name of the block was modified.",
            "content": "The Indian topHeadLines of topHeadLines Madras (IITM) has received the largest single donation of Rs 228 Crore from its alumnus awardee Dr Krishna Chivukula. The alumnus joined the topHeadLines in 1970 to pursue a MTech in aerospace engineering and has now e... [253 chars]",
            "url": "https://indianexpress.com/article/education/iit-madras-receives-single-largest-donation-of-rs-228-crore-from-alumnus-9498357/",
            "image": "https://images.indianexpress.com/2024/08/iit-madras.jpg",
            "publishedAt": "2024-08-06T11:55:00Z",
            "source": {
                "name": "The Indian Express",
                "url": "https://indianexpress.com"
            }
        },
        {
            "title": "Google loses massive antitrust case over its search dominance",
            "description": "Judge Mehta's ruling finds Google guilty of illegal monopoly practices, potentially reshaping the tech industry's landscape.",
            "content": "A judge on Monday ruled that Google's ubiquitous search engine has been illegally exploiting its dominance to squash competition and stifle innovation in a seismic decision that could shake up the internet and hobble one of the world's best-known com... [5269 chars]",
            "url": "https://www.thehindu.com/sci-tech/topHeadLines/google-loses-massive-antitrust-case-over-its-search-dominance/article68490194.ece",
            "image": "https://th-i.thgim.com/public/incoming/wciopi/article68490203.ece/alternates/LANDSCAPE_1200/Google_Antitrust-Decision_98946.jpg",
            "publishedAt": "2024-08-05T20:56:00Z",
            "source": {
                "name": "The Hindu",
                "url": "https://www.thehindu.com"
            }
        },
        {
            "title": "iPhone 16, iPhone 16 Plus: Launch Date, Price, Colours, Design, Camera, Latest Leaks",
            "description": "Apple is set to launch the iPhone 16 and iPhone 16 Plus in September 2024, featuring new camera layouts, updated chips, and vibrant colour options., topHeadLines & Science News - Times Now",
            "content": "iPhone 16 dummy models suggest colour options for the upcoming Apple flagship. (Image: @SonnyDickson/ X)\nApple is gearing up to unveil its latest iPhone 16 series, which includes the standard iPhone 16, iPhone 16 Plus , iPhone 16 Pro , and iPhone 16 ... [2428 chars]",
            "url": "https://www.timesnownews.com/topHeadLines-science/iphone-16-iphone-16-plus-launch-date-price-colours-design-camera-latest-leaks-article-112294462",
            "image": "https://static.tnn.in/thumb/msid-112294432,thumbsize-623793,width-1280,height-720,resizemode-75/112294432.jpg?quality=100",
            "publishedAt": "2024-08-05T14:14:07Z",
            "source": {
                "name": "Times Now",
                "url": "https://www.timesnownews.com"
            }
        },
        {
            "title": "iPhone 13, OnePlus 12R, Galaxy S24 Get Huge Discounts During Amazon Great Freedom Festival: Check Deals Here",
            "description": "Amazon's Great Freedom Festival, running from August 6-15, 2024, offers huge discounts on smartphones including iPhone 13, OnePlus 12R, and Samsung Galaxy S24 5G., topHeadLines & Science News - Times Now",
            "content": "Amazon's Great Freedom Festival offers huge discounts on smartphones including the iPhone 13, OnePlus 12R, and Galaxy S24 5G.\nAmazon is gearing up for a major celebration of India’s Independence Day with its Great Freedom Festival sale, running from ... [2317 chars]",
            "url": "https://www.timesnownews.com/topHeadLines-science/iphone-13-oneplus-12r-galaxy-s24-get-huge-discounts-during-amazon-great-freedom-festival-check-deals-here-article-112289044",
            "image": "https://static.tnn.in/thumb/msid-112289243,thumbsize-1177960,width-1280,height-720,resizemode-75/112289243.jpg?quality=100",
            "publishedAt": "2024-08-05T11:01:56Z",
            "source": {
                "name": "Times Now",
                "url": "https://www.timesnownews.com"
            }
        }
    ])

    useEffect(() => {
        if (topHeadLines) {
            let maxheight = 0
            const arr = Array.from(document.querySelectorAll(".otherHeadLines .otherNews"))
            for (let index = 0; index < arr.length; index++) {
                maxheight = Math.max(maxheight, arr[index].clientHeight)
            }

            for (let index = 0; index < arr.length; index++) {
                arr[index].style.height = `${maxheight}px`
            }
        }
    }, [topHeadLines])

    return (
        <>
            <Navbar />
            <div id="part1">
                <div className="topBg bg-neutral-900 flex justify-center items-end" style={{ height: `${window.innerHeight * 0.35}px` }}>

                </div>

                <div className="topHeadLine">
                    <div className="1stHeadLineImg -mt-20 mx-auto mb-4 w-5/12">
                        <div className="heding text-4xl text-center mb-3 font-[800] text-white">Billionaires</div>
                        <img className=' w-full' src={topHeadLines[0].image} />
                        <div className=' text-end text-sm italic'>{topHeadLines[0].source.name}<Link className=' ms-4' to={topHeadLines[0].source.url}>{topHeadLines[0].source.url}</Link> </div>
                        <div className='text-end text-sm italic '>{Math.round((Date.now() - new Date(topHeadLines[0].publishedAt)) / (60 * 60 * 1000))} hours ago</div>
                    </div>
                    <div className="headline text-3xl text-center font-[500] mx-auto font-serif text-black w-7/12 ">{topHeadLines[0].title}</div>
                </div>

                <div className=" py-4 px-4 w-8/12 mx-auto content font-serif mb-6 text-center border-b-2 border-gray-500">
                    <div> {topHeadLines[0].description}</div>
                    <div className="readmoreBtn my-6 mb-3">
                        <Link to={topHeadLines[0].url}> <button className='btn bg-red-600 rounded-md hover:bg-red-700 text-lg text-white'>
                            Read More
                        </button>
                        </Link>
                    </div>
                </div>

                <div ref={otherNews} className="otherHeadLines p-4 flex flex-wrap justify-center items-center mx-auto w-full">
                    {topHeadLines.map((_, i) => {
                        if (i !== 0) {
                            return <div key={topHeadLines[i].publishedAt} className=' p-3 m-3 bg-gray-200 w-3/12 otherNews'>
                                <div className="img ">
                                    <img className=' w-full max-h-40 object-cover' src={topHeadLines[i].image} />
                                </div>
                                <div className="text-end italic text-sm  my-2"><Link className=' text-red-700 font-[600]' to={topHeadLines[0].source.url}>{topHeadLines[0].source.url}</Link></div>
                                <div className="headline text-base font-[600] font-serif pb-3">{topHeadLines[i].title}</div>
                                <div className="content text-sm ">{topHeadLines[i].description}</div>
                                <div className="readmoreBtn my-6 mb-3">
                                    <Link to={topHeadLines[i].url}> <button className='btn bg-red-600 rounded-md hover:bg-red-700 text-base text-white'>
                                        Read More
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        }
                    })}
                </div>

                <div className="readmoreBtn my-6 mb-3 flex justify-center">
                    <Link to={topHeadLines[0].url}> <button className='btn bg-slate-300 text-red-600 rounded-md hover:text-red-700 font-[700] hover:bg-slate-200 text-lg'>
                        Load More
                    </button>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default RealEstate