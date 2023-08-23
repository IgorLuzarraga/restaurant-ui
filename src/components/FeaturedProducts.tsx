import { featuredProducts } from "@/data/products"
import Image from "next/image"

const FeaturedProducts = () => {
    return (
        <div className="w-screen overflow-x-scroll text-purple-500">

            {/* WRAPPER */}
            <div className="w-max flex">
                {/* SINGLE ITEM */}
                {featuredProducts.map(product => (
                    <div
                        key={product.id}
                        className="w-screen h-[60vh] flex flex-col items-center
                    justify-around p-4 hover:bg-fuchsia-50 transition-all
                    duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
                    >
                        {/* IMAGE CONTAINER */}
                        {product.img && (
                            <div className="relative flex-1 w-full hover:rotate-[60deg]
                            transition-all duration-500"
                            >
                                <Image src={product.img} alt="Product image" fill
                                    className="object-contain"
                                />
                            </div>
                        )}


                        {/* TEXT CONTAINER */}
                        <div className="flex flex-1 flex-col items-center
                        justify-center text-center gap-4">
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                            <p className="p-4 2xl:p-8">{product.desc}</p>
                            <span className="text-xl font-extrabold">${product.price}</span>
                            <button className="bg-purple-500 text-white p-2 rounded-md">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts