import React from "react";
import { Label, FormGroup, Button } from "reactstrap";
import PHOTO_CATEGORY_OPTIONS from "../../../constants/global";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../customField/InputField";
import SelectField from "../../../customField/SelectField";
import RdPhotoField from "../../../customField/RdPhotoField";

function PhotoForm(props) {
  const initialValues = {
    title: "",
    photo: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form className="photo-form">
            <FastField
              name="inputTitle"
              component={InputField}
              label="Title"
              placeholder="Eg: Troppical Beach..."
            />
            <FastField
              name="inputCagetory"
              component={SelectField}
              label="Cagetory"
              type="select"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField name="photo" label="Photo" component={RdPhotoField} />

            <FormGroup>
              <Button type="submit" className="photo-form__submit-button">
                Add this Photo
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
