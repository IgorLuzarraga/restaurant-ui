import { menu } from '@/data/products'
import Link from 'next/link'
import { btnTextColor } from '@/utility/utils'

type Props = {}

const MenuPage = (props: Props) => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)]
        md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
            {menu.map(category => (
                <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    className="w-full h-1/3 bg-cover p-4 md:p-8 md:h-1/2"
                    style={{ backgroundImage: `url(${category.img})` }}
                >
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className='uppercase font-bold text-xl md:text-3xl'>{category.title}</h1>
                        <p className='text-sm my-2'>{category.desc}</p>
                    </div>

                    <button className={`hidden 2xl:block bg-${category.color}
                    py-2 px-4 rounded-md ${btnTextColor(category.id)}`}>
                        Check Out
                    </button>
                </Link>
            ))}
        </div>
    )
}


export default MenuPage