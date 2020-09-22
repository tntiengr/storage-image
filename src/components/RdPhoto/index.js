import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

RdPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RdPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonChange: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RdPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImgUrl = getRandomImageUrl();
      onImageUrlChange(randomImgUrl);
    }
  };
  return (
    <div>
      <div>
        <Button
          className="photo-form__rd-button"
          type="button"
          name={name}
          onClick={handleRandomPhotoClick}
          onBlur={onRandomButtonBlur}
        >
          Random A photo
        </Button>
      </div>
      <div>
        {imageUrl && (
          <img
            width="200px"
            className="preview-photo"
            src={imageUrl}
            alt="Opp... pls random again"
          />
        )}
      </div>
    </div>
  );
}

export default RdPhoto;
