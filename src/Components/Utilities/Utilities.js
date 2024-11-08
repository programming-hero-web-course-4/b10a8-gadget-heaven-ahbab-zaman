const getStoredCart = () => {
    const cartListStr = localStorage.getItem('cart-list');
    if(cartListStr){
        const cartList = JSON.parse(cartListStr);
        return cartList;
    } else{
        return []
    }
}

const addToStoredCart = (id) =>{
    const cartList = getStoredCart();
    if(cartList.includes(id)){
        console.log("Already existed")
    } else{
        cartList.push(id)
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem('cart-list', cartListStr)
    }
}

export {addToStoredCart}