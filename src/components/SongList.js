import SongItem from "./SongItem";
import React, {Component} from "react";

class SongList extends Component{
    render(){
        const {songs, playingSongId, togglePlay, saveToFavorites, savedSongs}=this.props;

        return(
            <ul className="song-list">
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            playingSongId={playingSongId}
            togglePlay={togglePlay}
            saveToFavorites={saveToFavorites}
            savedSongs={savedSongs}
          />
        ))}
      </ul>
        )
    }
}
export default SongList;