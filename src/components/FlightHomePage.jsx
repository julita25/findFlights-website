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
import { CABIN_CLASS, TRAVEL_TYPE } from "../constants";
import { failureToast } from "../utils";

const FlightHomePage = () => {
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
		travelType: "roundTrip",
	};
	const [formValue, setFormValue] = useState({ ...initialFormValue });
	const [options, setOptions] = useState([]);
	const [flights, setFlights] = useState({});
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
		if (val.length === 0) {
			setOptions([]);
			return;
		}
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

	const handleFlightOptionsToggle = async (sel) => {
		setIsLoading(true);
		const updatedValues = { ...formValue };
		updatedValues["sortBy"] = sel;
		setFormValue(updatedValues);

		const { date, returnDate, travelType, ...form } = updatedValues;
		const payload = {
			...form,
			date: dayjs(date).format("YYYY-MM-DD"),
			...(travelType === "roundTrip" && {
				returnDate: dayjs(returnDate).format("YYYY-MM-DD"),
			}),
			...passengers,
		};

		const res = await searchFlights(payload); // API call
		setTimeout(() => {
			setFlights(res?.data);
			setIsLoading(false);
		}, [500]);
	};

	const handleSubmit = async () => {
		const {
			originEntityId,
			destinationEntityId,
			date,
			returnDate,
			travelType,
			...form
		} = formValue;
		if (
			travelType === "oneWay" &&
			(!originEntityId.length || !destinationEntityId.length || !date)
		) {
			failureToast(
				"Please fill out the missing fields to proceed with the flight search."
			);
			return;
		}
		if (
			travelType === "roundTrip" &&
			(!originEntityId.length ||
				!destinationEntityId.length ||
				!date ||
				!returnDate)
		) {
			failureToast(
				"Please fill out the missing fields to proceed with the flight search."
			);
			return;
		}
		setInitState(false);
		setIsLoading(true);
		console.log("travel", travelType);
		const payload = {
			...form,
			originEntityId,
			destinationEntityId,
			date: dayjs(date).format("YYYY-MM-DD"),
			...(travelType === "roundTrip" && {
				returnDate: dayjs(returnDate).format("YYYY-MM-DD"),
			}),
			...passengers,
		};

		const res = await searchFlights(payload); // API call
		setTimeout(() => {
			setFlights(res?.data);
			setErrorPlaceholder(res?.data?.destinationImageUrl);
			setIsLoading(false);
		}, [500]);
	};

	console.log("loading", formValue);

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
					<DatePickers
						onChange={handleTravelDateChange}
						isOneWay={formValue.travelType === "oneWay"}
					/>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 2,
							...(isSMScreen && { justifyContent: "space-between", width: "100%" }),
						}}
					>
						<Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start" }}>
							<Select
								value={formValue.cabinClass}
								onChange={(e) => {
									const updatedForm = { ...formValue };
									updatedForm["cabinClass"] = e.target.value;
									setFormValue(updatedForm);
								}}
								size="small"
								sx={{
									color: "white",
									backgroundColor: "#424242",
									borderRadius: 1,
									fontSize: "16px",
									width: "140px",
									padding: "5px 8px",
								}}
							>
								{CABIN_CLASS?.map((item) => (
									<MenuItem key={item.value} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
							<AddPassengers onChange={setPassengers} />
							<Select
								value={formValue.travelType}
								onChange={(e) => {
									const updatedForm = { ...formValue };
									updatedForm["travelType"] = e.target.value;
									setFormValue(updatedForm);
								}}
								size="small"
								sx={{
									color: "white",
									backgroundColor: "#424242",
									borderRadius: 1,
									fontSize: "16px",
									width: "130px",
									padding: "5px 8px",
								}}
							>
								{TRAVEL_TYPE?.map((item) => (
									<MenuItem key={item.value} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
						</Box>
						<Button
							variant="contained"
							color="primary"
							sx={{ borderRadius: 1, padding: "12px 14px", minWidth: "120px" }}
							startIcon={<Search />}
							onClick={handleSubmit}
						>
							Search
						</Button>
					</Box>
				</Box>
				{Boolean(Object.keys(flights)?.length) &&
					flights?.context.status !== "failure" && (
						<FlightOptionsToggle
							onChange={(sel) => {
								handleFlightOptionsToggle(sel);
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
