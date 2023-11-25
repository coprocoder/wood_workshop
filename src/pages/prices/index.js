import React, { useEffect, useState } from 'react'
import {
  List, ListItem, ListItemText, Typography, Container, Chip, Stack, Box
} from '@mui/material'
import { priceConfig } from './priceConfig'
import FeedbackWidget from '../../components/feedback/feedbackWidget'
import './prices.scss'

const PriceGallery = () => {
  const [selectedGroup, setGroup] = useState()

  useEffect(() => {
    if (priceConfig.length) {
      setGroup(priceConfig[0])
    }
  }, [priceConfig.length])

  const handleClick = (group) => setGroup(group)

  return (
    <Container>
      <Typography variant='h3' gutterBottom>Цены</Typography>
      <Stack direction='row' spacing={1} pb={2}>
        {priceConfig.map((group, i) => (
          <Chip key={`price${i}`} label={group.groupName}
                variant={group.groupName === selectedGroup?.groupName ? 'filled' : 'outlined'}
                onClick={() => handleClick(group)} />
        ))}
      </Stack>
      <Box className={'pricelist'}>
        <Box>
          <List sx={{ flex: 1, width: '100%', bgcolor: 'background.paper', borderRadius: 2, padding: 4, minWidth: 500 }}>
            <Typography variant={'h5'} sx={{ marginBottom: 2 }}>{selectedGroup?.groupName}</Typography>
            {selectedGroup?.itemList.map((item) => (
              <ListItem key={item.title} disableGutters
                        sx={{ paddingY: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                <ListItemText primary={item.title} />
                <Typography sx={{ fontWeight: 'bold' }}>{item.price}</Typography>
              </ListItem>)
            )}
          </List>
          <div>
            <p>С полным прейскурантом на услуги стоматологии вы можете ознакомиться <a
              href='https://drive.google.com/file/d/14LhuXEVgGx7UCoNu9Krt65MzSy7kxB66/view?usp=share_link'
              target='_blank' rel='noreferrer'>по ссылке.</a></p>
            <p>Цены на сайте не являются публичной офертой.</p>
            <p>Составление точного плана лечения с указанием стоимости услуг требует очной консультаций с лечащим
              врачом и проведения диагностики.</p>
          </div>
        </Box>
        <Box>
          <FeedbackWidget sx={{ minWidth: 300 }} />
        </Box>
      </Box>
    </Container>
  )
}

export default PriceGallery
