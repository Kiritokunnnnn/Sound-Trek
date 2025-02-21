const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

class SpotifyService {
  static async getToken() {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
  }

  static async searchSongs(query) {
    const token = await this.getToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await response.json();
    return data.tracks.items;
  }
}

export default SpotifyService;
