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
