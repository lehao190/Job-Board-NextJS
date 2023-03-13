import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useRouter } from 'next/navigation';

type Props = {}

export default function Job({}: Props) {
  const router = useRouter();

  return (
    <Card onClick={() => router.push('/login')} sx={{ maxWidth: 345, margin: '30px auto' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
