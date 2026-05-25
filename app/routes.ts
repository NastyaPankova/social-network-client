import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./app/layout.tsx', [
    index('./routes/home.tsx'),
    route('login', './routes/login.tsx', [route('log2', './routes/log2.tsx')]),
  ]),
] satisfies RouteConfig
//lh/login(outlet)/log2/
