import "./countrycard.style.css"

export default function CountryCard({ data }) {
  return (
    <div className="countryCard">
      <img src={data.flags.png} alt="country flag" className="country-image" />
      <div className="text-wrapper">
        <h3>{data.name}</h3>
        <p>Capital City : {data.capital}</p>
        <p>Region : {data.region}</p>
      </div>
    </div>
  )
}