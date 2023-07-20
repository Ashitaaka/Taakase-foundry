import React from "react";
import { useEffect, useState } from "react";

//import components
import { getAllFonts } from "../utils/httpServices";
import FilterBar from "../components/filterBar/FilterBar";
import FontCard from "../components/fontCard/FontCard";

//import CSS
import "./FontList.css";

const FontList = () => {
  const [errors, setErrors] = useState([]);
  const [fonts, setFonts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState("");
  const [availableFilters, setAvailableFilters] = useState([]);

  useEffect(() => {
    getAllFonts()
      .then((res) => {
        setFonts(res);
        // Extract the 'categories_id' from each font object and create an array of available filters
        const filters = res.map((font) => font.categories_id);
        // Remove duplicate 'categories_id' values by using Set and converting back to an array
        const uniqueFilters = [...new Set(filters)];
        setAvailableFilters(uniqueFilters);
      })
      .catch((error) => {
        setErrors(error);
        console.error(error);
      });
  }, []);

  return (
    <div className="font_list_page">
      <FilterBar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} availableFilters={availableFilters} />
      <div className="font_list_container">
        {fonts && fonts
          .filter((font) => (!selectedFilters || +selectedFilters === font.categories_id))
          .map((font) => <FontCard key={font.id} {...font} />)}
      </div>
    </div>
  );
};

export default FontList;
