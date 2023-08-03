import { Link } from "react-router-dom"
import "./countrycard.style.css"

export default function CountryCard({ data }) {
  return (
    <div className="countryCard">
      <img
        loading="lazy"
        src={data.flags.png}
        alt="country flag"
        className="country-image"
      />
      <div className="text-wrapper">
        <h3>{data.name}</h3>
        <p>Native name : {data.nativeName}</p>
        <p>Capital City : {data.capital}</p>
        <p>Region : {data.region}</p>
      </div>
      <Link to={`/${data.name}`} className="readMore">
        Read more...
      </Link>
    </div>
  )
}
