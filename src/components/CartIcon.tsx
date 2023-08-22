import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const CartIcon = (props: Props) =>
    <Link
        href="/cart"
        className='flex items-center gap-4'
    >
        {/* <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src="/cart.png" alt="shoping cart" fill />
        </div> */}
        <div>
            <Image src="/cart.png" alt="shoping cart" width={32} height={32} className='md:w-5 md:h-5' />
        </div>
        <span>Cart (3)</span>
    </Link>

export default CartIcon