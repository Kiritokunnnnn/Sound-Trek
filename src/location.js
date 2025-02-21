const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class LocationService {
  static async getLocationType(lat, lon) {

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=1000&key=${GOOGLE_API_KEY}`
    );

    const data = await response.json();
    console.log("🏠 Địa điểm gần nhất:", data);

    if (data.status !== "OK") {
      console.error("❌ Lỗi API hoặc không có kết quả!");
      return "default";
    }

    if (data.results.length > 0) {
      const placeTypes = data.results[0].types;

      if (placeTypes.includes("gym")) return "gym";
      if (placeTypes.includes("university") || placeTypes.includes("school")) return "study";
      if (placeTypes.includes("road") || placeTypes.includes("highway")) return "roadtrip";
    }

    return "default"; // Nếu không có thông tin, trả về mặc định
  }
}

export default LocationService;
