import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, useMediaQuery } from "@mui/material";
import dayjs from "dayjs";
import { bool, func } from "prop-types";

const DatePickers = ({ onChange, isOneWay }) => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const handleStartDateChange = (start) => {
		console.log("here", start.M);
		setStartDate(start);
		onChange("start", start);
		// Ensure the end date is after the new start date
		if (endDate && dayjs(start).isAfter(dayjs(endDate))) {
			setEndDate(null);
		}
	};
	const isSMScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
	const isXSScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box
				sx={{
					display: "flex",
					gap: 2,
					width: "100%",
					...(isXSScreen && { width: "100%", flexWrap: "wrap" }),
				}}
			>
				<DatePicker
					label="Start Date"
					value={startDate}
					onChange={handleStartDateChange}
					slotProps={{
						textField: {
							sx: {
								input: {
									color: "#fff !important",
								},
								label: {
									color: "#A0A0A0",
									fontSize: "18px",
								},
								"& .MuiSvgIcon-root": { color: "#A0A0A0" },
								borderRadius: 1,
								backgroundColor: "#424242",
								flex: 1,
								minWidth: isSMScreen ? "49%" : "150px", // Responsive minWidth
								maxWidth: "100%", // Prevents overflow
								width: "150px",
							},
						},
					}}
				/>
				{!isOneWay && (
					<DatePicker
						label="End Date"
						value={endDate}
						onChange={(val) => {
							setEndDate(val);
							onChange("end", val);
						}}
						slotProps={{
							textField: {
								sx: {
									input: {
										color: "#fff !important",
									},
									label: {
										color: "#A0A0A0",
										fontSize: "18px",
									},
									"& .MuiSvgIcon-root": { color: "#A0A0A0" },
									borderRadius: 1,
									backgroundColor: "#424242",
									flex: 1,
									minWidth: isSMScreen ? "49%" : "150px", // Responsive minWidth
									maxWidth: "100%", // Prevents overflow
									width: "150px",
								},
							},
						}}
						shouldDisableDate={(date) =>
							startDate && dayjs(date).isBefore(dayjs(startDate))
						}
					/>
				)}
			</Box>
		</LocalizationProvider>
	);
};

DatePickers.propTypes = {
	onChange: func.isRequired,
	isOneWay: bool.isRequired,
};

export default DatePickers;
