import React from 'react'
import MyCard from './Card'
import { Box } from '@mui/material'

function Render({list}) {
  return (
    <Box 
        display="grid"
        gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
        gap="60px"
        justifyContent="center"
        padding="40px"
    >
        {list.map((person, index) => (
          <MyCard key={index} person={person}/>
        ))}
    </Box>
  )
}

export default Render
