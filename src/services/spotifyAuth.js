import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

// Spotify API credentials
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;  // ⚠️ Thay bằng Client ID từ Spotify Developer
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;  // ⚠️ Trùng với Redirect URI trên Spotify Developer
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

// URL để đăng nhập Spotify
const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private user-read-email playlist-modify-public playlist-modify-private`;

// Lấy token từ URL sau khi đăng nhập
const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// Đặt token vào Spotify API client
const setSpotifyToken = (token) => {
  spotify.setAccessToken(token);
};

// **Chỉ có một lần export duy nhất**
export default spotify;
export { loginUrl, getTokenFromUrl, setSpotifyToken };

