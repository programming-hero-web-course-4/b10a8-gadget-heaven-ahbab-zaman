import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="bg-white p-3 rounded-xl">
            {
                categories.map(category => <NavLink to={`/gadgetsCards/${category.category}`} key={category.id} className={({isActive})=>`mb-4 px-4 py-2 rounded-full text-center font-semibold block ${isActive ? "bg-blue-400": "bg-slate-100"}`}>{category.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;