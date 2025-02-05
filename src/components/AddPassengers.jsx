import { Add, Person, Remove } from "@mui/icons-material";
import {
	Box,
	Button,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { func } from "prop-types";
import React, { useState } from "react";
import { PASSENGERS } from "../constants";

const AddPassengers = ({ onChange }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [passengers, setPassengers] = useState({
		adults: 1,
		children: 0,
		infants: 0,
	});

	const totalPassenegers = Object.values(passengers).reduce(
		(total, count) => total + count,
		0
	);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleIncrement = (type) => {
		setPassengers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
		onChange((prev) => ({ ...prev, [type]: prev[type] + 1 }));
	};

	const handleDecrement = (type) => {
		setPassengers((prev) => ({
			...prev,
			[type]: Math.max(0, prev[type] - 1),
		}));
		onChange((prev) => ({
			...prev,
			[type]: Math.max(0, prev[type] - 1),
		}));
	};

	return (
		<>
			<Button
				variant="outlined"
				onClick={(event) => setAnchorEl(event.currentTarget)}
				sx={{ textTransform: "none", gap: 1 }}
			>
				<Person />
				{totalPassenegers}
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				slotProps={{
					paper: {
						sx: {
							padding: "10px",
							backgroundColor: "#2d2d2d",
							color: "white",
							borderRadius: "8px",
							width: "250px",
						},
					},
				}}
			>
				{PASSENGERS.map((item) => (
					<MenuItem
						key={item.key}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							gap: 1,
							"&:hover": { backgroundColor: "transparent" },
						}}
						disableRipple
					>
						<Box>
							<Typography>{item.label}</Typography>
							{item.subLabel && (
								<Typography variant="caption" color="gray">
									{item.subLabel}
								</Typography>
							)}
						</Box>
						<Box display="flex" alignItems="center" gap={1}>
							<IconButton
								size="small"
								onClick={() => handleDecrement(item.key)}
								sx={{
									backgroundColor: "#424242",
									color: "white",
									"&:hover": { backgroundColor: "#555" },
								}}
							>
								<Remove fontSize="small" />
							</IconButton>
							<Typography>{passengers[item.key]}</Typography>
							<IconButton
								size="small"
								onClick={() => handleIncrement(item.key)}
								sx={{
									backgroundColor: "#3b4cca",
									color: "white",
									"&:hover": { backgroundColor: "#2a3b9f" },
								}}
							>
								<Add fontSize="small" />
							</IconButton>
						</Box>
					</MenuItem>
				))}
				<Divider sx={{ my: 1, borderColor: "#444" }} />
				<Box display="flex" justifyContent="flex-end" px={2}>
					<Button onClick={handleClose} sx={{ color: "#90caf9" }}>
						Done
					</Button>
				</Box>
			</Menu>
		</>
	);
};

AddPassengers.propTypes = {
	onChange: func.isRequired,
};

export default AddPassengers;
