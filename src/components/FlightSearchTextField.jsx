import React from "react";
import { Place } from "@mui/icons-material";
import {
	Autocomplete,
	Box,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { func, instanceOf, string } from "prop-types";

const FlightSearchTextField = ({
	onSelect,
	onChangeInput,
	options,
	placeholder,
}) => {
	const isSMScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
	return (
		<Autocomplete
			sx={{ width: "100%" }}
			freeSolo
			options={options}
			onChange={(e, value) => {
				onSelect(value);
			}}
			onInputChange={(e, val) => {
				onChangeInput(val);
			}}
			getOptionLabel={(option) => option.label || ""}
			renderInput={(params) => (
				<TextField
					{...params}
					placeholder={placeholder}
					size="small"
					sx={{
						//...(isSMScreen && { minWidth: "50%" }),
						flex: 1,
						minWidth: isSMScreen ? "100%" : "400px", // Responsive minWidth
						maxWidth: "100%", // Prevents overflow
						display: "flex",
						width: "250px",
						backgroundColor: "#424242",
						borderRadius: 1,
						input: {
							color: "white",
							padding: "11px 10px !important",
							fontSize: "18px",
						},
					}}
				/>
			)}
			renderOption={(props, option) => (
				<Box
					component="li"
					{...props}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						padding: "8px 12px",
					}}
				>
					<Place sx={{ color: "gray" }} />
					<Box>
						<Typography variant="body2" sx={{ fontWeight: "bold" }}>
							{option.skyId}
						</Typography>
						<Typography variant="body1">{option.label}</Typography>
					</Box>
				</Box>
			)}
		/>
	);
};

FlightSearchTextField.propTypes = {
	onSelect: func.isRequired,
	onChangeInput: func.isRequired,
	options: instanceOf(Array).isRequired,
	placeholder: string.isRequired,
};

export default FlightSearchTextField;
