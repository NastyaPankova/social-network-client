import { Outlet } from 'react-router'
import { Box, Container, CssBaseline } from '@mui/material'
import ButtonAppBar from '~/layout/components/AppBar'
import boxStyles from '~/styles/boxes.module.scss'
import containerStyles from '~/styles/containers.module.scss'
import Toolbar from '@mui/material/Toolbar'

export function CommonLayoutPage() {
  return (
    <Box className={boxStyles.mainBox}>
      <CssBaseline />
      <Box component="header">
        <ButtonAppBar />
      </Box>
      <Toolbar disableGutters />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 0,
          pb: 2,
        }}
      >
        <Container maxWidth={false} className={containerStyles.mainContainer}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
