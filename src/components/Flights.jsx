import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { instanceOf } from "prop-types";
import { Box, Divider } from "@mui/material";
import dayjs from "dayjs";
import { Flight } from "@mui/icons-material";

const mock = [
	{
		id: "11182-2502101150--31939-1-13554-2502101725|13554-2502102130--31939-1-11182-2502111020",
		price: {
			raw: 887.68,
			formatted: "$888",
			pricingOptionId: "Khg64hJA-Xfi",
		},
		legs: [
			{
				id: "11182-2502101150--31939-1-13554-2502101725",
				origin: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				destination: {
					id: "LHR",
					entityId: "95565050",
					name: "London Heathrow",
					displayCode: "LHR",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				durationInMinutes: 575,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T11:50:00",
				arrival: "2025-02-10T17:25:00",
				timeDeltaInDays: 0,
				carriers: {
					marketing: [
						{
							id: -31939,
							alternateId: "QR",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/QR.png",
							name: "Qatar Airways",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "11182-11089-2502101150-2502101205--31939",
						origin: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						destination: {
							flightPlaceId: "DOH",
							displayCode: "DOH",
							parent: {
								flightPlaceId: "DOHA",
								displayCode: "DOH",
								name: "Doha",
								type: "City",
							},
							name: "Hamad International",
							type: "Airport",
							country: "Qatar",
						},
						departure: "2025-02-10T11:50:00",
						arrival: "2025-02-10T12:05:00",
						durationInMinutes: 75,
						flightNumber: "1007",
						marketingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "11089-13554-2502101250-2502101725--31939",
						origin: {
							flightPlaceId: "DOH",
							displayCode: "DOH",
							parent: {
								flightPlaceId: "DOHA",
								displayCode: "DOH",
								name: "Doha",
								type: "City",
							},
							name: "Hamad International",
							type: "Airport",
							country: "Qatar",
						},
						destination: {
							flightPlaceId: "LHR",
							displayCode: "LHR",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Heathrow",
							type: "Airport",
							country: "United Kingdom",
						},
						departure: "2025-02-10T12:50:00",
						arrival: "2025-02-10T17:25:00",
						durationInMinutes: 455,
						flightNumber: "1",
						marketingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
			{
				id: "13554-2502102130--31939-1-11182-2502111020",
				origin: {
					id: "LHR",
					entityId: "95565050",
					name: "London Heathrow",
					displayCode: "LHR",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				destination: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				durationInMinutes: 530,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T21:30:00",
				arrival: "2025-02-11T10:20:00",
				timeDeltaInDays: 1,
				carriers: {
					marketing: [
						{
							id: -31939,
							alternateId: "QR",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/QR.png",
							name: "Qatar Airways",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "13554-11089-2502102130-2502110710--31939",
						origin: {
							flightPlaceId: "LHR",
							displayCode: "LHR",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Heathrow",
							type: "Airport",
							country: "United Kingdom",
						},
						destination: {
							flightPlaceId: "DOH",
							displayCode: "DOH",
							parent: {
								flightPlaceId: "DOHA",
								displayCode: "DOH",
								name: "Doha",
								type: "City",
							},
							name: "Hamad International",
							type: "Airport",
							country: "Qatar",
						},
						departure: "2025-02-10T21:30:00",
						arrival: "2025-02-11T07:10:00",
						durationInMinutes: 400,
						flightNumber: "16",
						marketingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "11089-11182-2502110800-2502111020--31939",
						origin: {
							flightPlaceId: "DOH",
							displayCode: "DOH",
							parent: {
								flightPlaceId: "DOHA",
								displayCode: "DOH",
								name: "Doha",
								type: "City",
							},
							name: "Hamad International",
							type: "Airport",
							country: "Qatar",
						},
						destination: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						departure: "2025-02-11T08:00:00",
						arrival: "2025-02-11T10:20:00",
						durationInMinutes: 80,
						flightNumber: "1006",
						marketingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31939,
							name: "Qatar Airways",
							alternateId: "QR",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
		],
		isSelfTransfer: false,
		isProtectedSelfTransfer: false,
		farePolicy: {
			isChangeAllowed: false,
			isPartiallyChangeable: false,
			isCancellationAllowed: false,
			isPartiallyRefundable: false,
		},
		fareAttributes: {},
		isMashUp: false,
		hasFlexibleOptions: false,
		score: 0.911572,
	},
	{
		id: "11182-2502100535--32119-1-13554-2502101345|13554-2502101545--32119-1-11182-2502110435",
		price: {
			raw: 735.5,
			formatted: "$736",
			pricingOptionId: "UMWQJ_yYvpoH",
		},
		legs: [
			{
				id: "11182-2502100535--32119-1-13554-2502101345",
				origin: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				destination: {
					id: "LHR",
					entityId: "95565050",
					name: "London Heathrow",
					displayCode: "LHR",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				durationInMinutes: 730,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T05:35:00",
				arrival: "2025-02-10T13:45:00",
				timeDeltaInDays: 0,
				carriers: {
					marketing: [
						{
							id: -32119,
							alternateId: "KU",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/KU.png",
							name: "Kuwait Airways",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "11182-13344-2502100535-2502100615--32119",
						origin: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						destination: {
							flightPlaceId: "KWI",
							displayCode: "KWI",
							parent: {
								flightPlaceId: "KWIA",
								displayCode: "KWI",
								name: "Kuwait",
								type: "City",
							},
							name: "Kuwait",
							type: "Airport",
							country: "Kuwait",
						},
						departure: "2025-02-10T05:35:00",
						arrival: "2025-02-10T06:15:00",
						durationInMinutes: 100,
						flightNumber: "678",
						marketingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "13344-13554-2502101000-2502101345--32119",
						origin: {
							flightPlaceId: "KWI",
							displayCode: "KWI",
							parent: {
								flightPlaceId: "KWIA",
								displayCode: "KWI",
								name: "Kuwait",
								type: "City",
							},
							name: "Kuwait",
							type: "Airport",
							country: "Kuwait",
						},
						destination: {
							flightPlaceId: "LHR",
							displayCode: "LHR",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Heathrow",
							type: "Airport",
							country: "United Kingdom",
						},
						departure: "2025-02-10T10:00:00",
						arrival: "2025-02-10T13:45:00",
						durationInMinutes: 405,
						flightNumber: "101",
						marketingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
			{
				id: "13554-2502101545--32119-1-11182-2502110435",
				origin: {
					id: "LHR",
					entityId: "95565050",
					name: "London Heathrow",
					displayCode: "LHR",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				destination: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				durationInMinutes: 530,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T15:45:00",
				arrival: "2025-02-11T04:35:00",
				timeDeltaInDays: 1,
				carriers: {
					marketing: [
						{
							id: -32119,
							alternateId: "KU",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/KU.png",
							name: "Kuwait Airways",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "13554-13344-2502101545-2502110045--32119",
						origin: {
							flightPlaceId: "LHR",
							displayCode: "LHR",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Heathrow",
							type: "Airport",
							country: "United Kingdom",
						},
						destination: {
							flightPlaceId: "KWI",
							displayCode: "KWI",
							parent: {
								flightPlaceId: "KWIA",
								displayCode: "KWI",
								name: "Kuwait",
								type: "City",
							},
							name: "Kuwait",
							type: "Airport",
							country: "Kuwait",
						},
						departure: "2025-02-10T15:45:00",
						arrival: "2025-02-11T00:45:00",
						durationInMinutes: 360,
						flightNumber: "102",
						marketingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "13344-11182-2502110150-2502110435--32119",
						origin: {
							flightPlaceId: "KWI",
							displayCode: "KWI",
							parent: {
								flightPlaceId: "KWIA",
								displayCode: "KWI",
								name: "Kuwait",
								type: "City",
							},
							name: "Kuwait",
							type: "Airport",
							country: "Kuwait",
						},
						destination: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						departure: "2025-02-11T01:50:00",
						arrival: "2025-02-11T04:35:00",
						durationInMinutes: 105,
						flightNumber: "677",
						marketingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -32119,
							name: "Kuwait Airways",
							alternateId: "KU",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
		],
		isSelfTransfer: false,
		isProtectedSelfTransfer: false,
		farePolicy: {
			isChangeAllowed: false,
			isPartiallyChangeable: false,
			isCancellationAllowed: false,
			isPartiallyRefundable: false,
		},
		fareAttributes: {},
		isMashUp: false,
		hasFlexibleOptions: false,
		score: 0.811339,
	},
	{
		id: "11182-2502100500--31896-1-13554-2502101415|13554-2502101850--31896-1-11182-2502110925",
		price: {
			raw: 634.12,
			formatted: "$635",
			pricingOptionId: "120ks57XU_AC",
		},
		legs: [
			{
				id: "11182-2502100500--31896-1-13554-2502101415",
				origin: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				destination: {
					id: "LHR",
					entityId: "95565050",
					name: "London Heathrow",
					displayCode: "LHR",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				durationInMinutes: 795,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T05:00:00",
				arrival: "2025-02-10T14:15:00",
				timeDeltaInDays: 0,
				carriers: {
					marketing: [
						{
							id: -31896,
							alternateId: "SV",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/SV.png",
							name: "Saudia",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "11182-16029-2502100500-2502100610--31896",
						origin: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						destination: {
							flightPlaceId: "RUH",
							displayCode: "RUH",
							parent: {
								flightPlaceId: "RUHA",
								displayCode: "RUH",
								name: "Riyadh",
								type: "City",
							},
							name: "Riyadh",
							type: "Airport",
							country: "Saudi Arabia",
						},
						departure: "2025-02-10T05:00:00",
						arrival: "2025-02-10T06:10:00",
						durationInMinutes: 130,
						flightNumber: "593",
						marketingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "16029-13554-2502100945-2502101415--31896",
						origin: {
							flightPlaceId: "RUH",
							displayCode: "RUH",
							parent: {
								flightPlaceId: "RUHA",
								displayCode: "RUH",
								name: "Riyadh",
								type: "City",
							},
							name: "Riyadh",
							type: "Airport",
							country: "Saudi Arabia",
						},
						destination: {
							flightPlaceId: "LHR",
							displayCode: "LHR",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Heathrow",
							type: "Airport",
							country: "United Kingdom",
						},
						departure: "2025-02-10T09:45:00",
						arrival: "2025-02-10T14:15:00",
						durationInMinutes: 450,
						flightNumber: "121",
						marketingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
			{
				id: "13554-2502101850--31896-1-11182-2502110925",
				origin: {
					id: "LHR",
					entityId: "95565050",
					name: "London Heathrow",
					displayCode: "LHR",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				destination: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				durationInMinutes: 635,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T18:50:00",
				arrival: "2025-02-11T09:25:00",
				timeDeltaInDays: 1,
				carriers: {
					marketing: [
						{
							id: -31896,
							alternateId: "SV",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/SV.png",
							name: "Saudia",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "13554-16029-2502101850-2502110420--31896",
						origin: {
							flightPlaceId: "LHR",
							displayCode: "LHR",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Heathrow",
							type: "Airport",
							country: "United Kingdom",
						},
						destination: {
							flightPlaceId: "RUH",
							displayCode: "RUH",
							parent: {
								flightPlaceId: "RUHA",
								displayCode: "RUH",
								name: "Riyadh",
								type: "City",
							},
							name: "Riyadh",
							type: "Airport",
							country: "Saudi Arabia",
						},
						departure: "2025-02-10T18:50:00",
						arrival: "2025-02-11T04:20:00",
						durationInMinutes: 390,
						flightNumber: "112",
						marketingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "16029-11182-2502110630-2502110925--31896",
						origin: {
							flightPlaceId: "RUH",
							displayCode: "RUH",
							parent: {
								flightPlaceId: "RUHA",
								displayCode: "RUH",
								name: "Riyadh",
								type: "City",
							},
							name: "Riyadh",
							type: "Airport",
							country: "Saudi Arabia",
						},
						destination: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						departure: "2025-02-11T06:30:00",
						arrival: "2025-02-11T09:25:00",
						durationInMinutes: 115,
						flightNumber: "562",
						marketingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31896,
							name: "Saudia",
							alternateId: "SV",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
		],
		isSelfTransfer: false,
		isProtectedSelfTransfer: false,
		farePolicy: {
			isChangeAllowed: false,
			isPartiallyChangeable: false,
			isCancellationAllowed: false,
			isPartiallyRefundable: false,
		},
		fareAttributes: {},
		isMashUp: false,
		hasFlexibleOptions: false,
		score: 0.677582,
	},
	{
		id: "11182-2502100350--31808,-31973-1-16574-2502101115|16574-2502101950--31915,-32301-1-11182-2502111030",
		price: {
			raw: 548.77,
			formatted: "$549",
			pricingOptionId: "XtG5VNqOJNbP",
		},
		legs: [
			{
				id: "11182-2502100350--31808,-31973-1-16574-2502101115",
				origin: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				destination: {
					id: "STN",
					entityId: "95565052",
					name: "London Stansted",
					displayCode: "STN",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				durationInMinutes: 685,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T03:50:00",
				arrival: "2025-02-10T11:15:00",
				timeDeltaInDays: 0,
				carriers: {
					marketing: [
						{
							id: -31808,
							alternateId: "XQ",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/XQ.png",
							name: "SunExpress",
						},
						{
							id: -31973,
							alternateId: "H9",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/H9.png",
							name: "Pegasus Airlines",
						},
					],
					operationType: "fully_operated",
				},
				segments: [
					{
						id: "11182-9692-2502100350-2502100745--31808",
						origin: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						destination: {
							flightPlaceId: "AYT",
							displayCode: "AYT",
							parent: {
								flightPlaceId: "ANTA",
								displayCode: "AYT",
								name: "Antalya",
								type: "City",
							},
							name: "Antalya",
							type: "Airport",
							country: "Türkiye (Turkey)",
						},
						departure: "2025-02-10T03:50:00",
						arrival: "2025-02-10T07:45:00",
						durationInMinutes: 295,
						flightNumber: "209",
						marketingCarrier: {
							id: -31808,
							name: "SunExpress",
							alternateId: "XQ",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31808,
							name: "SunExpress",
							alternateId: "XQ",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "9692-16574-2502100940-2502101115--31973",
						origin: {
							flightPlaceId: "AYT",
							displayCode: "AYT",
							parent: {
								flightPlaceId: "ANTA",
								displayCode: "AYT",
								name: "Antalya",
								type: "City",
							},
							name: "Antalya",
							type: "Airport",
							country: "Türkiye (Turkey)",
						},
						destination: {
							flightPlaceId: "STN",
							displayCode: "STN",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Stansted",
							type: "Airport",
							country: "United Kingdom",
						},
						departure: "2025-02-10T09:40:00",
						arrival: "2025-02-10T11:15:00",
						durationInMinutes: 275,
						flightNumber: "1819",
						marketingCarrier: {
							id: -31973,
							name: "Pegasus Airlines",
							alternateId: "H9",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -31973,
							name: "Pegasus Airlines",
							alternateId: "H9",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
			{
				id: "16574-2502101950--31915,-32301-1-11182-2502111030",
				origin: {
					id: "STN",
					entityId: "95565052",
					name: "London Stansted",
					displayCode: "STN",
					city: "London",
					country: "United Kingdom",
					isHighlighted: false,
				},
				destination: {
					id: "DXB",
					entityId: "95673506",
					name: "Dubai",
					displayCode: "DXB",
					city: "Dubai",
					country: "United Arab Emirates",
					isHighlighted: false,
				},
				durationInMinutes: 640,
				stopCount: 1,
				isSmallestStops: false,
				departure: "2025-02-10T19:50:00",
				arrival: "2025-02-11T10:30:00",
				timeDeltaInDays: 1,
				carriers: {
					marketing: [
						{
							id: -31915,
							alternateId: "FR",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/FR.png",
							name: "Ryanair",
						},
						{
							id: -32301,
							alternateId: "FZ",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/FZ.png",
							name: "flydubai",
						},
					],
					operating: [
						{
							id: -30823,
							alternateId: "7A",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/7A.png",
							name: "Malta Air",
						},
						{
							id: -32301,
							alternateId: "FZ",
							logoUrl: "https://logos.skyscnr.com/images/airlines/favicon/FZ.png",
							name: "flydubai",
						},
					],
					operationType: "partially_operated",
				},
				segments: [
					{
						id: "16574-15116-2502101950-2502110055--31915",
						origin: {
							flightPlaceId: "STN",
							displayCode: "STN",
							parent: {
								flightPlaceId: "LOND",
								displayCode: "LON",
								name: "London",
								type: "City",
							},
							name: "London Stansted",
							type: "Airport",
							country: "United Kingdom",
						},
						destination: {
							flightPlaceId: "OTP",
							displayCode: "OTP",
							parent: {
								flightPlaceId: "BUCH",
								displayCode: "BUH",
								name: "Bucharest",
								type: "City",
							},
							name: "Bucharest Otopeni",
							type: "Airport",
							country: "Romania",
						},
						departure: "2025-02-10T19:50:00",
						arrival: "2025-02-11T00:55:00",
						durationInMinutes: 185,
						flightNumber: "7627",
						marketingCarrier: {
							id: -31915,
							name: "Ryanair",
							alternateId: "FR",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -30823,
							name: "Malta Air",
							alternateId: "7A",
							allianceId: 0,
							displayCode: "",
						},
					},
					{
						id: "15116-11182-2502110335-2502111030--32301",
						origin: {
							flightPlaceId: "OTP",
							displayCode: "OTP",
							parent: {
								flightPlaceId: "BUCH",
								displayCode: "BUH",
								name: "Bucharest",
								type: "City",
							},
							name: "Bucharest Otopeni",
							type: "Airport",
							country: "Romania",
						},
						destination: {
							flightPlaceId: "DXB",
							displayCode: "DXB",
							parent: {
								flightPlaceId: "DXBA",
								displayCode: "DXB",
								name: "Dubai",
								type: "City",
							},
							name: "Dubai",
							type: "Airport",
							country: "United Arab Emirates",
						},
						departure: "2025-02-11T03:35:00",
						arrival: "2025-02-11T10:30:00",
						durationInMinutes: 295,
						flightNumber: "1710",
						marketingCarrier: {
							id: -32301,
							name: "flydubai",
							alternateId: "FZ",
							allianceId: 0,
							displayCode: "",
						},
						operatingCarrier: {
							id: -32301,
							name: "flydubai",
							alternateId: "FZ",
							allianceId: 0,
							displayCode: "",
						},
					},
				],
			},
		],
		isSelfTransfer: false,
		isProtectedSelfTransfer: true,
		farePolicy: {
			isChangeAllowed: false,
			isPartiallyChangeable: false,
			isCancellationAllowed: false,
			isPartiallyRefundable: false,
		},
		eco: {
			ecoContenderDelta: 11.988062,
		},
		fareAttributes: {},
		tags: ["second_cheapest"],
		isMashUp: false,
		hasFlexibleOptions: false,
		score: 0.662515,
	},
];

const Flights = ({ data }) => {
	console.log("mock", mock);

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
	return mock.map((item) => (
		<Accordion key={item.id}>
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
						<Typography>Departure </Typography>
						<Typography sx={{ fontSize: "12px", lineHeight: "25px" }}>
							{formatDepartureDate(item.legs[0].departure)}
						</Typography>
					</Box>
					<Typography color="green">{item.price.formatted}</Typography>
				</Box>
			</AccordionSummary>
			<AccordionDetails>
				{item.legs.map((item) => (
					<Box key={item.id}>
						<Box sx={{ display: "flex", gap: 4, paddingLeft: 2 }}>
							<Box sx={{ display: "flex", gap: 2 }}>
								<Box>
									<img src={item.carriers.marketing[0].logoUrl} width={"50px"} />
								</Box>
								<Box>
									<Typography> {dayjs(item.departure).format("h:mm A")}</Typography>
									<Typography>{item.origin.id}</Typography>
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
									{formatTravelDuration(item.durationInMinutes)}
								</Typography>
								<Box display={"flex"} sx={{ alignItems: "center", gap: 1 }}>
									<Divider sx={{ width: "100px", borderColor: "grey.400" }} />
									<Flight
										sx={{ fontSize: 18, color: "grey.600", transform: "rotate(90deg)" }}
									/>
								</Box>
								<Typography variant="body2" color="primary">
									{item.stopCount >= 1
										? `${item.stopCount} stop ${formatFlightStops(item.segments)}`
										: "Direct"}
								</Typography>
							</Box>
							<Box>
								<Typography>{dayjs(item.arrival).format("h:mm A")}</Typography>
								<Typography>{item.destination.id}</Typography>
							</Box>
						</Box>

						<Divider sx={{ my: 2, width: "500px" }} />
					</Box>
				))}
			</AccordionDetails>
		</Accordion>
	));
};

Flights.propTypes = {
	data: instanceOf(Array).isRequired,
};

export default Flights;
