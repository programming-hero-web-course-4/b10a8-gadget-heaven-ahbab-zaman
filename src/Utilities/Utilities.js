import toast, { Toaster } from 'react-hot-toast';
// get cart
const getCarts = () => {
    const allCarts = localStorage.getItem('cart')
   if(allCarts){
    const addCarts = JSON.parse(allCarts)
    return addCarts
   } else{
    return []
   }
}
// add cart 
const addToCart = (gadgets) => {
    const cart = getCarts();
    const isExist = cart.find(item => item.product_id == gadgets.product_id);
    if(isExist){
        return toast.error('Already existed')
    }
     else{
        cart.push(gadgets)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Added to cart list')
    }
}


// get favorite cart
const getFavorite = () =>{
    const allFavorites = localStorage.getItem('favorite');
    if(allFavorites){
        const addFavorites = JSON.parse(allFavorites);
        return addFavorites;
    }
    else{
        return []
    }
}

// add favorite cart

const addToFavorite = (gadgets) => {
    const favorite = getFavorite();
    const isExist = favorite.find(item => item.product_id == gadgets.product_id);
    if(isExist){
        return toast.error('Already existed')
    }
    else{
        favorite.push(gadgets)
        localStorage.setItem('favorite', JSON.stringify(favorite));
        toast.success('Added to wish list')
    }
}




export {addToCart, addToFavorite,getCarts}
