import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import FlightHomePage from "./components/FlightHomePage";
import { ToastContainer } from "react-toastify";

function App() {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1100,
				xl: 1926,
			},
		},
		components: {
			MuiPickersDay: {
				styleOverrides: {
					root: {
						fontSize: "15px",
					},
				},
			},
			MuiDayCalendar: {
				styleOverrides: {
					weekDayLabel: {
						fontSize: "16px",
					},
				},
			},
			MuiPickersCalendarHeader: {
				styleOverrides: {
					label: {
						fontSize: "20px",
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<ToastContainer
					position="bottom-center"
					theme="colored"
					hideProgressBar
					autoClose={2000}
				/>
				<FlightHomePage />
			</div>
		</ThemeProvider>
	);
}

export default App;
