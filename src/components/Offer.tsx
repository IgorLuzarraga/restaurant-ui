import Image from "next/image"

const Offer = () => {
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row 
        md:justify-between md:bg-[url('/offerBg_fliped.jpg')] md:h-[70vh]">

            {/* IMAGE CONTAINER */}
            <div className="flex-1 w-full relative md:h-full">
                <Image src="/temporary/p2.png" alt="Offer product" fill
                    className="object-contain" />
            </div>

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col justify-center
            items-center text-center gap-8 p-6">
                <h1 className="text-white text-5xl font-bold xl:text-6xl">
                    Delicious Vegan Burger with Extra Jalapeños
                </h1>
                <p className="text-white xl:text-xl">
                    A delectable vegan burger featuring a savory patty, crisp lettuce, dairy-free cheese, and an extra punch of jalapeños for spicy perfection
                </p>

                <button className="bg-purple-800 rounded-md py-3 px-6 text-white">Order Now</button>
            </div>
        </div>
    )
}

export default Offer