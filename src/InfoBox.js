import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, isRed, isYellow, isGreen, active, ...props }) {
    return (
        <Card className="infoBox" onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox__cases ${!isRed && !isYellow&& "green"} ${!isRed && !isGreen && "yellow"}`}>{cases}</h2>
                <Typography className={`infoBox__title }`}>{total} Total</Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox;