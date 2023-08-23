import Link from "next/link"

const Footer = () => {
    return (
        <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex justify-between items-center
                     bg-purple-50 text-purple-500 border-t-2 border-purple-500 uppercase">
            <Link href="/" className="font-bold text-xl text-purple-800">Ciao Napoli</Link>
            <p>© ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default Footer