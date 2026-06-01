import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PetsIcon from '@mui/icons-material/Pets'

export default function PostMUIFeed({
  title,
  date,
  content,
  author,
}: postInterfaceMUI) {
  return (
    <Card sx={{ maxWidth: '70%', width: 500, mx: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar>
            <PetsIcon color="primary" />
          </Avatar>
        }
        /*action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }*/
        title={author}
        subheader={date}
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
