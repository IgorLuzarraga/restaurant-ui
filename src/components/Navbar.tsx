import Link from 'next/link'
import MenuSmallScreen from './MenuSmallScreen'
import CartIcon from './CartIcon'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
    const user = false

    return (
        <div className='h-12 text-purple-800 p-4 flex items-center justify-between bg-purple-50
                        border-b-2 border-b-purple-500 uppercase md:h-24 lg:px-20 xl:px-40'
        >
            {/* LOGO */}
            <div className='text-xl md:font-bold flex-1 md:text-center'>
                <Link
                    href="/"
                >
                    Ciao Napoli
                </Link>
            </div>

            {/* LEFT LINKS */}
            <div className='hidden md:flex gap-4 flex-1'>
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>

            {/* MOBILE MENU */}
            <div className='md:hidden'>
                <MenuSmallScreen />
            </div>

            {/* RIGTH LINKS */}
            <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
                <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer px-1"
                >
                    <Image src="/phone.png" alt="Phone icon" width={30} height={30} className='bg-green-300 p-2 rounded-2xl' />
                    <span className='text-white lg:text-purple-800'>123 456 78</span>
                </div>

                {!user ? (
                    <Link href="/login">Login</Link>
                ) : (
                    <Link href="/orders">Orders</Link>
                )}
                <CartIcon />
            </div>
        </div >
    )
}

export default Navbar