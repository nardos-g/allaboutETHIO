import React, { useState } from "react";

import Typography from '@mui/material/Typography'
import  Box  from "@mui/material/Box";
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

export const Hero = () => {

    const [anchor, setAnchor] = useState(null)
    const open = Boolean(anchor)

    const handleClick = (e) => {
        setAnchor(e.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null)
    }

    return(
        <Box sx={{
            
        }}>
            <Box
                sx={{
                    backgroundColor: 'gray'
                }}
            >
                <Facebook />
                <YouTube />
                <Twitter />
            
            </Box>

            <Box
                sx={{
                    backgroundColor: 'gold'
                }}
            >
                <Typography variant="h1" color="initial" sx={{font: 'bolder', textAlign: 'center'}}>
                    allaboutETHIO
                </Typography>
                <Typography variant="body2" color="initial" sx={{textAlign: 'center', marginBottom: '30px'}}>
                    Ethiopias First and Largest blog network
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        HOME
                    </Button>
                    <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        ETHIOPIA TOPICS
                    </Button>
                    <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        BLOG
                    </Button>
                    <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        DIRECTORY
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        LIVE TV
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        RADIO
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        MOVIES
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        BOOKS
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        POLICY
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        ABOUT
                    </Button>
                     <Button
                        id="basic-button"
                        onMouseOver={handleClick}
                    >
                        CONTACT
                    </Button>
                </Box>

                <Menu id="basic-menu" anchorEl={anchor} open={open} keepMounted onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
                  <MenuItem onClick={handleClose}>check 1</MenuItem>
                  <MenuItem onClick={handleClose}>check 2</MenuItem>
                  <MenuItem onClick={handleClose}>check 3</MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}