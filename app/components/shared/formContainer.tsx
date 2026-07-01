import React, { type ReactNode } from 'react'
import { Container, Stack, Box, Typography, Divider } from '@mui/material'
import styles from '~/styles/containers.module.scss'
import stylesTypography from '~/styles/typography.module.scss'

interface FormContainerParams {
  title: string
  children: ReactNode
}

export function FormContainer({ title, children }: FormContainerParams) {
  return (
    <Container maxWidth="xs" className={styles.loginContainer}>
      <form noValidate autoComplete="off">
        <Stack spacing={3}>

          <Box>

            <Typography
              component="div"
              className={stylesTypography.typographyForm}
            >
              {title}
            </Typography>
            <Divider />
          </Box>


          {children}
        </Stack>
      </form>
    </Container>
  )
}
