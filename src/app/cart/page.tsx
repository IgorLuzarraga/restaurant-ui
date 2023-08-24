import Image from "next/image";

const CartPage = () => {
    return (
        <div className="my-4 xl:my-0 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-purple-500 lg:flex-row">

            {/* PRODUCTS CONTAINER */}
            <div className="h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 
            2xl:w-1/2 lg:px-20 xl:px-40 bg-[url('/table.jpg')]"
            >
                {showSingleItems()}
            </div>

            {/* PAYMENT CONTAINER */}
            <div className="h-1/2 p-4 bg-purple-100 flex flex-col gap-4 justify-center 
            lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6"
            >

                <div className="flex justify-between">
                    <span className="">Subtotal (3 items)</span>
                    <span className="">$56.70</span>
                </div>

                <div className="flex justify-between">
                    <span className="">Service Cost</span>
                    <span className="">$0.00</span>
                </div>

                <div className="flex justify-between">
                    <span className="">Delivery Cost</span>
                    <span className="text-green-500">FREE!</span>
                </div>

                <hr className="my-2 ring-2 ring-purple-800" />

                <div className="flex justify-between">
                    <span className="">TOTAL(INCL. VAT)</span>
                    <span className="font-bold">$56.70</span>
                </div>

                <button className="bg-purple-500 text-white p-3 rounded-md w-1/2 self-end">
                    Check out
                </button>
            </div>
        </div>
    );
};

const showSingleItem = (num: number) =>
    <div className="flex items-center justify-between mb-4 text-white">
        <Image src="/temporary/p3.png" alt="" width={100} height={100} />
        <div className="">
            <h1 className="uppercase text-lg md:text-xl font-bold">bella napoli</h1>
            <span>Medium</span>
        </div>
        <h2 className="font-bold">$18.90</h2>
        <span className="cursor-pointer">X</span>
    </div>

const showSingleItems = () => {
    const numbers: Array<number> = [1, 2, 3];

    return numbers.map(showSingleItem)
}

export default CartPage;
