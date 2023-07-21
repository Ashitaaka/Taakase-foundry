import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//import components
import { CgClose } from "react-icons/cg";
import { getAllCategories } from "../utils/httpServices";
import { postNewFont } from "../utils/httpServices";

//import CSS
import "./AddFont.css";
import ValidationModal from "../components/validation modal/ValidationModal";

const AddFont = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState();
  const [file, setFile] = useState();
  const [form, setForm] = useState({
    name: "",
    type: "",
    categories_id: "",
    studio: "",
  });
  const [showModal, setShowModal] = useState(false);

  //getting all existing font categories
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

  //when writting in an input
  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [key]: value,
    });
  };

  //When choosing a file
  const handleFileChange = (e) => {
    if (!e.target.files[0]) return;
    setFile(e.target.files[0]);
  };

  //Sending post to create new font
  const sendingForm = (e) => {
    e.preventDefault();

    const formWithFile = new FormData();

    formWithFile.append("file", file);
    formWithFile.append("name", form.name);
    formWithFile.append("type", form.type);
    formWithFile.append("categories_id", form.categories_id);
    formWithFile.append("studio", form.studio);

    postNewFont(formWithFile)
      .then((res) => {
        console.log("datas correctly uploaded", res);

        //Showing validation modal
        setShowModal(true);

        //Hidding validation modal
        const timer = setTimeout(() => {
          setShowModal(false);
        }, 4000);
      })
      .catch((error) => {
        console.error(error);
        setErrors(error);
      });

    window.location.reload();
  };

  return (
    <div className="add_font_page">
      <Link to={"/"}>
        <CgClose size={30} className="closing_cross" />
      </Link>

      <ValidationModal showModal={showModal} />

      <div className="add_font_page_content">
        <div className="title">
          <h1>Ajouter une font</h1>
        </div>

        <form
          encType="multipart/form-data"
          className="add_font_form"
          onSubmit={sendingForm}
        >
          <div className="name_field">
            <label htmlFor="name">Nom de la font</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="studio_field">
            <label htmlFor="studio">Nom de la fonderie</label>
            <input
              type="text"
              name="studio"
              id="studio"
              placeholder="Nom du studio"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="type_field">
            <label htmlFor="type">Type de fichier</label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Exemple de type: 'opentype'"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="category_field">
            <label htmlFor="categories_id">Classification</label>
            <select
              name="categories_id"
              id="categories_id"
              defaultValue=""
              required
              onChange={handleInputChange}
            >
              <option value="" hidden disabled>
                Type de font
              </option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
            </select>
          </div>
          <div className="file_field">
            <label htmlFor="file_to_upload">uploadez votre fichier</label>
            <input
              type="file"
              name="file_to_upload"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Ajouter la font</button>
        </form>
      </div>
    </div>
  );
};

export default AddFont;
