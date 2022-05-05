import React from 'react';
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

export const Preview = () => {
    return (
        <Box>
            <Card sx={{
                width: 'fit-content',
                display: 'flex'
            }}>
                <CardMedia  sx={{
                    mindWidth: '80px',
                    maxWidth: '110px'
                }}
                    component="img"
                    image="https://picsum.photos/40"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h5" color="primary" sx={{maxWidth: '20ch', minWidth: '15ch'}}>
                        This is basically the title of the preview
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}
