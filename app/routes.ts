import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'
//TODO исправить index
export default [
  layout('./routes/layout/layout.tsx', [
    index('./routes/feed/feed.tsx'),
    route('login', './routes/login/login.tsx'),
    route('registration', './routes/registration/registration.tsx'),
    layout('./protection/protected.tsx', [
      route('profile/:id', './routes/profile/profile.tsx'),
    ]),
  ]),
] satisfies RouteConfig
