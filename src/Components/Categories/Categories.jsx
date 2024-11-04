import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div>
            {
                categories.map(category => <NavLink to={`/gadgetsCards/${category.category}}`} key={category.id} className="mb-4 px-4 py-2 rounded-full text-center font-semibold bg-slate-200 block">{category.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;