"use client"

import { useEffect, useState } from "react"

type Props = {
    price: number,
    id: number,
    options?: {
        title: string,
        additionalPrice: number
    }[]
}

const Price = ({ price, options }: Props) => {
    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [quantity, selected, options, price])

    return (
        <div className="">
            <h2 className="">
                ${total.toFixed(2)}
            </h2>

            {/* options container */}
            <div className="">
                {options?.map((option, index) => (
                    <button
                        key={`${option.title}-${index}`}
                        className=""
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>

            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="">

                {/* QUANTITY */}
                <div>
                    <span>Quantity</span>

                    <div className="">
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

                {/*  CART BUTTON */}
                <button className="uppercase">
                    Add to Cart
                </button>

            </div>
        </div>
    )
}

export default Price