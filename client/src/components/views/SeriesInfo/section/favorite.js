import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import './favorite.css'

function Favorite(props) {
    const user = useSelector(state => state.user)

    const seriesId = props.seriesId
    const userFrom = props.userFrom
    const seriesTitle = props.seriesInfo.name
    const seriesPost = props.seriesInfo.backdrop_path
    const totalSeasons = props.seriesInfo.number_of_seasons

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    const variables = {
        seriesId: seriesId,
        userFrom: userFrom,
        seriesTitle: seriesTitle,
        seriesPost: seriesPost,
        seriesRunTime: totalSeasons
    }

    const onClickFavorite = () => {

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        if (Favorited) {
            //when we are already subscribed 
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })

        } else {
            // when we are not subscribed yet

            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }

    useEffect(() => {

        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.subscribeNumber)
                } else {
                    alert('Failed to get Favorite Number')
                }
            })

        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.subcribed)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })

    }, [])


    return (
        <>
            <Button onClick={onClickFavorite} className="favButton"> {
                !Favorited ?
                <>
                <i class="fa fa-heart" aria-hidden="true"></i>Add to Favorite
                </>
                :
                <> 
                <i class="fa fa-trash" aria-hidden="true"></i><span className="removeFav">Remove From Favorite</span>
                </>
                }
            </Button>
        </>
    )
}

export default Favorite

