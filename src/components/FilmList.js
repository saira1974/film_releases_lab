import React from 'react';
import Film from "./Film";

const FilmList = ({film}) => {
    const filmTitles = film.map(film => {
    return (
        <Film film={film} key={film.id}/>
    );
});

return(
    <>
    {filmTitles}
    </>
)
    
}

export default FilmList;