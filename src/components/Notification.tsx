type Props = {}

const Notification = (props: Props) => {
    return (
        <div className="h-12 bg-purple-500 text-white px-4 flex justify-center items-center
                        text-center text-sm md:text-base cursor-pointer"
        >
            Get your food now with free delivery on orders over $50!
        </div>
    )
}

export default Notification