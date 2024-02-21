import SocialMedia from './enumSocialMedia';

interface Link {
  link(link: any): unknown;
  id: number;
  title: SocialMedia;
  url: string;
}

export default Link;
