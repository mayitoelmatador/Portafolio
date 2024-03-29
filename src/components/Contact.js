import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Contact = (props) => {
    const {title, id, dark} = props;
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3" style={{ fontStyle: 'italic' }}>{title}</Typography>
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
}));

export default Contact;