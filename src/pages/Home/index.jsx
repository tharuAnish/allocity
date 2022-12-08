import { useState, useEffect, useCallback } from "react"
import CountryCard from "../../components/CountryCard"
import "./home.style.css"

export default function Home() {
  const [countryData, setCountryData] = useState([])
  const [url, setUrl] = useState("https://restcountries.com/v2/all")
  const [isLoading, setIsLodaing] = useState(false)

  const fetchCountry = useCallback(async () => {
    const res = await fetch(url)
    const json = await res.json()
    setCountryData(json)
    console.log(countryData)
  }, [url])

  useEffect(() => {
    fetchCountry()
  }, [url, fetchCountry])

  return (
    <div className="background">
      <div className="card-wrapper wrapper">
        {countryData.length ? (
          countryData.map((item, i) => (
            <CountryCard key={i} data={item} isLoading={isLoading} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}
