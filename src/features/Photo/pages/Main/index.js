import React from "react";
import Images from "../../../../constants/images";
import Banner from "../../../../components/Banner/index";
import "./MainPage.scss";
import { Link } from "react-router-dom";
function Main(props) {
  return (
    <div className="mainpage">
      <Banner title="Yahaloooooo 🍀╰(*°▽°*)╯🎉 " bgUrl={Images.beach} />
      <div className="add__button">
        <Link to="/photos/add" className="mainpage__addLink">
          Add new Photo
        </Link>
      </div>
    </div>
  );
}

export default Main;
