import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'
//TODO исправить index
export default [
  layout('./routes/layout/layout.tsx', [
    //index('./routes/home/home.tsx'),
    index('./routes/feed/feed.tsx'),
    route('login', './routes/login/login.tsx'),
    route('registration', './routes/registration/registration.tsx'),
    //route('feed', './routes/feed/feed.tsx'),
  ]),
] satisfies RouteConfig
