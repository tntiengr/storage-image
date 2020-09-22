import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Button } from "reactstrap";
import RdPhoto from "../../components/RdPhoto/index";

RdPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
};
RdPhotoField.defaultProps = {
  label: "",
};

function RdPhotoField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;

  const handleImageUrlChange = (newImageurl) => {
    form.setFieldValue(name, newImageurl);
  };
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <RdPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </FormGroup>
  );
}

export default RdPhotoField;
