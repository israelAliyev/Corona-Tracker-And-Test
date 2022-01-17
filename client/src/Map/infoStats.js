import React , {useState} from "react";
import '../css/infoStats.css'
import {Card,CardContent,Typography} from "@material-ui/core";

function InfoStats({title , count , isGreen , isRed , isYellow ,active ,total , ...props}){




    return(




        <Card onClick = {props.onClick}
              className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>

         <CardContent>

             <Typography className='infoStats_title' color='textSecondary'>{title}</Typography>

             <h4 className='infoStats_count'>{count}</h4>

             <h5 className='infoStats_total' color='textSecondary'>{total} Total</h5>


         </CardContent>


        </Card>



    );

}

export default InfoStats;