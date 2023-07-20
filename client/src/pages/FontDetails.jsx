import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";

//import components
import FontFace from "../utils/FontFace";
import { getFontById } from "../utils/httpServices";
import { HiOutlineArrowLeft } from "react-icons/hi";

//import CSS
import "./FontDetails.css";

const FontDetails = () => {
  const { id } = useParams();

  const textareaRef = useRef(null);

  const [errors, setErrors] = useState([]);
  const [font, setFont] = useState({});
  const [fontSize, setFontSize] = useState(80);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(95);

  useEffect(() => {
    getFontById(id)
      .then(([res]) => {
        setFont(res);
      })
      .catch((error) => {
        setErrors(error);
        console.error(error);
      });
  }, []);

  const handleSizeChange = (e) => {
    setFontSize(e.target.value);
    textareaResizing();
  };
  const handleLetterSpacingChange = (e) => {
    setLetterSpacing(e.target.value);
    textareaResizing();
  };
  const handleLinHeightChange = (e) => {
    setLineHeight(e.target.value);
    textareaResizing();
  };

  const textareaResizing = () =>{
    // Calculate and set the height of the textarea based on its content
    textareaRef.current.style.height = 'auto'; // Reset height to calculate actual content height
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }

  return (
    <div className="font_details_page">
      <Link to="/" className="back_home_button">
        <HiOutlineArrowLeft /> retour
      </Link>
      <FontFace
        fontFamily={font.name}
        fontFormat={font.type}
        fontUrl={font.url}
      />

      <div className="setters">
        <div className="size_selecter">
          <label htmlFor="font_size_range">Corps de la font</label>
          <input
            type="range"
            id="font_size_range"
            name="font_size_range"
            min="10"
            max="200"
            value={fontSize}
            onChange={handleSizeChange}
          />
        </div>
        <div className="letter_spacing_selecter">
          <label htmlFor="letter_spacing_range">Interlettrage</label>
          <input
            type="range"
            id="letter_spacing_range"
            name="letter_spacing_range"
            min="-25"
            max="100"
            value={letterSpacing}
            onChange={handleLetterSpacingChange}
          />
        </div>
        <div className="line_height_selecter">
          <label htmlFor="line_height_range">Interlignage</label>
          <input
            type="range"
            id="line_height_range"
            name="line_height_range"
            min="12"
            max="200"
            value={lineHeight}
            onChange={handleLinHeightChange}
          />
        </div>
      </div>

      <textarea
        ref={textareaRef}
        rows={1}
        name="editable_container"
        id="editable_container"
        style={{
          fontFamily: `${font.name}`,
          fontSize: `${fontSize}px`,
          letterSpacing: `${letterSpacing}px`,
          lineHeight: `${lineHeight}px`,
        }}
        defaultValue={`Essaies un peu pour voir!`}
        onChange={textareaResizing}
      ></textarea>
    </div>
  );
};

export default FontDetails;
