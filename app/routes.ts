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
    //route('auth', './auth/auth.tsx'),
    layout('./app/protection/protected.tsx', [
      route('secret', './routes/secret/secret.tsx'),
    ]),
  ]),
] satisfies RouteConfig
