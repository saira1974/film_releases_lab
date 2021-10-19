import React, {useState} from 'react';
import FilmList from "../components/FilmList";


const FilmBox = () => {

const [film, setFilm] = useState(
    [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    )
    
        return (
        <>
        <h1>Film List</h1>
        <h2>Please see below!</h2>
        <hr></hr>
        <FilmList film={film} />
        <hr></hr>
        <a href="https://www.imbd.com/calendar/?region=gb">Website for upcoming releases!</a>
        <p>Tel: 03458000800</p>
        <p>Email: info@imdb.com</p>
        </>
        );
    }


export default FilmBox;