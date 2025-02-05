import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { bool, instanceOf, string } from "prop-types";
import { Box, CircularProgress, Divider } from "@mui/material";
import dayjs from "dayjs";
import { Flight } from "@mui/icons-material";

const FlightResults = ({ data, isLoading, failed, placeholderImg }) => {
	console.log("mock", isLoading);

	const formatDepartureDate = (date) => {
		return dayjs(date).format("ddd, MMM D, h:mm A");
	};

	const formatTravelDuration = (minutes) => {
		const hours = Math.floor(minutes / 60);
		const remainingMinutes = minutes % 60;

		if (hours && remainingMinutes) {
			return `${hours}hr ${remainingMinutes}`;
		} else if (hours) {
			return `${hours}hr`;
		} else {
			return `${remainingMinutes}min`;
		}
	};

	const formatFlightStops = (segments) => {
		return segments
			.splice(-1, 1)
			.map((item) => item.destination.parent.displayCode);
	};

	if (isLoading) return <CircularProgress />;

	if (failed === "failure")
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 2,
				}}
			>
				<img src={placeholderImg} style={{ width: "70%" }} />
				<Typography sx={{ fontSize: "28px", fontWeight: 500 }}>
					Ups...no results are showing, please try again
				</Typography>
			</Box>
		);

	return data?.itineraries?.map((item) => (
		<Accordion key={item.id} defaultExpanded>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1-content"
				id="panel1-header"
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box>
						<Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
							Departure{" "}
						</Typography>
						<Typography sx={{ fontSize: "16px", lineHeight: "25px" }}>
							{formatDepartureDate(item.legs[0].departure)}
						</Typography>
					</Box>
					<Typography color="green" sx={{ fontSize: "20px", fontWeight: 500 }}>
						{item.price.formatted}
					</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				{item.legs.map((it, index) => (
					<Box key={it.id}>
						<Box
							sx={{
								display: "flex",
								gap: 4,
								paddingLeft: 2,
								justifyContent: "center",
							}}
						>
							<Box sx={{ display: "flex", gap: 2 }}>
								<Box>
									<img src={it.carriers.marketing[0].logoUrl} width={"50px"} />
								</Box>
								<Box>
									<Typography> {dayjs(it.departure).format("h:mm A")}</Typography>
									<Typography>{it.origin.id}</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									gap: 1,
									width: "200px",
								}}
							>
								<Typography variant="body2" color="text.secondary">
									{formatTravelDuration(it.durationInMinutes)}
								</Typography>
								<Box display={"flex"} sx={{ alignItems: "center", gap: 1 }}>
									<Divider sx={{ width: "100px", borderColor: "grey.400" }} />
									<Flight
										sx={{ fontSize: 18, color: "grey.600", transform: "rotate(90deg)" }}
									/>
								</Box>
								<Typography variant="body2" color="primary">
									{it.stopCount >= 1
										? `${it.stopCount} stop ${formatFlightStops(it.segments)}`
										: "Direct"}
								</Typography>
							</Box>
							<Box>
								<Typography>{dayjs(it.arrival).format("h:mm A")}</Typography>
								<Typography>{it.destination.id}</Typography>
							</Box>
						</Box>

						{item.legs.length - 1 !== index && <Divider sx={{ my: 2 }} />}
					</Box>
				))}
			</AccordionDetails>
		</Accordion>
	));
};

FlightResults.propTypes = {
	data: instanceOf(Object).isRequired,
	isLoading: bool.isRequired,
	failed: string,
	placeholderImg: string,
};
FlightResults.defaultProps = {
	failed: "",
	placeholderImg: "",
};

export default FlightResults;
