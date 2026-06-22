import React, { type ReactNode } from 'react'
import { Container, Stack, Box, Typography, Divider } from '@mui/material'
import styles from '~/styles/containers.module.scss'
import stylesTypography from '~/styles/typography.module.scss' // Предполагаю, что файл называется так

interface FormContainerParams {
  title: string
  children: ReactNode
}

export function FormContainer({ title, children }: FormContainerParams) {
  return (
    <Container maxWidth="xs" className={styles.loginContainer}>
      <form noValidate autoComplete="off">
        <Stack spacing={3}>
          {/* Блок заголовка */}
          <Box>
            {/* Используем компонент="div", чтобы ваш SCSS-класс .typographyForm точно сработал */}
            <Typography
              component="div"
              className={stylesTypography.typographyForm}
            >
              {title}
            </Typography>
            <Divider />
          </Box>

          {/* Здесь будут рендериться поля и кнопки конкретной формы */}
          {children}
        </Stack>
      </form>
    </Container>
  )
}
