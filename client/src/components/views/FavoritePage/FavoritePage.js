import React, { useEffect, useState } from "react";
import axios from "axios";
import "./favorite.css";
import { useSelector } from "react-redux";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function FavoritePage() {
  const user = useSelector((state) => state.user);

  const [Favorites, setFavorites] = useState([]);
  const [Loading, setLoading] = useState(true);
  let variable = { userFrom: localStorage.getItem("userId") };

  useEffect(() => {
    fetchFavoredSeries();
  }, []);

  const fetchFavoredSeries = () => {
    axios.post("/api/favorite/getFavoredSeries", variable).then((response) => {
      if (response.data.success) {
        console.log(response.data.favorites);
        setFavorites(response.data.favorites);
        setLoading(false);
      } else {
        alert("Failed to get subscription videos");
      }
    });
  };

  const onClickDelete = (seriesId, userFrom) => {
    const variables = {
      seriesId: seriesId,
      userFrom: userFrom,
    };

    axios
      .post("/api/favorite/removeFromFavorite", variables)
      .then((response) => {
        if (response.data.success) {
          fetchFavoredSeries();
        } else {
          alert("Failed to Remove From Favorite");
        }
      });
  };

  const renderCards = Favorites.map((favorite, index) => {
    return (
      <tr key={index}>
        <td className="imgWithText">
          {" "}
          {favorite.seriesPost ? (
            <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${favorite.seriesPost}`} alt=" " />
          ) : (
            "no image"
          )}
          {favorite.seriesTitle}
        </td>

        <td> {favorite.seriesRunTime} </td>
        <td>
          <button
            class="favButton"
            onClick={() => onClickDelete(favorite.seriesId, favorite.userFrom)}
          >
            {" "}
            <i class="fa fa-trash" aria-hidden="true"></i>
            <span className="removeFav">Remove From Favorite</span>{" "}
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Header mode={true} />
      <div className="favoritePageStyle">
        <h1> My Favorite TV SHOW</h1>

        {user.userData && !user.userData.isAuth ? (
          <div
            style={{
              width: "100%",
              fontSize: "2rem",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>Please Log in first...</p>
            <a href="/login">Go to Login page</a>
          </div>
        ) : (
          !Loading && (
            <table>
              <thead>
                <tr>
                  <th>Show Title</th>
                  <th>Number of Seasons</th>
                  <th>Remove from favorites</th>
                </tr>
              </thead>
              <tbody>{renderCards}</tbody>
            </table>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default FavoritePage;
