"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const data = [
    {
        id: 1,
        title: "Savorable dishes, ideal for family gatherings",
        image: "/slide4.jpg"
    },
    {
        id: 2,
        title: "We bring your order wherever you are",
        image: "/slide1.jpg"
    },
    {
        id: 3,
        title: "Fresh, irresistibly crispy, and always hot",
        image: "/slide2.jpg"
    },
    {
        id: 4,
        title: "Delightful food, best for family sharing moments",
        image: "/slide3.jpg"
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
                        md:h-[calc(100vh-10rem)] lg:flex-row bg-purple-100"
        >

            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative">
                <Image
                    src={data[currentSlide].image}
                    alt="Slider image"
                    fill
                    className="object-cover"
                />
            </div>

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-purple-500 font-bold">
                <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">
                    {data[currentSlide].title}
                </h1>
                <button className="bg-purple-500 text-white py-4 px-8">Order Now</button>
            </div>
        </div>
    );
};

export default Slider