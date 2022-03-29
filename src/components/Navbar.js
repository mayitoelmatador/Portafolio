import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from "@material-ui/core";
import React, { useRef, useState } from "react";
import Logo from '../images/LogoEsteban.png';
import {Link, animateScroll as scroll} from 'react-scroll';
import  {BuildTwoTone, Cancel, ContactMailTwoTone, InfoTwoTone}  from "@material-ui/icons";
import { EmojiObjectsTwoTone } from "@material-ui/icons";
import { Menu } from "@material-ui/icons";


const Navbar = (props) => {
    const {title, id, dark} = props;
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const links = [
        {
            id: 'about',
            text: 'About Me',
            icon: <InfoTwoTone fontSize="large"/>,
        },
        {
            id: 'skills',
            text: 'Skills',
            icon: <EmojiObjectsTwoTone fontSize="large" className={classes.Light} />
        },
        {
            id: 'work',
            text: 'My Work',
            icon: <BuildTwoTone fontSize="large"/>
        },
        {
            id: 'contact',
            text: 'Get In Touch',
            icon: <ContactMailTwoTone fontSize="large"/>
        },
    ]

    return (
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={Logo} className={classes.logo} alt="Logo"/>
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index) => (
                            <Link key={index} 
                            to={id} 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            offset={-70} 
                            activeClass="active">{text}</Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={classes.menuButton} onClick={() => setOpen(!open)}>
                    <Menu fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <IconButton onClick={() => setOpen(false)} className={classes.cancelIcon}>
                <Cancel fontSize="large"/>
            </IconButton>
            <Divider />
            {
                links.map(({id, text, icon}, index) => (
                    <Link key={index} 
                        className={classes.sideBar}
                        to={id} 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        offset={-70}
                        activeClass="active">
                        <ListItem component="h5">
                            <span>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                            {text}
                            </span>
                        </ListItem>
                    </Link>
                ))
            }
        </Drawer>
        </>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: '75px',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        height: '10%',
        objectFit: 'contain',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        },
        '& a': {
            fontSize: '150%',
            fontWeight: 'bold',
            marginLeft: theme.spacing(4),
        },
        '& a:hover': {
            cursor: 'pointer',
            color: 'tomato',
            borderBottom: '3px solid tomato',
        },
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
            color: 'tomato',
            position: 'absolute',
            right: '10px',
        },
    },
    sideBar: {
        [theme.breakpoints.down("sm")]:{
            width: '60vw',
        },
        width: '40vw',
        '& h5': {
            margin: theme.spacing(10,0,0,4),
            fontSize: '20px',
            color: '#333',
            fontWeight: 'bold',
        },
        '& h5:hover': {
            color: 'tomato',
            cursor: 'pointer',
        },
    },
    cancelIcon: {
        color: 'tomato',
        position: 'absolute',
        right: 10,
    },
    Light: {
        color: '#ffcc00',
    },
  }));

export default Navbar;