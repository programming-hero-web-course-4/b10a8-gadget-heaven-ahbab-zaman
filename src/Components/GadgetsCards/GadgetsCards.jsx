import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../GadgetCard/GadgetCard";
import { useEffect, useState } from "react";

const GadgetsCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [gadgets, setGadgets] = useState([]);
    useEffect(()=>{
       if(category){
        const filteredGadgets = [...data].filter(gadget => gadget.category === category)
        setGadgets(filteredGadgets)
       } else{
        setGadgets(data)
       }
    },[category, data])
    return (
        <div className="text-black grid grid-cols-3 space-x-4 space-y-4">
           {
            gadgets.map(gadget => (<GadgetCard gadget={gadget} key={gadget.id}></GadgetCard>))
           }
           <div>
           </div>
           
        </div>
    );
};

export default GadgetsCards;