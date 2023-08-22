'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'
import CartIcon from "./CartIcon"

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" }
]

type Props = {}

const MenuSmallScreen = (props: Props) => {
    const [openMenu, setOpenMenu] = useState(false)

    // TEMPORARY
    const user = false

    return (
        <>
            <Image
                src={openMenu ? '/close.png' : '/open.png'}
                alt="Icon open or close Menu"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
            />
            {
                openMenu && (
                    <div className="bg-purple-500 text-white absolute left-0 top-24 w-full
                                    h-[calc(100vh-6rem)] flex flex-col gap-8 items-center
                                    justify-center text-3xl z-10"
                    >
                        {links.map((item) =>
                            <Link href={item.url} key={item.id} onClick={() => setOpenMenu(false)}>
                                {item.title}
                            </Link>
                        )}

                        <Link href={!user ? '/login' : '/orders'}
                            onClick={() => setOpenMenu(false)}
                        >
                            {!user ? 'Login' : 'Orders'}
                        </Link>

                        <div onClick={() => setOpenMenu(!openMenu)}>
                            <CartIcon />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MenuSmallScreen