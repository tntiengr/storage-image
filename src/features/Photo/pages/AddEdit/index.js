import React from "react";
import Banner from "../../../../components/Banner/index";
import Images from "../../../../constants/images";
import "./AddEdit.scss";
import PhotoForm from "../../components/PhotoForm";

function AddEdit(props) {
  return (
    <div className="edit-page">
      <Banner bgUrl={Images.beach2} title="Lets Add new Photo 🍭🍭🍭" />
      <div className="edit-page__form">
        <PhotoForm />
      </div>
    </div>
  );
}

export default AddEdit;
