type Props = {}

const Notification = (props: Props) => {
    return (
        <div className="h-12 bg-purple-500 text-white px-4 flex justify-center items-center
                        text-center text-sm md:text-base cursor-pointer"
        >
            Free delivery for all orders over $50. Order your food now!
        </div>
    )
}

export default Notification