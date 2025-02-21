import React, { Component } from "react";
import { loginUrl } from "../services/spotifyAuth";

class Login extends Component {
  render() {
    const { token, user, handleLogout, toggleModal, addSongsToPlaylist } = this.props;

    return (
      <div>
        {!token ? (
          <a href={loginUrl} className="spotify-login-btn">
            Login <i className="fa-solid fa-right-to-bracket"></i>
          </a>
        ) : (
          <div className="user-info">
            <p className="hi-user">👋 Welcome, {user?.display_name}</p>
            <button onClick={handleLogout}><i class="fas fa-sign-out-alt"></i></button>

            {/* 🎶 Nút tạo playlist mới */}
            <button className="create-playlist-btn" onClick={toggleModal}>
              🎶 Create new Playlist
            </button>

            {/* ➕ Nút thêm bài hát vào playlist */}
            <button className="add-to-playlist-btn" onClick={addSongsToPlaylist}>
              ➕ Add songs into Playlist
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
