import Avatar from '@mui/material/Avatar'
import * as React from 'react'

export function AvatarLetter({ name }: { name?: string }) {
  function stringAvatar(name: string) {
    const cleanName = name.trim()
    if (!cleanName) {
      return {
        sx: { bgcolor: 'rgb(204,234,255)', color: '#051e34' },
        children: 'N',
      }
    }
    const words = cleanName.split(/\s+/)
    const firstLetter = words[0]?.[0] || ''
    const secondLetter = words[1]?.[0] || ''
    return {
      sx: { bgcolor: 'rgb(204,234,255)', color: '#051e34' },
      children: `${firstLetter}${secondLetter}`.toUpperCase(),
    }
  }
  return <Avatar {...stringAvatar(name || '')} />
}
