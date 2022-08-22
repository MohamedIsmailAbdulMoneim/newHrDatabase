import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({content}) {
  return (
    <Card sx={{  height: 75 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, margin: '0 auto', fontFamily: "'Tajawal', sans-serif" }} color="text.secondary" gutterBottom>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
