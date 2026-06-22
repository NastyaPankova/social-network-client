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
      {/*//todo */}
      {/*связка ButtonAppBar, затем Toolbar*/}
      {/*формируют компонент, который позволяет*/}
      {/*скроллить элементы ровно под шапку*/}
      {/*элементы всегда имеют нужную высоту*/}
      {/*комментарий от ИИ*/}
      {/*Компонент <ButtonAppBar /> внутри имеет AppBar position="fixed", */}
      {/*поэтому он не занимает места в документе.*/}
      {/*Идущий следом пустой <Toolbar disableGutters /> */}
      {/*имеет точно такую же высоту, как и Toolbar внутри шапки.*/}
      {/*Этот пустой Toolbar резервирует место сверху,*/}
      {/*толкая компонент <Box component="main"> вниз. */}
      {/*В итоге контент из <Outlet /> не заезжает под шапку. */}
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
