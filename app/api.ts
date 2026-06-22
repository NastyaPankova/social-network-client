import axios from 'axios'
import { history } from './history'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const response = await axios.post(
          'http://localhost:3000/auth/refresh',
          {},
          { withCredentials: true }
        )

        const { accessToken } = response.data
        localStorage.setItem('token', accessToken)

        originalRequest.headers.Authorization = `Bearer ${accessToken}`

        return api(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('token')
        // Получаем текущий относительный путь (например, '/dashboard' или '/profile/settings')
        const currentPath = window.location.pathname + window.location.search
        if (history.navigate) {
          // Передаем объект location state точно так же, как это делается через <Navigate />
          history.navigate('/login', {
            state: { from: { pathname: currentPath } },
          })
        } else {
          // Фолбек, если роутер еще не инициализировался
          window.location.href = `/login?from=${encodeURIComponent(currentPath)}`
        }
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)

export default api
