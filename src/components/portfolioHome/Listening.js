import React from 'react';
import './Listening.css';

// Add your albums: imageUrl = album art URL, spotifyUrl = link to album/playlist on Spotify, label = name (for alt text)
const ALBUMS = [
  { id: 1, label: 'Lights And Sounds', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2735c6f9b09bf2035d181e19aac', spotifyUrl: 'https://open.spotify.com/album/5EaEOUs3O1MZRicDMUIuqo' },
  { id: 2, label: 'Folie A Deux', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e4abb65045e2ed4384c7aece', spotifyUrl: 'https://open.spotify.com/album/6AmuGOkEFSs89fP2MG8xLL' },
  { id: 3, label: 'Infinity On High', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273da071ae7564949fbbfc6904d', spotifyUrl: 'https://open.spotify.com/album/0hHopYqXhuvYSHtVyrcb1g' },
  { id: 4, label: 'The Greatest Generation', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27324a61576bc9cea523dac7896', spotifyUrl: 'https://open.spotify.com/album/7q9crgUsEy4Clq2B77ijN9' },
  { id: 5, label: 'Enema Of The State', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2736da502e35a7a3e48de2b0f74', spotifyUrl: 'https://open.spotify.com/album/652N05EcNH1a4bIlUixQE2' },
  { id: 6, label: 'Take Off Your Pants And Jacket', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27354a8f4f9158546472fbb7280', spotifyUrl: 'https://open.spotify.com/album/3nHpBmW5wJXGeC3ojBkpey' },
  { id: 7, label: 'All Distortions Are Intentional', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2733a278953d20b499818ed7dae', spotifyUrl: 'https://open.spotify.com/album/3fM2J0ilTBGwnzcN3SqUcG' },
  { id: 8, label: 'Underclass Hero', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273dad860cbc913cbd81a438b20', spotifyUrl: 'https://open.spotify.com/album/5d7wvjlsCpHxMLC6Xl0tEL' },
  { id: 9, label: 'The Good Youth', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27391e1720b2821eade74750236 ', spotifyUrl: 'https://open.spotify.com/album/5Lk8e5P5frbrvJbmxmn9NU' },
  { id: 10, label: 'Say It Like You Mean It', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27339fedf61abad94ee76ff6a7f', spotifyUrl: 'https://open.spotify.com/album/72ogyoH8DeqTMLYhFwgVx6' },
];

export default function Listening() {
  return (
    <div className="listening">
      <h1>The Chanboard Album 10</h1>
      <div className="listening__grid">
        {ALBUMS.map(({ id, label, imageUrl, spotifyUrl }) => (
          <a
            key={id}
            className="listening__cover"
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={label}
                className="listening__cover-img"
              />
            ) : (
              <span className="listening__cover-placeholder">{label}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
