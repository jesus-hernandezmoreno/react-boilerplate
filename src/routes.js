/* Views */
import Home from './Views/Home';
import Blog from 'Views/Blog';
import Docs from 'Views/Docs';
import Community from 'Views/Community';

const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: 'fa fa-home',
    component: Home,
    role: 'USER'
  },
  {
    path: '/blog',
    name: 'Blog',
    icon: 'fa fa-blog',
    component: Blog,
    role: 'USER'
  },
  {
    path: '/docs',
    name: 'Docs',
    icon: 'fa fa-file-alt',
    component: Docs,
    role: 'USER'
  },
  {
    path: '/community',
    name: 'Community',
    icon: 'fa fa-users',
    component: Community,
    role: 'USER'
  }
];

export default routes;
