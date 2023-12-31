import { pizzas } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from 'next/router';

const CategoryPage = () => {
    // const router = useRouter();
    // const { category } = router.query; // Extract the category from the router query

    // let items = [];

    // switch (category) {
    //     case "pizzas":
    //         items = pizzas;
    //         break;
    //     case "pastas":
    //         items = pastas;
    //         break;
    //     case "burgers":
    //         items = burgers;
    //         break;
    //     default:
    //         // Handle unknown category
    //         break;
    // }

    return (
        <div className="flex items-center justify-center flex-wrap 
        text-purple-500 gap-0 lg:gap-4 p-0 lg:p-8">
            {pizzas.map((item) => (
                <Link
                    className="w-full h-[50vh] border-2 border-purple-500 rounded-lg
                    sm:w-1/3 lg:w-1/4 p-4 flex flex-col justify-between group
                    odd:bg-fuchsia-50"
                    href={`/product/${item.id}`}
                    key={item.id}>

                    {/* IMAGE CONTAINER */}
                    {item.img && (
                        <div className="relative h-[80%]">
                            <Image src={item.img} alt="" fill
                                className="object-contain" />
                        </div>
                    )}

                    {/* TEXT CONTAINER */}
                    <div className="flex flex-col lg:flex-row text-center items-center justify-between font-bold">
                        <h1 className="text-2xl uppercase p-2">{item.title}</h1>
                        <h2 className="group-hover:hidden text-xl">${item.price}</h2>
                        <button className="hidden group-hover:block uppercase bg-purple-500 
                        text-white px-4 py-2 rounded-md">
                            Order
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CategoryPage;
