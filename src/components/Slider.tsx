"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const data = [
    {
        id: 1,
        title: "Fresh, irresistibly crispy, and always hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "We bring your order wherever you are",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "Delightful pizza, best for family sharing moments",
        image: "/slide1.png"
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)), 4000
        )

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] 
                        md:h-[calc(100vh-9rem)] lg:flex-row bg-purple-50"
        >

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-purple-500 font-bold">
                <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-purple-500 text-white py-4 px-8">Order Now</button>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative">
                <Image
                    src={data[currentSlide].image}
                    alt="Slider image"
                    fill
                    className="object-cover"
                />
            </div>

        </div>
    );
};

//     return (
//         <div className="">
//             <div> Froga</div>
//             {/* IMAGE CONTAINER */}
//             <div className="w-full flex-1 relative">
//                 <Image
//                     src={srcImg}
//                     alt="Slider image"
//                     fill
//                     className="object-cover"
//                 />
//             </div>
//         </div>
//     )
// }

export default Slider