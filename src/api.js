import { failureToast } from "./utils";

// Base URL for the API
const API_URL = "https://sky-scrapper.p.rapidapi.com";

const headers = {
	"x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
	"x-rapidapi-key": "dde203d021msh403295d33d29fb2p13cd8bjsn531d413b5156",
	"Content-Type": "application/json", //
};

// Fetch airports based on city or place name
export const searchAirports = async (query) => {
	if (!query) return [];
	try {
		const response = await fetch(
			`${API_URL}/api/v1/flights/searchAirport?query=${query}&locale=en-US`,
			{
				method: "GET",
				headers: headers,
			}
		);
		if (!response.ok) {
			throw new Error("Failed to fetch airports");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		failureToast(error);
		return null;
	}
};

// Search for flights based on origin and destination
export const searchFlights = async (params) => {
	try {
		const response = await fetch(
			`${API_URL}/api/v1/flights/searchFlights?${new URLSearchParams(params)}`,
			{
				method: "GET",
				headers: headers,
			}
		);
		if (!response.ok) {
			throw new Error("Failed to fetch flights");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		failureToast(error);
		return null;
	}
};
