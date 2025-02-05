import React, { useState } from "react";
import { searchAirports, searchFlights } from "../api";
import {
	Box,
	Button,
	MenuItem,
	Select,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import AddPassengers from "./AddPassengers";
import DatePickers from "./DatePickers";
import dayjs from "dayjs";
import FlightResults from "./FlightResults";
import FlightOptionsToggle from "./FlightOptionsToggle";
import FlightSearchTextField from "./FlightSearchTextField";
import { CABIN_CLASS } from "../constants";

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
	sortBy: "best",
};

const FlightHomePage = () => {
	const [formValue, setFormValue] = useState({ ...initialFormValue });
	const [options, setOptions] = useState([]);
	const [flights, setFlights] = useState({});
	const [cabinClass, setCabinClass] = useState("economy");
	const [isLoading, setIsLoading] = useState(false);
	const [initState, setInitState] = useState(true);
	const [errorPlaceholder, setErrorPlaceholder] = useState("");
	const [passengers, setPassengers] = useState({
		adults: 1,
		childrens: 0,
		infants: 0,
	});

	const isSMScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
	const isXSScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

	const handleSearchAirports = (val) => {
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

		return () => clearTimeout(timer);
	};

	const handleTravelDateChange = (key, val) => {
		const updatedForm = { ...formValue };
		if (key === "start") {
			updatedForm["date"] = val;
			setFormValue(updatedForm);
		} else {
			updatedForm["returnDate"] = val;
			setFormValue(updatedForm);
		}
	};

	const handleFlightOptionsChange = async (sel) => {
		const updatedValues = { ...formValue };
		updatedValues["sortBy"] = sel;
		setFormValue(updatedValues);

		const { date, returnDate, ...form } = updatedValues;
		const payload = {
			...form,
			date: dayjs(date).format("YYYY-MM-DD"),
			...(returnDate && { returnDate: dayjs(date).format("YYYY-MM-DD") }),
			...passengers,
		};

		const res = await searchFlights(payload); // API call
		setFlights(res?.data);
	};

	const handleSubmit = async () => {
		setInitState(false);
		setIsLoading(true);
		const { date, returnDate, ...form } = formValue;
		const payload = {
			...form,
			date: dayjs(date).format("YYYY-MM-DD"),
			...(returnDate && { returnDate: dayjs(date).format("YYYY-MM-DD") }),
			...passengers,
		};

		const res = await searchFlights(payload); // API call
		setTimeout(() => {
			setFlights(res?.data);
			setErrorPlaceholder(res?.data?.destinationImageUrl);
			setIsLoading(false);
		}, [500]);
	};

	console.log("loading", isLoading);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					backgroundColor: "#2E2E2E",
					padding: 2,
					paddingTop: 5,
				}}
			>
				<Typography sx={{ fontSize: "42px", fontWeight: 700, color: "white" }}>
					Flights
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						gap: 2,
						backgroundColor: "#2E2E2E",
						color: "#fff",
						padding: 2,
						...(isSMScreen && {
							flexDirection: "column",
							justifyContent: "flex-start",
						}),
					}}
				>
					<Box
						sx={{
							display: "flex",
							gap: 2,
							width: "100%",
							...(isXSScreen && { width: "100%", flexWrap: "wrap" }),
						}}
					>
						<FlightSearchTextField
							placeholder={"Enter origin"}
							options={options}
							onSelect={(value) => {
								const updatedForm = { ...formValue };
								updatedForm["originEntityId"] = value?.entityId || "";
								updatedForm["originSkyId"] = value?.skyId || "";
								setFormValue(updatedForm);
							}}
							onChangeInput={handleSearchAirports}
						/>
						<FlightSearchTextField
							placeholder={"Enter destination"}
							options={options}
							onSelect={(value) => {
								const updatedForm = { ...formValue };
								updatedForm["destinationEntityId"] = value?.entityId || "";
								updatedForm["destinationSkyId"] = value?.skyId || "";
								setFormValue(updatedForm);
							}}
							onChangeInput={handleSearchAirports}
						/>
					</Box>
					<DatePickers onChange={handleTravelDateChange} />
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							...(isSMScreen && { justifyContent: "space-between", width: "100%" }),
						}}
					>
						<Box sx={{ display: "flex", gap: 2 }}>
							<Select
								value={cabinClass}
								onChange={(e) => {
									const updatedForm = { ...formValue };
									formValue["cabinClass"] = e.target.value;
									setCabinClass(e.target.value);
									setFormValue(updatedForm);
								}}
								size="small"
								sx={{
									color: "white",
									backgroundColor: "#424242",
									borderRadius: 1,
									fontSize: "18px",
									width: "150px",
									padding: "8px 10px",
								}}
							>
								{CABIN_CLASS?.map((item) => (
									<MenuItem key={item.value} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
							<AddPassengers onChange={setPassengers} />
						</Box>
						<Button
							variant="contained"
							color="primary"
							sx={{ borderRadius: 1, padding: "14px 14px" }}
							startIcon={<Search />}
							onClick={handleSubmit}
						>
							Search
						</Button>
					</Box>
				</Box>
				{Boolean(Object.keys(flights)?.length) && (
					<FlightOptionsToggle
						onChange={(sel) => {
							handleFlightOptionsChange(sel);
						}}
					/>
				)}
			</Box>
			<Box sx={{ padding: 4 }}>
				{initState ? (
					<Box
						sx={{
							minHeight: "100%",
							gap: 10,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography sx={{ fontSize: "20px" }}>
							Start searching and get the best flights...
						</Typography>
						<img src={"travel2.png"} style={{ width: "350px" }} alt="travel" />
					</Box>
				) : (
					<FlightResults
						data={flights}
						isLoading={isLoading}
						failed={flights?.context?.status}
						placeholderImg={errorPlaceholder}
					/>
				)}
			</Box>
		</>
	);
};

export default FlightHomePage;
