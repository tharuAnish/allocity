import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./country.style.css"

export default function Country() {
  const { name } = useParams()
  const url = "https://restcountries.com/v2/name/" + name
  const { data: countrys, isLoading, error } = useFetch(url)

  return (
    <div className="country">
      {isLoading && <div>...Loading</div>}
      {error && <div>{error}</div>}
      {countrys &&
        countrys.map((country) => (
          <div key={country.name}>
            <div className="backgroundFlag">
              <img src={country.flags.svg} alt="bg flag" />
            </div>
            <div className="foregroundFlag">
              <img src={country.flags.svg} alt="country flag" />
            </div>
            <div className="countryInfo countryWrapper">
              <h3>{country.name}</h3>
              <p>Native name : {country.nativeName}</p>
              <p>Capital : {country.capital}</p>
              <p>Population : {country.population}</p>
              <p>Area : {country.area}</p>
            </div>
          </div>
        ))}
    </div>
  )
}
