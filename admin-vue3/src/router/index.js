import Team from '../views/team/index.vue';
import Player from '../views/player/index.vue';
import PlayerDetail from '../views/player/detail.vue';

import Layout from '../layout/index.vue';

// const routes = [
//   {
//     path: '/teams',
//     name: 'team',
//     component: Team,
//   },
//   {
//     path: '/players/:teamId',
//     name: 'player',
//     component: Player,
//   },
//   {
//     path: '/player/:playerId',
//     name: 'playerDetail',
//     component: PlayerDetail,
//   },
//   {
//     path: '/',
//     name: 'root',
//     redirect: '/teams'
//   },
// ]

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Layout
  },
  {
    path: '/teams',
    redirect: '/teams/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'teams',
        component: () => import('@views/team/index.vue'),
      }
    ]
  },
  // {
  //   path: '/teams',
  //   name: 'team',
  //   component: () => import('@views/team/index.vue'),
  // },
  {
    path: '/players/:teamId',
    name: 'player',
    component: () => import('@views/player/index.vue')
  },
  {
    path: '/player/:playerId',
    name: 'playerDetail',
    component: () => import('@views/player/detail.vue')
    ,
  },
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
];

export default routes;