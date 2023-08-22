import Link from 'next/link'
import Menu from './Menu'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='h-12 text-purple-500 p-4 flex items-center justify-between 
                        border-b-2 border-b-purple-500 uppercase md:h-24 lg:px-20 xl:px-40'
        >
            {/* LOGO */}
            <div className='text-xl'>
                <Link
                    href="/"
                >
                    MASSIMO
                </Link>
            </div>

            {/* MOBILE MENU */}
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar