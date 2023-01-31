export const addToCart = (data) => {
    console.log("action Pressed",data)
    return {
        type: 'ADD_TO_CART',
        data:data
    }
}