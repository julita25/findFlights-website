import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { func } from "prop-types";

const DatePickers = ({ onChange }) => {
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

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box sx={{ display: "flex", gap: 2, justifyContent: "center", p: 2 }}>
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
								borderRadius: "2px",
								backgroundColor: "#424242",
							},
						},
					}}
				/>
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
								borderRadius: "2px",
								backgroundColor: "#424242",
							},
						},
					}}
					shouldDisableDate={(date) =>
						startDate && dayjs(date).isBefore(dayjs(startDate))
					}
				/>
			</Box>
		</LocalizationProvider>
	);
};

DatePickers.propTypes = {
	onChange: func.isRequired,
};

export default DatePickers;
