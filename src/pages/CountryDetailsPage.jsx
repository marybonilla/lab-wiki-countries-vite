import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { countryDetail } from '../services/country-sevice';
import ("./CountryDetails.css")




function CountryDetails() {
    const { alpha3Code } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Establecer el estado de carga como verdadero al comenzar la solicitud
        countryDetail(alpha3Code)
            .then(apiCountry => {
                console.log("API Data:", apiCountry);
               
                setCountryData(apiCountry);
                setLoading(false); // Establecer el estado de carga como falso cuando se completa la solicitud
            })
            .catch(error => {
                console.log(error);
                setLoading(false); // Asegurarse de establecer el estado de carga como falso en caso de error
            });
    }, [alpha3Code]);
    console.log("Country Data:", countryData);

    return (
        <>
            <div className="container">
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</h1>
            {loading ? (
                <p>Loading...</p>
            ) : countryData ? (
                <>
                    <div className="card">
                        <img className="image-detail"
                                    src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
                                    alt={countryData.name.common}
                                />
                            <h1 style={{ fontSize: "30px", fontWeight: "bold" }} >{countryData.name.common}</h1>
                            <p> <strong>Official country name: </strong> {countryData.name.official}</p>
                            <p> <strong> Capital: </strong> {countryData.capital}</p>
                            <p> <strong>Area: </strong> {countryData.area}</p>
                            <p className="card-header">Borders:</p>
                            <ul>
                                {countryData.borders.length > 0 ? (
                                    countryData.borders.map((border) => (
                                        <li className="list-group-item" key={border}>
                                            <Link to={`/country/${border}`}>{border}</Link>
                                        </li>
                                    ))
                                ) : (
                                    <p>No border</p>
                                )}
                            </ul>
                    </div>
                </>
            ) : (
                <p>No data available</p>
            )}
        </div>
        </>
    )
}

export default CountryDetails;
