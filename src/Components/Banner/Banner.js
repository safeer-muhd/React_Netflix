import React, { useState } from 'react'
import {useEffect} from 'react'
import {imageUrl } from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'
import {trending} from '../../urls'

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(trending).then((response) =>{
            let x = Math.floor((Math.random() * response.data.results.length) + 1)
            console.log(response.data.results)
            setMovie(response.data.results[x])
        })
    }, [])
    

    return (
        <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ''})`}}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title :''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h2 className='description'>{movie ? movie.overview :''}</h2>
            </div>
            <div className="fade_bottom"></div>
        </div>
        )
}

export default Banner