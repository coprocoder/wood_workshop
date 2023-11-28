import React from 'react'
import YandexMap from '../../components/map/map'
import HomeIntro from '../../pages/home/intro'
import { Container, Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import './contacts.scss'

const Contacts = () => {
  return (
    <Container>
      <Typography variant='h3' gutterBottom mt={3}>Контакты</Typography>
      <Box className={'contacts'}>
        <Box sx={{ bgcolor: 'divider', borderRadius: 2, padding: 4 }}>
          <Typography variant={'h5'} sx={{ marginBottom: 1 }}>{'Контакты'}</Typography>
          <List sx={{flex: 1}}>
            <ListItem disableGutters sx={{ paddingY: 1 }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Телефон:</Typography>
              <Typography>890998890</Typography>
            </ListItem>
            <ListItem disableGutters sx={{ paddingY: 1 }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Адрес:</Typography>
              <Typography>г.Красноярск, ул.Горького,24</Typography>
            </ListItem>
            <ListItem disableGutters sx={{ paddingY: 1 }}>
              <Typography sx={{ fontWeight: 'bold', mr: 1 }}>Режим работы:</Typography>
              <Typography>пн.-пт. с 9:00 до 22:00, ср., сб. с 10:00 до 16:00. Вск. выходной</Typography>
            </ListItem>
          </List>
        </Box>
        <YandexMap sx={{ minHeight: 300 }} />
      </Box>
    </Container>
  )
}

export default Contacts
