/**
 * "My Rotation": the owner's six Spotify tracks, in the owner's order.
 *
 * Title, artist and artwork were checked against Spotify's public pages (oEmbed and the embed page).
 * Artwork is Spotify's own cover URL. The site hosts no audio and plays nothing: every track
 * links out to Spotify. Re-verify metadata if a track is changed or removed.
 */
export interface Track {
  /** Spotify track ID (the part after /track/ in the share link). */
  spotifyId: string;
  title: string;
  artist: string;
  /** Spotify CDN cover image URL. Shown only when present; otherwise a neutral placeholder is used. */
  artwork?: string;
}

export const tracks: Track[] = [
  {
    spotifyId: '4vP2Y2WVTCKeQjyJUmIfwl',
    title: 'Colddd',
    artist: 'sauku',
    artwork: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025b6d84737fbc6a51b3e9d8ed',
  },
  {
    spotifyId: '3ctwglyi5wn9Okd1h1ZkPT',
    title: 'Ps Core',
    artist: 'MZNK',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0244a48cec5ac64ace11f02ba4',
  },
  {
    spotifyId: '6DSR0HsTfpDlkJm7vEmLIr',
    title: 'i dont deserve to live',
    artist: 'skinpeelr',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e026546b211f7eb77ebf87f2746',
  },
  {
    spotifyId: '3I32SxStmqEZORu2Q4phUO',
    title: 'Blazing in the Dark',
    artist: 'GnB Chili, Kate Havnevik',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02c2700c8ed5b301f01535ed18',
  },
  {
    spotifyId: '0HEb8h395qcvn2KGZy3KFn',
    title: '_+<(>_<)>+_===**++++++++__[--_>>>>>]}}}',
    artist: 'snafu',
    artwork: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02172ec527f0022eae74bd7e99',
  },
  {
    spotifyId: '3Ksyal4c4OD5g69t52Sc4e',
    title: 'Lolibox',
    artist: 'Sewerslvt',
    artwork: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d106ecae087e3ab2f1d6f9ca',
  },
];

/** Canonical Spotify link for a track. */
export const trackUrl = (spotifyId: string) => `https://open.spotify.com/track/${spotifyId}`;
