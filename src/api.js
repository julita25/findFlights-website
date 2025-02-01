// Base URL for the API
const API_URL = "https://sky-scrapper.p.rapidapi.com";

const headers = {
	"x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
	"x-rapidapi-key": "060ff29326msh7cacb95f34d143ep165794jsn365ebe8059fb",
	"Content-Type": "application/json", // You can add other headers if needed
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
		console.error("Error fetching airports:", error);
		return null;
	}
};

// Fetch nearby airports based on latitude and longitude
export const getNearbyAirports = async (lat, lng) => {
	try {
		const response = await fetch(
			`${API_URL}/api/v1/flights/getNearByAirports?lat=${lat}&lng=${lng}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch nearby airports");
		}
		const data = await response.json().data;
		return data;
	} catch (error) {
		console.error("Error fetching nearby airports:", error);
		return null;
	}
};

// Search for flights based on origin and destination
export const searchFlights = async (originSkyId, destinationSkyId, date) => {
	try {
		const response = await fetch(
			`${API_URL}/api/v1/flights/searchFlights?originSkyId=${originSkyId}&destinationSkyId=${destinationSkyId}&date=${date}`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch flights");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching flights:", error);
		return null;
	}
};
