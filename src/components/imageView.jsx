import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, Card, CardContent, CardHeader, ImageList, ImageListItem } from '@mui/material'


export const ImageView = () => {
    return(
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={300}>

                <ImageListItem
                    sx={{
                        position: 'relative',
                    }}
                >
                    <img height={200} width={200} backgroundColor={'gray'} sx={{
                        height: '200px',
                        width: '200px',
                        backgroundColor: 'gray' 
                    }}
                        src='https://picsum.photos/50'
                        srcSet={`https://picsum.photos/50`}
                        alt='ImageView'
                        loading="lazy"
                    />

                    <Box sx={{
                        position: 'absolute',
                        marginLeft: '50%',
                        transform: 'translateX(50%)',
                        marginTop: '50%',
                        transform: 'translateY(-50%)'
                    }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '30px'
                                }}
                            >
                                <Button variant="contained" color="primary">
                                Category
                                </Button>

                                <Typography variant="body2" color="initial">
                                    Date
                                </Typography>
                                <Typography variant="body2" color="initial">
                                    Comments (or Reads)
                                </Typography>
                            </Box>
                        <Typography variant='h6' sx={{textWrap: 'true'}}>
                            Here goes the title of the blog
                        </Typography>
                    </Box>

                </ImageListItem>
                
        </ImageList>
    )
}
