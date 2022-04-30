import Ticketrr from './Ticketrr.mdx';
import News from './News.mdx';
import DevUtils from './DevUtils.mdx';
import {Project} from 'typings'

export const projectList: Project[] = [
  {
    title: 'Ticketrr',
    shortDescription: 'A basic helpdesk ticket system.',
    description: <Ticketrr/>,
    images: [
      'ticketrr/1.png',
      'ticketrr/2.png',
      'ticketrr/3.png',
      'ticketrr/4.png',
      'ticketrr/5.png',
      'ticketrr/6.png'
    ],
    githubRepo: 'https://github.com/dahyorr/ticket-system',
    liveUrl: 'https://ticketrr.dayo.dev',
    inProgress: false,
  },
  {
    title: 'News App',
    shortDescription: 'Stores and links to news articles retrived from hacker news API.',
    description: <News/>,
    images: [
      'news/1.png',
    ],
    githubRepo: 'https://github.com/dahyorr/News-App',
    liveUrl: 'https://news.dayo.dev',
    inProgress: false,
  },
  {
    title: 'DevUtils',
    shortDescription: 'A Collection of useful tools for developers.',
    description: <DevUtils/>,
    images: [
      'devutils/1.png',
      'devutils/2.png',
      'devutils/3.png',
      'devutils/4.png',
    ],
    githubRepo: 'https://github.com/dahyorr/DevUtils',
    liveUrl: 'https://devutils.dayo.dev',
    inProgress: true,
  },
]