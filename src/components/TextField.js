import React, { Component } from "react";
import PropTypes from "prop-types";
// import { FormattedMessage } from "react-intl";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    // width: 200
  }
});

class TextFieldInput extends Component {
  render() {
    const {
      input,
      label,
      name,
      classes,
      meta: { touched, error },
      helperText,
      fullWidth,
      labelProps,
      margin,
      InputProps,
      ...restProps
    } = this.props;
    // const hasError = !!(touched && error);
    return (
      <TextField
        id={name}
        name={name}
        label={label}
        className={classes.textField}
        value={input.value}
        onChange={event => input.onChange(event.target.value)}
        variant="outlined"
        fullWidth={fullWidth}
        margin={margin}
        InputLabelProps={{ shrink: true }}
        {...restProps}
      />
      // <FormControl error={hasError} fullWidth={fullWidth} margin={margin} variant="outlined">
      //   <InputLabel htmlFor={name} {...labelProps}>
      //     {<FormattedMessage id={label} />}
      //   </InputLabel>
      //   <Input
      //     id={name}
      //     value={input.value}
      //     onChange={event => input.onChange(event.target.value)}
      //     {...restProps}
      //   />
      //   {helperText && <FormHelperText>{helperText}</FormHelperText>}
      //   {touched && error && <FormHelperText>{error}</FormHelperText>}
      // </FormControl>
    );
  }
}

TextFieldInput.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFieldInput);
