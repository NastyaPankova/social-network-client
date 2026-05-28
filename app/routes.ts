import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./routes/layout/layout.tsx', [
    index('./routes/home/home.tsx'),
    route('login', './routes/login/login.tsx'),
  ]),
] satisfies RouteConfig
