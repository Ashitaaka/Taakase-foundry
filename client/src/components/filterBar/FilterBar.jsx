import React from "react";
import { useEffect, useState } from "react";

//import components
import { getAllCategories } from "../../utils/httpServices";

//import CSS
import "./FilterBar.css";

const FilterBar = ({ setSelectedFilters, availableFilters }) => {
  const [errors, setErrors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => {
        console.errors(error);
        setErrors(error);
      });
  }, []);

  const handleFilterSelection = (e) =>{
    setSelectedFilters(e.target.value)
  }

  return (
    <form className="filter_bar" onChange={handleFilterSelection}>
      <select name="font_type_filter" id="font_type_filter" defaultValue="">
        <option value="">Toutes les fonts</option>
        {categories &&
          categories
            .filter((category) => availableFilters.includes(category.id) )
            .map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
          ))}
      </select>
    </form>
  );
};

export default FilterBar;
