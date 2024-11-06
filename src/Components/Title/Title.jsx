import { useEffect } from "react";

const Title = (title) => {
    useEffect(()=>{
        document.title =  `GadgetHeaven | ${title}`
    },[])
};

export default Title;