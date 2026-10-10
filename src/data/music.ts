/**
 * Music player configuration.
 *
 * The player is wired up but ships with NO tracks: the original site pointed at
 * /audio/music.mp3, which was never committed. To enable playback:
 *   1. Put a file you have the rights to use under public/audio/.
 *   2. Add an entry below. `src` is a site-root path.
 *
 * Browsers only allow audio to start after a user gesture, so the player never
 * autoplays. Audio is not preloaded until the first play press.
 */
export interface Track {
  id: string;
  title: string;
  src: string;
}

export const tracks: Track[] = [];

export const musicSettings = {
  /** Volume 0–1. The original site used 0.3. */
  volume: 0.3,
  /**
   * A single track loops. With several tracks, playback advances to the next
   * one when a track ends and wraps around at the end of the list.
   */
  loopTrack: true,
} as const;
