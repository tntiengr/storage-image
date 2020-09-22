import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  disabled: false,
  placeholder: "",
  type: "text",
  label: "",
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name, value, onChange, onBlur } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        // hoac lam nhu vay:  {...field}
        bsSize="lg"
        disabled={disabled}
      />
    </FormGroup>
  );
}

export default InputField;
