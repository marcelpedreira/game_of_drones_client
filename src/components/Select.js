import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from '@material-ui/core/InputBase';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
		width: "100%"
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

class CustomSelect extends Component {
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
			<FormControl style={{ width: "100%" }}>
				<InputLabel>{label}</InputLabel>
				<Select
					value={input.value}
					onChange={event => input.onChange(event.target.value)}
					input={<BootstrapInput name={name} />}
				>
					{this.props.children}
				</Select>
			</FormControl>
    );
  }
}

export default CustomSelect;