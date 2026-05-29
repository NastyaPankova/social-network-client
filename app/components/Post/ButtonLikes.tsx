//import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Button from '@mui/material/Button'

export function ButtonLikes() {
  //todo выбрать один из return
  /*return (
    <IconButton aria-label="like">
      <FavoriteIcon />
    </IconButton>
  )*/
  return (
    <Button variant="contained" endIcon={<FavoriteIcon />}>
      Like
    </Button>
  )
}
