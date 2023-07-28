/* eslint-disable no-useless-escape */

import { ReactComponent as GitHubLogo } from './assets/images/icon-github.svg';
import { ReactComponent as YouTubeLogo } from './assets/images/icon-youtube.svg';
import { ReactComponent as TwitterLogo } from './assets/images/icon-twitter.svg';
import { ReactComponent as LinkedInLogo } from './assets/images/icon-linkedin.svg';
import { ReactComponent as FacebookLogo } from './assets/images/icon-facebook.svg';
import { ReactComponent as FrontendMentorLogo } from './assets/images/icon-frontend-mentor.svg';
import { ReactComponent as TwitchLogo } from './assets/images/icon-twitch.svg';
import { ReactComponent as DevtoLogo } from './assets/images/icon-devto.svg';
import { ReactComponent as CodewarsLogo } from './assets/images/icon-codewars.svg';
import { ReactComponent as CodepenLogo } from './assets/images/icon-codepen.svg';
import { ReactComponent as FreeCodeCampLogo } from './assets/images/icon-freecodecamp.svg';
import { ReactComponent as GitLabLogo } from './assets/images/icon-gitlab.svg';
import { ReactComponent as HashNodeLogo } from './assets/images/icon-hashnode.svg';
import { ReactComponent as StackOverflowLogo } from './assets/images/icon-stack-overflow.svg';

export const LINK_SITES = {
  github: {
    name: "GitHub",
    placeholderUrl: "https://www.github.com/johnappleseed",
    logo: GitHubLogo,
    color: "hsl(0, 0%, 10%)",
    validation: /https:\/\/www\.github\.com\/[\w\-]*/
  },
  youtube: {
    name: "YouTube",
    placeholderUrl: "https://www.youtube.com/johnappleseed",
    logo: YouTubeLogo,
    color: "hsl(0, 84%, 58%)",
    validation: /https:\/\/www\.youtube\.com\/[\w\-]*/
  },
  twitter: {
    name: "Twitter",
    placeholderUrl: "https://www.twitter.com/johnappleseed",
    logo: TwitterLogo,
    color: "hsl(198, 79%, 59%)",
    validation: /https:\/\/www\.twitter\.com\/[\w\-]*/
  },
  linkdIn: {
    name: "LinkedIn",
    placeholderUrl: "https://www.linkedin.com/johnappleseed",
    logo: LinkedInLogo,
    color: "hsl(223, 100%, 59%)",
    validation: /https:\/\/www\.linkedin\.com\/[\w\-]*/
  },
  facebook: {
    name: "Facebook",
    placeholderUrl: "https://www.facebook.com/johnappleseed",
    logo: FacebookLogo,
    color: "hsl(227, 66%, 41%)",
    validation: /https:\/\/www\.facebook\.com\/[\w\-]*/
  },
  frontendMentor: {
    name: "Frontend Mentor",
    placeholderUrl: "https://www.frontendmentor.io/johnappleseed",
    logo: FrontendMentorLogo,
    color: "hsl(0, 0%, 100%)",
    validation: /https:\/\/www\.frontendmentor\.io\/[\w\-]*/
  },
  twitch: {
    name: "Twitch",
    placeholderUrl: "https://www.twitch.tv/johnappleseed",
    logo: TwitchLogo,
    color: "hsl(313, 84%, 59%)",
    validation: /https:\/\/www\.twitch\.tv\/[\w\-]*/
  },
  devto: {
    name: "Dev.to",
    placeholderUrl: "https://dev.to/johnappleseed",
    logo: DevtoLogo,
    color: "hsl(0, 0%, 20%)",
    validation: /https:\/\/www\.dev\.to\/[\w\-]*/
  },
  codewars: {
    name: "Codewars",
    placeholderUrl: "https://www.codewars.com/users/johnappleseed",
    logo: CodewarsLogo,
    color: "hsl(331, 68%, 32%)",
    validation: /https:\/\/www\.codewars\.com\/users\/[\w\-]*/
  },
  codepen: {
    name: "Codepen",
    placeholderUrl: "https://codepen.io/johnappleseed",
    logo: CodepenLogo,
    color: "hsl(145, 68%, 32%)",
    validation: /https:\/\/www\.codepen\.io\/[\w\-]*/
  },
  freeCodeCamp: {
    name: "freeCodeCamp",
    placeholderUrl: "https://www.freecodecamp.org/johnappleseed",
    logo: FreeCodeCampLogo,
    color: "hsl(252, 50%, 27%)",
    validation: /https:\/\/www\.freecodecamp\.org\/[\w\-]*/
  },
  gitLab: {
    name: "GitLab",
    placeholderUrl: "https://gitlab.com/johnappleseed",
    logo: GitLabLogo,
    color: "hsl(11, 83%, 53%)",
    validation: /https:\/\/www\.gitlab\.com\/[\w\-]*/
  },
  hashnode: {
    name: "Hashnode",
    placeholderUrl: "https://hashnode.com/@johnappleseed",
    logo: HashNodeLogo,
    color: "hsl(227, 98%, 42%)",
    validation: /https:\/\/www\.hashnode\.com\/@[\w\-]*/
  },
  stackOverflow: {
    name: "Stack Overflow",
    placeholderUrl: "https://stackoverflow.com/users/1234/johnappleseed",
    logo: StackOverflowLogo,
    color: "hsl(29, 100%, 46%)",
    validation: /https:\/\/www\.stackoverflow\.com\/users\/\d+\/[\w\-]*/
  },
}