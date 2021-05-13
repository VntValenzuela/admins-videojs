import React , { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Card, Button, Container, Form, Image } from "react-bootstrap"
import './Detail.css'
import {LoginAuth} from '../../../helper/Context'
import { Redirect } from 'react-router-dom'


 const Detail = (props) => {
    const data = props.location.data;
    const {auth, setAuth} = useContext(LoginAuth)
    const getDate = () => {
        const d = new Date(data.releaseDate)
        return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate()
    }
    if(!auth) {
		return <Redirect to='/login'/>
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
                    @media only screen and (max-width: 850px) {
                        .btn-watch {
                            background-color: #E30D0D;
                            color: white;
                            opacity: 1;
                            width: 8em;
                            border-radius:30px;
                            margin: 2%;
                            margin-left: 40%;
                            }
                      }
                    `}
                </style>
                <div className="messageDetail">
                    <h2>Video<span> Details </span></h2>
                    <Image src={data.imgsrc} className="imageDetail"/>
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
export default Detail;