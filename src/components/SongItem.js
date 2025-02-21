import React, {Component} from "react"

class SongItem extends Component{
    render(){
        const{song, playingSongId= "", togglePlay, saveToFavorites, savedSongs } = this.props;
        
        if (!song || !song.album || !song.album.images || song.album.images.length === 0) {
            return null; // Tránh lỗi nếu thiếu dữ liệu
          }

          return (
            <li key={song.id} className="song-item">
              <img src={song.album.images[0].url} alt={song.name} />
              <p>{song.name} - {song.artists[0].name}</p>

              {/* 🎼 Chỉ hiển thị iframe nếu bài hát đang phát */}
              {playingSongId === song.id && (
                
                  <iframe
                    src={`https://open.spotify.com/embed/track/${song.id}`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="encrypted-media"
                    style={{ marginTop: "5px", borderRadius: "10px" }}
                  ></iframe>
                
                )}

              {/* 🎵 Nút mở Spotify */}
              <a
                href={`https://open.spotify.com/track/${song.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-link"
              >
                🎵 Open on Spotify
              </a>

              {/* 🎧 Nút nghe thử */}
              <button className="listen-btn" onClick={() => togglePlay(song.id)}>
                {playingSongId === song.id ? "⏹ Pause" : "🎧 Preview"}
              </button>

              {/* ❤️ Nút lưu vào Playlist */}
              <button
                className={`fav-btn ${savedSongs[song.id] ? "saved" : ""}`}
                onClick={() => saveToFavorites(song)}
              >
                {savedSongs[song.id] ? "✔ Saved" : "❤️ Save to Playlist"}
              </button>
              
              


            </li>
          );
    }
}

export default SongItem;