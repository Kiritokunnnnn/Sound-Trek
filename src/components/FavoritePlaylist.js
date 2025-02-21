import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


const SortableItem = ({ song, removeFromFavorites }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: song.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners} className="song-item">
      <img src={song.album.images[0].url} alt={song.name} />
      <p>{song.name} - {song.artists[0].name}</p>
      <a href={`https://open.spotify.com/track/${song.id}`} target="_blank" rel="noopener noreferrer" className="spotify-btn">
        🎵 Open on Spotify
      </a>
      <button className="remove-btn" onClick={() => removeFromFavorites(song.id)}>🗑 Remove from Playlist</button>
    </li>
  );
};

const FavoritePlaylist = ({ songs, setSongs, removeFromFavorites }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = songs.findIndex((s) => s.id === active.id);
    const newIndex = songs.findIndex((s) => s.id === over.id);

    const updatedSongs = [...songs];
    const [movedSong] = updatedSongs.splice(oldIndex, 1);
    updatedSongs.splice(newIndex, 0, movedSong);

    setSongs(updatedSongs);
    localStorage.setItem("favorites", JSON.stringify(updatedSongs));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={songs.map((s) => s.id)} strategy={verticalListSortingStrategy}>
        <ul className="song-list">
          {songs.map((song) => (
            <SortableItem key={song.id} song={song} removeFromFavorites={removeFromFavorites} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};

export default FavoritePlaylist;
