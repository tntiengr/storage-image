import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};
SelectField.defaultProps = {
  disabled: false,
  type: "text",
  label: "",
};
function SelectField(props) {
  const { field, form, type, label, disabled, options } = props;
  const { name, value } = field;

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input id={name} type={type} bsSize="lg" disabled={disabled} {...field}>
        {options.map((item, index) => {
          return <option key={index}>{item.label}</option>;
        })}
      </Input>
    </FormGroup>
  );
}

export default SelectField;
