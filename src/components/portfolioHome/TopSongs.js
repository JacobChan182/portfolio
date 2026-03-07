import React from 'react';
import './TopSongs.css';

// Add your tracks: imageUrl = artwork URL, spotifyUrl = link to track on Spotify, title = song name, artist = artist name
const TOP_SONGS = [
  { id: 1, rank: 1, title: 'The Devil In My Bloodstream', artist: 'The Wonder Years', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27324a61576bc9cea523dac7896', spotifyUrl: 'https://open.spotify.com/track/5PEq4Y2shmCEGTc6bVffnv?si=9321fc7d085c4487' },
  { id: 2, rank: 2, title: '"The Take\'s Over, The Break\'s Over"', artist: 'Fall Out Boy', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273da071ae7564949fbbfc6904d', spotifyUrl: 'https://open.spotify.com/track/3rG8ZkmKHb4Ms6CsSzEITv?si=c3c9ab4c16354a8b' },
  { id: 3, rank: 3, title: 'Disloyal Order of Water Buffaloes', artist: 'Fall Out Boy', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e4abb65045e2ed4384c7aece', spotifyUrl: 'https://open.spotify.com/track/4qg2rXtE20scfPhGvG5tqq?si=ebda79d1c51b431d' },
  { id: 4, rank: 4, title: 'Ghost On The Dance Floor', artist: 'blink-182', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739bce7409f1fd24101e611603', spotifyUrl: 'https://open.spotify.com/track/2qg7jm9wp4HM6CMcZxVYOC?si=62cc6576b20f4ea4' },
  { id: 5, rank: 5, title: 'Rough Landing, Holly', artist: 'Yellowcard', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2735c6f9b09bf2035d181e19aac', spotifyUrl: 'https://open.spotify.com/track/40S4RjkGS3DhYgTMy0aZvX?si=b184628d83e14c66' },
  { id: 6, rank: 6, title: 'Sonderland', artist: 'Neck Deep', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733a278953d20b499818ed7dae', spotifyUrl: 'https://open.spotify.com/track/04XjMCR9EiZeKIrR0LZcjq?si=62c0228b472147ae' },
  { id: 7, rank: 7, title: 'Aliens Exist', artist: 'blink-182', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2736da502e35a7a3e48de2b0f74', spotifyUrl: 'https://open.spotify.com/track/3nqm3DdVskqbHhmb8S8hMd?si=babb22e8118b4387' },
  { id: 8, rank: 8, title: 'Speak Of The Devil', artist: 'Sum 41', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273dad860cbc913cbd81a438b20', spotifyUrl: 'https://open.spotify.com/track/3zdg1IMqKog1YNRpTjKDOB?si=8ba99d46958d4432' },
  { id: 9, rank: 9, title: 'Title Fight', artist: 'Blitz Kids', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27391e1720b2821eade74750236', spotifyUrl: 'https://open.spotify.com/track/7rJUpC5nJzM0DCeg5OSktQ?si=dbea8462efbf4db8' },
  { id: 10, rank: 10, title: 'Viva Las Vengeance', artist: 'Panic! At The Disco', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273c6ca149d27c58bb9378b65f9', spotifyUrl: 'https://open.spotify.com/album/25DhBz5cckEAFcivcSzSTo?si=L9MPcLdgTO6jvTtQHoo78w' },
];

export default function TopSongs() {
  return (
    <div className="top-songs">
      <h1>The Chanboard Top 10</h1>
      <ol className="top-songs__list">
        {TOP_SONGS.map(({ id, rank, title, artist, imageUrl, spotifyUrl }) => (
          <li key={id} className="top-songs__item">
            <a
              className="top-songs__link"
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${rank}. ${title} by ${artist}`}
              title={`${title} – ${artist}`}
            >
              <span className="top-songs__rank" aria-hidden="true">{rank}</span>
              <span className="top-songs__art">
                {imageUrl ? (
                  <img src={imageUrl} alt="" className="top-songs__art-img" />
                ) : (
                  <span className="top-songs__art-placeholder">?</span>
                )}
              </span>
              <span className="top-songs__meta">
                <span className="top-songs__title">{title}</span>
                <span className="top-songs__artist">{artist}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
