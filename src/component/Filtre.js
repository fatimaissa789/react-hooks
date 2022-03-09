import React, {  useState } from "react";
import MovieCard from "./MovieCard";


const Filtre = () => {
    const [filter,setFilter] = useState('');
    const searchText =  (event) => {
        setFilter(event.target.value);

    };
    let dataSearch = MovieCard.listdonnes.filter(item =>{
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()) )
    });
      return (
    <div>
       
        <div>
            {/* <label>recherche</label> */}
            <input  placeholder='recherche' value={filter} onChange={searchText.bind(this)}></input>
            <button>Ajouter</button>
            
        </div>
      {dataSearch.map((movie, key) => {
        return (
          <div>
            <h1>{movie.Description}</h1>
            <a href={"movie.URL"}>lien</a>
            <p>{movie.note}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Filtre;
