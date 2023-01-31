import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const FormTextField = ({
  name,
  type = "text",
  values,
  handleChange,
  touched,
  handleBlur,
  errors,
  inputIcon,
  placeholder,
  size,
}) => {
  return (
    <TextField
      name={name}
      type={type || "text"}
      value={values[name]}
      onChange={handleChange}
      placeholder={placeholder}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      onBlur={handleBlur}
      variant="outlined"
      color="secondary"
      size={size || "medium"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{inputIcon}</InputAdornment>
        ),
      }}
    />
  );
};

export default FormTextField;
