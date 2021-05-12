import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Button, Container, Form, Image } from "react-bootstrap"
import './Detail.css'


const data = {
    _id: "6087541c9fd92b2114eace39",
    name: "Avengers Endgame",
    releaseDate: "2019-04-22T00:00:00.000Z",
    description: "The Final Avengers Movie",
    runtime: "3h 2m",
    link: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    timesWatched: 0
}

export default function Detail() {
    const getDate = () => {
        const d = new Date(data.releaseDate)
        return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate()
    }
    return (
        <div className="left-contents">
            <style type="text/css">
                    {`
                    .btn-watch {
                    background-color: #E30D0D;
                    color: white;
                    opacity: 1;
                    width: 8em;
                    border-radius:30px;
                    margin: 2%;
                    }
                    `}
                </style>
                <div className="messageDetail">
                    <h2>Video<span> Details </span></h2>
                    <Image src={"https://lumiere-a.akamaihd.net/v1/images/690x0w_f1b0509a.jpeg?region=0%2C0%2C690%2C1035"} className="imageDetail"/>
                    <div><Button href={data.link} variant="watch">Watch</Button></div>
                </div>
            <div className="dataDetail">
                <p><span>Title: </span>{data.name}</p>
                <p><span>Release Date: </span>{getDate()}</p>
                <p><span>Duration: </span>{data.runtime}</p>
                <p><span>Description: </span>{data.description}</p>
            </div>
        </div>
    )
}