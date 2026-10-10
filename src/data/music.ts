/**
 * Music player configuration.
 *
 * Ships with NO tracks. Add only audio you have the rights to use.
 *   1. Put the audio file under public/audio/ (and optional cover art under public/audio/covers/).
 *   2. Add an entry to `tracks` below. Paths are site-root paths.
 *
 * Playback starts only after a visitor presses play. Nothing autoplays, and audio is not
 * preloaded until the first press.
 */
export interface Track {
  id: string;
  title: string;
  artist: string;
  src: string;
  /** Optional square cover art. When omitted, a neutral placeholder is shown. */
  cover?: string;
}

export const tracks: Track[] = [];

export const musicSettings = {
  /** Volume 0–1. */
  volume: 0.3,
  /** A single track loops. With several tracks, playback advances and wraps around. */
  loopTrack: true,
} as const;
