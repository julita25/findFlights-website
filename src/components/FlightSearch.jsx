import React, { useState } from "react";
import { searchAirports, searchFlights } from "../api";
import {
	Autocomplete,
	Box,
	Button,
	IconButton,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { Place, Search, SwapHoriz } from "@mui/icons-material";
import AddPassengers from "./AddPassengers";
import DatePickers from "./DatePickers";
import dayjs from "dayjs";
import Flights from "./Flights";
import FlightOptionsToggle from "./FlightOptionsToggle";

const CABIN_CLASS = [
	{
		value: "economy",
		label: "Economy",
	},
	{
		value: "premium_economy",
		label: "Premium Economy",
	},
	{
		value: "business",
		label: "Business",
	},
	{
		value: "first",
		label: "First Class",
	},
];

const initialFormValue = {
	originSkyId: "",
	originEntityId: "",
	destinationSkyId: "",
	destinationEntityId: "",
	date: null,
	returnDate: null,
	cabinClass: "economy",
	adults: 1,
	childrens: 0,
	infants: 0,
};

const FlightSearch = () => {
	//const [isLoading, setIsLoading] = useState(false);
	//const [passengerClass, setPassengerClass] = useState("economy");
	const [formValue, setFormValue] = useState({ ...initialFormValue });
	const [options, setOptions] = useState([]);
	const [flights, setFlights] = useState();
	const [errors, setErrors] = useState("");
	const [passengers, setPassengers] = useState({
		adults: 1,
		childrens: 0,
		infants: 0,
	});

	//	console.log("form", formValue);
	/*	useEffect(() => {
		/*	if (!destination) {
			setOptions([]); // Clear options when input is empty
			return;
		}

		//setLoading(true);

		const timer = setTimeout(async () => {
			try {
				const res = await searchAirports(destination); // API call
				console.log("res", res);
				const airports = res?.data.map(({ entityId, skyId, ...item }) => ({
					entityId,
					skyId,
					label: item.presentation.title,
				}));

				setOptions(airports);
			} catch (error) {
				console.error("Error fetching airports:", error);
				setOptions([]);
			}
		}, 500);

		return () => clearTimeout(timer); // Clear the timer if user types again
	}, [destination, origin]);
	*/
	console.log("options", options);
	const handleSearchAirports = (val) => {
		console.log("iscalled");
		if (val.length === 0) setOptions([]);
		const timer = setTimeout(async () => {
			try {
				const res = await searchAirports(val); // API call
				const airports = res?.data.map(({ entityId, skyId, ...item }) => ({
					entityId,
					skyId,
					label: item.presentation.title,
				}));

				setOptions(airports);
			} catch (error) {
				console.error("Error fetching airports:", error);
				setOptions([]);
			}
		}, 200);

		return () => clearTimeout(timer); // Clear the timer if user types again
	};

	const handleTravelDateChange = (key, val) => {
		const updatedForm = { ...formValue };
		if (key == "start") {
			updatedForm["date"] = val;
			setFormValue(updatedForm);
		} else {
			updatedForm["returnDate"] = val;
			setFormValue(updatedForm);
		}
	};

	const handleSubmit = async () => {
		const { date, returnDate, ...form } = formValue;
		const payload = {
			...form,
			date: dayjs(date).format("YYYY-MM-DD"),
			...(returnDate && { returnDate: dayjs(date).format("YYYY-MM-DD") }),
			...passengers,
		};

		const res = await searchFlights(payload); // API call
		setFlights(res?.data);
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					backgroundColor: "#2E2E2E",
					padding: 2,
					paddingTop: 3,
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<Select
						value={formValue.cabinClass}
						onChange={(e) =>
							setFormValue({ ...formValue, cabinClass: e.target.value })
						}
						size="small"
						sx={{ color: "white", backgroundColor: "#424242", borderRadius: 1 }}
					>
						{CABIN_CLASS?.map((item) => (
							<MenuItem key={item.value} value={item.value}>
								{item.label}
							</MenuItem>
						))}
					</Select>
					<AddPassengers onChange={setPassengers} />
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						justifyContent: "space-between",
						backgroundColor: "#2E2E2E",
						color: "#fff",
					}}
				>
					{/* Departure Location */}
					<Box sx={{ width: "70%", display: "flex" }}>
						<Autocomplete
							freeSolo
							options={options}
							onChange={(e, value) => {
								setOptions([]);
								const updatedForm = { ...formValue };
								updatedForm["originEntityId"] = value?.entityId || "";
								updatedForm["originSkyId"] = value?.skyId || "";
								setFormValue(updatedForm);
							}}
							onInputChange={(e, val) => {
								handleSearchAirports(val);
							}}
							getOptionLabel={(option) => option.label || ""}
							renderInput={(params) => (
								<TextField
									{...params}
									placeholder="Origin"
									size="small"
									sx={{
										width: "250px",
										backgroundColor: "#424242",
										borderRadius: 1,
										input: { color: "white", padding: "12px 10px !important" },
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
						{/* Swap Icon */}
						<IconButton sx={{ color: "white" }}>
							<SwapHoriz />
						</IconButton>
						{/* Destination Input */}
						<Autocomplete
							freeSolo
							options={options}
							onChange={(e, value) => {
								setOptions([]);
								const updatedForm = { ...formValue };
								updatedForm["destinationEntityId"] = value?.entityId || "";
								updatedForm["destinationSkyId"] = value?.skyId || "";
								setFormValue(updatedForm);
							}}
							onInputChange={(e, val) => {
								handleSearchAirports(val);
							}}
							getOptionLabel={(option) => option.label || ""}
							renderInput={(params) => (
								<TextField
									{...params}
									placeholder="Destination"
									size="small"
									sx={{
										width: "250px",
										backgroundColor: "#424242",
										borderRadius: 1,
										input: { color: "white", padding: "12px 10px !important" },
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
					</Box>
					<DatePickers onChange={handleTravelDateChange} />
					{/* Search Button */}
					<Button
						variant="contained"
						color="primary"
						sx={{ borderRadius: 1 }}
						startIcon={<Search />}
						onClick={handleSubmit}
					>
						Search
					</Button>
				</Box>
				<FlightOptionsToggle />
			</Box>
			<Box sx={{ padding: 4 }}>
				<Flights data={flights} />
			</Box>
		</>
	);
};

export default FlightSearch;
