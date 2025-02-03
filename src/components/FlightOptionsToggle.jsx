import React, { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

const FlightOptionsToggle = () => {
	const [selected, setSelected] = useState("best");

	const handleChange = (event, newSelection) => {
		if (newSelection !== null) {
			setSelected(newSelection);
		}
	};
	return (
		<Box sx={{ p: 2, borderRadius: "8px" }}>
			<ToggleButtonGroup
				value={selected}
				exclusive
				onChange={handleChange}
				sx={{
					display: "flex",
					border: "1px solid #4a90e2",
					borderRadius: "8px",
					overflow: "hidden",
				}}
			>
				<ToggleButton
					value="best"
					sx={{
						flex: 1,
						color: "#fff",
						"&.Mui-selected": {
							color: "white",
							backgroundColor: "#34495e",
							borderBottom: "2px solid #4a90e2",
							"&:hover": {
								backgroundColor: "#34495e",
							},
						},
					}}
				>
					Best
				</ToggleButton>
				<ToggleButton
					value="cheapest"
					sx={{
						flex: 1,
						color: "#fff",
						"&.Mui-selected": {
							color: "white",
							backgroundColor: "#34495e",
							borderBottom: "2px solid #4a90e2",
							"&:hover": {
								backgroundColor: "#34495e",
							},
						},
					}}
				>
					Cheapest
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
};

export default FlightOptionsToggle;
