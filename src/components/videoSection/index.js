import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import { Typography, responsiveFontSizes, createMuiTheme, ThemeProvider, MuiThemeProvider  } from '@material-ui/core';
import byc from '../../images/icons/byc.svg'
import { colors, Grow, useMediaQuery, useTheme} from "@material-ui/core"
import manBall from  '../../images/manBall.svg'
import obi from  '../../images/obi.jpg'
import play from  '../../images/play.png'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import './vid.css'


let theme = createMuiTheme()
theme = responsiveFontSizes(theme);

const useStyles= makeStyles(()=>({

    gridCont:{
        width: '100%',
        minHeight: '600px',
        padding: '30px'
    },
    inside:{
        padding: '20px',
    },
    inside2:{
        color: 'white',
    },
    h3:{
        fontSize: '3rem'
    },
    imgCard:{
        backgroundColor: 'white',
        padding: 10,
    },
    [theme.breakpoints.down('xs')]:{
        padding: 0,
    }
   
}))
const VideoComponent = ({location})=>{
    function handleClick(){
        console.log('button clicked')
    }
    const classes = useStyles()    
    return( 
            <Grid container className={classes.gridCont}>
                <Grid item className={classes.inside} xs={12} md={6}>
                    <Card className={classes.imgCard}>
                        <CardMedia
                            component="img"
                            alt="Mr Obi"
                            height="500"
                            image={ obi }
                            title="Mr Obi"
                        />
                    </Card>
                    
                    <div div className="playNow">
                        <div class="controls"></div>
                    </div>
                </Grid>

                <Grid item className={classes.inside2} xs={12} md={6} sm={6}>
                    <div className="rightCont">
                    <MuiThemeProvider theme={theme} className={classes.mBottom}>
                        <Typography variant="h3" className="ptext0">How will you reach higher this year?</Typography>
                        <Typography variant="subtitle" className="ptext1">College is about defying expectations, breaking the mold, and finding yourself. In short, it’s the most valuable investment you can make for your future — both financially and personally.</Typography>
                        <Typography variant="subtitle" className="ptext2">Your journey is just beginning, and you'll have support from us all along the way. Let's see how far you can go.</Typography>
                    </MuiThemeProvider>
                    </div>
                </Grid>
            </Grid>
    )
}


export default VideoComponent