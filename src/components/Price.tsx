"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type Props = {
    price: number,
    id: number,
    options?: {
        title: string,
        additionalPrice: number
    }[]
}

const Price = ({ price, id, options }: Props) => {
    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [quantity, selected, options, price])

    return (
        <div className="flex flex-col gap-4">

            <h2 className="text-2xl font-bold">
                ${total.toFixed(2)}
            </h2>

            {/* options container */}
            <div className="flex gap-4">
                {options?.map((option, index) => (
                    <button
                        key={`${option.title}-${index}`}
                        className="min-w-[6rem] p-2 ring-1 ring-purple-500 rounded-md"
                        style={{
                            background: selected === index ? "rgb(168,85,247)" : "white",
                            color: selected === index ? "white" : "rgb(168,85,247)"
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>

            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="flex justify-between items-center">

                {/* QUANTITY */}
                <div className="flex justify-between ring-1 ring-purple-500
                p-3 w-full">
                    <span>Quantity</span>

                    <div className="flex gap-4 items-center">
                        <button
                            onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
                        >
                            {"<"}
                        </button>

                        <span>{quantity}</span>

                        <button
                            onClick={() => setQuantity(prev => prev < 9 ? prev + 1 : 9)}
                        >
                            {">"}
                        </button>

                    </div>
                </div>

                {/*  ADD TO CART*/}
                <Link href='/cart'
                    className="uppercase w-56 bg-purple-500 p-3 text-white
                    ring-1 ring-purple-500"
                >
                    Add to Cart
                </Link>

            </div>
        </div>
    )
}

export default Price