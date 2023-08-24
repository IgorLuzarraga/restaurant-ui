export const btnTextColor = (categoryId: number) => {
    switch (categoryId) {
        case 1:
            return 'text-green-500'
        case 2:
            return 'text-white'
        case 3:
            return 'text-red-500'
        default:
            return 'text-black'
    }
}


export const btnBgColor = (categoryId: number) => {
    return 'bg-purple-500'
    switch (categoryId) {
        case 1:
            return 'bg-white'
        case 2:
            return 'bg-black'
        case 3:
            return 'bg-white'
        default:
            return 'bg-white'
    }
}