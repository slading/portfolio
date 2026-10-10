/**
 * "My Rotation": the single track shown in the Hero.
 *
 * Title and artist are exact. Artwork is Spotify's own cover URL, checked against Spotify's public
 * oEmbed. It is only an image: nothing plays from Spotify. The audio is the owner's own file at
 * public/music/track.mp3. The player appears only when that file exists at build time.
 * An owner-supplied public/music/cover.jpg, if present, is used in preference to Spotify's artwork.
 */
export interface Track {
  /** Spotify track ID (the part after /track/ in the share link). */
  spotifyId: string;
  title: string;
  artist: string;
  /** Spotify CDN cover image URL. A neutral placeholder is shown if it cannot load. */
  artwork?: string;
}

export const track: Track = {
  spotifyId: '3Ksyal4c4OD5g69t52Sc4e',
  title: 'Lolibox',
  artist: 'Sewerslvt',
  artwork: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d106ecae087e3ab2f1d6f9ca',
};

/** Audio file, relative to public/. */
export const audioFile = 'music/track.mp3';

/** Optional owner-supplied cover, relative to public/. Preferred over Spotify artwork when present. */
export const coverFile = 'music/cover.jpg';

/** Canonical Spotify link for a track. */
export const trackUrl = (spotifyId: string) => `https://open.spotify.com/track/${spotifyId}`;
