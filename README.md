# 🎵 Sound Trek - A Personalized Music Playlist Web App

> **A modern web application that allows users to search for songs, preview tracks, create Spotify playlists, and manage favorite songs with a sleek and interactive UI.**

## 📸 Screenshots

![Homepage](images/homepage.png)
**Sound Trek Home Page without log in**
![Search Results](https://github.com/Kiritokunnnnn/Sound-Trek/blob/51494665c90ea0143e5feec13357f36013a0ecbc/images/Unlimited%20Search.png) 
**Unlimited Search Results**
![Favorites](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/after%20saved.png)
**Save Favorite songs**
![Song Preview](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/iframe%20preview.png)
**Song Preview**
![Open on Spotiy](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/open%20on%20spotify.png)
**Open on Spotify button**
![Light mode](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/light-mode.png)
**Light mode**
![Authorization](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/spotify%20authorization%20page.jpeg)
**Log in Button will navigate to Spotify Authorization page**
![After Log-in Page](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/homepage%20with%20login.png)
**Get user information and new functionalities**
![Modal](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/Modal%2C%20create%20new%20playlist.png)
**Create new playlist**
![Add song to playlist](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/adding%20song%20into%20playlist.png)
**Add favorite songs into new playlist**
![New Playlist](https://github.com/Kiritokunnnnn/Sound-Trek/blob/c86d1f7839e15b469138ecadc4bda857575b59eb/images/spotify%20screen%20after%20add%20songs.png)
**Spotify new playlist created**
## 🚀 Features

- 🔍 **Search for Songs**: Find songs from Spotify using keywords.
- 🎧 **Preview Songs**: Listen to a 30-second preview before adding to a playlist.
- ❤️ **Save to Favorites**: Add songs to your personal favorite list.
- 🎼 **Create Playlists**: Generate new Spotify playlists and add songs directly.
- 🔄 **Drag & Drop Sorting**: Reorder favorite songs in a playlist.
- 🎭 **Dark Mode**: Toggle between dark and light themes for better usability.
- 🔑 **Spotify Authentication**: Login via Spotify to access personalized playlists.

## 📂 Project Structure

```
📦 sound-trek-reactjs
├── 📂 src
│   ├── 📂 components         # UI Components (Header, SongList, FavoritePlaylist, etc.)
│   ├── 📂 services           # Spotify API authentication & data fetching
│   ├── App.css               # CSS files
│   ├── App.js                # Main app container
│   ├── index.js              # Entry point
├── 📜 .env                    # Environment variables (API keys)
├── 📜 README.md               # Documentation
├── 📜 package.json            # Dependencies and scripts
└── 📜 yarn.lock / package-lock.json  # Lock files
```

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **Spotify Web API** - Fetch song data & manage playlists
- **@dnd-kit** - Drag-and-drop functionality for favorite songs
- **Bootstrap** - UI styling
- **Reactstrap** - Modal & buttons
- **dotenv** - Environment variable management

## 🏗 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/Kiritokunnnnn/Sound-Trek.git
cd my-react-app
```

### 2️⃣ Install dependencies

```sh
npm install  # or yarn install
```

### 3️⃣ Set up environment variables

Create a `.env` file in the root directory and add your Spotify API keys:

```sh
REACT_APP_CLIENT_ID="your_spotify_client_id"
REACT_APP_CLIENT_SECRET="your_spotify_client_secret"
REACT_APP_REDIRECT_URI="http://localhost:3000/callback"
```

### 4️⃣ Start the development server

```sh
npm start  # or yarn start
```

## 📌 Usage

- **Login** with your Spotify account to access full features.
- **Search** for your favorite songs and preview them.
- **Save** songs to your favorite list and manage them.
- **Create playlists** and add songs directly to your Spotify account.
- **Toggle dark mode** for a better user experience.

## 🛠 Future Enhancements

- 🎶 **Mood-based Recommendations** - Suggest songs based on mood detection.
- 📱 **Chat Room - Let users interact with each other.**
- 🎭 **More Themes** - Add customizable themes.
- 🔊 **Full Song Playback** - Play full songs for premium users.

## 🤝 Contributing

Pull requests are welcome! If you find any issues or have ideas for improvements, please open an issue.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

🔥 **Enjoy your personalized music experience with Sound Trek!** 🎧

