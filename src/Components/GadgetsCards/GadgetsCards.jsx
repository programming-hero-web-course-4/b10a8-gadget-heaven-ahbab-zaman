import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../GadgetCard/GadgetCard";
import { useEffect, useState } from "react";

const GadgetsCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [gadgets, setGadgets] = useState([]);
    useEffect(()=>{
        const filteredGadgets = [...data].filter(item => item.category === category)

        setGadgets(filteredGadgets)
    },[])
    console.log(gadgets)
    return (
        <div className="text-black grid grid-cols-3">
           {
            gadgets.map(gadget => (<GadgetCard gadget={gadget} key={gadget.id}></GadgetCard>))
           }
           
        </div>
    );
};

export default GadgetsCards;