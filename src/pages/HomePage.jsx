import axios from "axios";
import { useEffect, useState } from "react";
import { countryList } from "../services/country-sevice";
import { Link } from "react-router-dom";
import ('./HomePage.css')

function HomePage() {
    const [countries , setCountries] = useState ([]);

    useEffect(() => {
        countryList()
        .then((APIcountries) => {
            setCountries(APIcountries);
        })
        .catch ((error) => {
            console.log(error);
          })
    },[]);

    return (
        <>
            <h1 style={{ fontSize: "25px", fontWeight: "bold" }}> WikiCountries: Your Guide to the World </h1>
            <div className="allcountries" >
                {countries.map(country => (
                    <div className="card home"  key={country.name.common}> 
                        <Link className="card-title name-country" to={`/country/${country.alpha3Code}`}>
                        <img className="image"
                            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={country.name.common}
                        />
                           <p className="card-title name-country"> {country.name.common} </p>
                    </Link>
                        
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage;
