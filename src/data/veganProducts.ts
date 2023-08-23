type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredVeganProducts: Products = [
    {
        id: 1,
        title: "Vegan Delight",
        desc: "Experience the deliciousness of a vegan creation, featuring plant-based ingredients and flavors that will tantalize your taste buds.",
        img: "/temporary/vegan1.png",
        price: 18.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: "Mushroom Medley",
        desc: "Indulge in a symphony of mushroom flavors with this vegan delight, featuring a medley of sautéed mushrooms, vegan cheese, and fresh herbs.",
        img: "/temporary/vegan2.png",
        price: 22.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: "Savory Veggie Mix",
        desc: "Experience a burst of flavor with this vegan creation, showcasing a colorful blend of roasted veggies, hummus, and a drizzle of tahini sauce.",
        img: "/temporary/vegan3.png",
        price: 20.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: "Vegan Margherita",
        desc: "A plant-based twist on a classic favorite, featuring vegan cheese, fresh tomatoes, aromatic basil, and a drizzle of balsamic glaze.",
        img: "/temporary/vegan4.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: "Spicy Veggie Wrap",
        desc: "Embrace the heat with this spicy vegan wrap, packed with grilled veggies, black beans, avocado, and a kick of hot sauce.",
        img: "/temporary/vegan5.png",
        price: 16.9,
        options: [
            {
                title: "One Size",
                additionalPrice: 0,
            },
        ],
    },
    {
        id: 6,
        title: "Quinoa Power Bowl",
        desc: "Fuel up with a nutrient-packed quinoa bowl featuring colorful veggies, chickpeas, avocado, and a zesty lemon-tahini dressing.",
        img: "/temporary/vegan6.png",
        price: 18.5,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
        ],
    },
    {
        id: 7,
        title: "Vegan Caesar Salad",
        desc: "Enjoy a classic Caesar salad made entirely plant-based, featuring crisp romaine lettuce, vegan Caesar dressing, croutons, and a sprinkle of nutritional yeast.",
        img: "/temporary/vegan7.png",
        price: 14.9,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
        ],
    },
    {
        id: 8,
        title: "Chickpea Curry",
        desc: "Savor the aromatic flavors of this hearty chickpea curry, served with fluffy basmati rice and naan bread.",
        img: "/temporary/vegan8.png",
        price: 19.9,
        options: [
            {
                title: "Regular",
                additionalPrice: 0,
            },
        ],
    },
    {
        id: 9,
        title: "Vegan Chocolate Cake",
        desc: "Indulge your sweet tooth with this decadent vegan chocolate cake, layered with rich chocolate ganache and topped with fresh berries.",
        img: "/temporary/vegan9.png",
        price: 8.5,
        options: [
            {
                title: "Slice",
                additionalPrice: 0,
            },
        ],
    },
];
