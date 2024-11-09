import { useEffect, useState } from "react";
import { getFavorite } from "../../Utilities/Utilities";
import Wish from "../Wish/Wish";

const Wishlist = () => {
    const [favorite, setFavorite] = useState([]);
    useEffect(()=>{
        const wishItems = getFavorite();
        setFavorite(wishItems)
    },[])
    return (
        <div>
            <div className="my-6 w-11/12 mx-auto">
                <h3 className="text-2xl font-semibold">Wishlist</h3>
            </div>

            <div className="my-6 w-11/12 mx-auto">
                {
                    favorite.map(item => <Wish item={item}></Wish>)
                }
            </div>
        </div>
    );
};

export default Wishlist;