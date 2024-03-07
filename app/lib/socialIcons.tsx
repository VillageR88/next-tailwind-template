import spotifyIcon from '@/public/assets/images/desktop/spotify.svg';
import applePodcast from '@/public/assets/images/desktop/apple-podcast.svg';
import googlePodcast from '@/public/assets/images/desktop/google-podcasts.svg';
import pocketCasts from '@/public/assets/images/desktop/pocket-casts.svg';

const socialIcons = [
  {
    name: 'spotify',
    src: spotifyIcon as string,
    alt: 'spotify icon',
  },
  {
    name: 'apple-podcast',
    src: applePodcast as string,
    alt: 'apple podcast icon',
  },
  {
    name: 'google-podcast',
    src: googlePodcast as string,
    alt: 'google podcast icon',
  },
  {
    name: 'pocket-casts',
    src: pocketCasts as string,
    alt: 'pocket casts icon',
  },
];

export default socialIcons;
