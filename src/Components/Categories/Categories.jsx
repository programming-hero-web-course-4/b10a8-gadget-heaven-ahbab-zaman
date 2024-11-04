import { Link } from "react-router-dom";

const Categories = ({categories}) => {
    return (
        <div className="bg-white p-3 rounded-xl">
            {
                categories.map(category => <Link to={`/gadgetsCards/${category.category}`} key={category.id} className="mb-4 px-4 py-2 rounded-full text-center font-semibold bg-slate-200 block">{category.category}</Link>)
            }
        </div>
    );
};

export default Categories;