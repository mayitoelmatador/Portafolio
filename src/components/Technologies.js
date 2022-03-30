import { makeStyles, Paper, Typography } from '@material-ui/core';
import { TimelineItem, TimelineOppositeContent, TimelineSeparator, Timeline, TimelineConnector, TimelineDot, TimelineContent } from '@material-ui/lab';
import React from 'react';
import LogoCplusplus from '../images/LogoC++.png';
import LogoHtml from '../images/LogoHtml.png';
import LogoCss from '../images/LogoCss.png';
import LogoJavascript from '../images/LogoJavascript.png';
import LogoReact from '../images/LogoReact.png';
import LogoRedux from '../images/LogoRedux.jpg';
import LogoNet from '../images/LogoCsharp.png';
import StarRating from './StarRating';

const Technologies = () => {
    const classes = useStyles();
    const skills = [
        {
            year: "2010",
            src: LogoCplusplus,
            title: 'C++ Logic',
            stars: 4,
        },
        {
            year: "2015",
            src: LogoHtml,
            title: 'HTML 5',
            stars: 5,
        },
        {
            year: "2018",
            src: LogoCss,
            title: 'CSS 3',
            stars: 5,
        },
        {
            year: "2019",
            src: LogoJavascript,
            title: 'Javascript',
            stars: 4,
        },
        {
            year: "2020",
            src: LogoReact,
            title: 'React JS',
            stars: 4,
        },
        {
            year: "2021",
            src: LogoRedux,
            title: 'React Redux',
            stars: 4,
        },
        {
            year: "2022",
            src: LogoNet,
            title: 'C# .NET',
            stars: 4,
        },
    ];

    return (
       <Timeline align="left">
           {
               skills.map(({year, src, title, stars}, index) => (
                   <TimelineItem key={index}>
                       <TimelineOppositeContent>
                           <Typography variant="h6" color="textSecondary">
                               {year}
                           </Typography>
                       </TimelineOppositeContent>
                       <TimelineSeparator>
                           <TimelineDot style={{ backgroundColor: '#FFE2BA' }}>
                               <img src={src} alt={title} className={classes.customLogo}/>
                           </TimelineDot>
                           <TimelineConnector/>
                       </TimelineSeparator>
                       <TimelineContent>
                           <Paper elevation={3} className={classes.paper}>
                               <Typography variant="h6" component="h1">
                                   {title}
                               </Typography>
                               <StarRating stars={stars} />
                           </Paper>
                       </TimelineContent>
                   </TimelineItem>
               ))
           }
       </Timeline> 
    );
};

const useStyles = makeStyles((theme) => ({
    customLogo: {
        width: "25px",
        fontWeight: 700,
    },
    paper: {
        padding: "6px 16px",
        maxWidth: '150px',
    },
  }));

export default Technologies;