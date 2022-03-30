import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import Foto from '../images/FotoEsteban.jpeg';
import TypeWriterEffect from 'react-typewriter-effect';
import CV from '../images/Hoja de vida Esteban Muñoz.pdf';

const About = (props) => {
    const {title, id, dark} = props;
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h4" style={{ fontStyle: 'italic' }}>{title}</Typography>
                <Card className={classes.Card}>
                    <CardMedia image={Foto} className={classes.cardMedia} title="picture"/>
                    <Grid item xs={7} lg={7}>
                        <CardContent className={classes.cardContent}>
                            <TypeWriterEffect 
                            text="¡Hola! mi nombre es Esteban Muñoz."
                            textStyle={{ fontSize: '2rem', fontWeight: '700px', color: 'tomato' }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={50}
                            />
                            <TypeWriterEffect 
                            text="Tengo 24 años, vivo en la ciudad de Bogotá - Colombia, estudio Ingienieria de Sistemas y Computacion en la Universidad Católica de Colombia."
                            textStyle={{ fontSize: '1rem', fontWeight: '700px', color: 'black' }}
                            startDelay={2500}
                            cursorColor="black"
                            typeSpeed={50}
                            />
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" className={classes.pdfButton}>
                                <a href={CV} download>
                                Download CV
                                </a>
                            </Button>
                        </CardActions>
                    </Grid>
                </Card>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: '100vh',
    },
    sectionDark: {
        backgroundColor: "#333",
        color: "#FFF",
    },
    sectionContent: {
        maxWidth: '80%',
        margin: '0 auto',
    },
    Card: {
        height: '70vh',
        display: 'flex',
        marginTop: theme.spacing(6),
        position: 'relative',
    },
    cardMedia: {
        width: '500px',
        height: 'auto',
        objectFit: 'cover',
        borderRadius: '10px',
        margin: theme.spacing(5),
    },
    pdfButton:{
        position: 'absolute',
        bottom: '3rem',
        right: '4rem',
        [theme.breakpoints.down("sm")]:{
            bottom: 40,
            right: '1rem',
        },
        backgroundColor: 'tomato',
        padding: theme.spacing(3),
        '&:hover': {
            backgroundColor: '#c0c0c0',
        },
        "& a": {
            color: '#FFF',
            textDecoration: 'none',
            fontWeight: 900,
        },
        "& a:hover": {
            color: 'tomato',
        },
    },
    cardContent: {
        marginTop: theme.spacing(2),
    },
}));

export default About;