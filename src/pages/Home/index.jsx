import { useState, useEffect, useCallback } from "react"
import CountryCard from "../../components/CountryCard"
import "./home.style.css"
// import FilterCountry from "../../components/FilterCountry"

export default function Home() {
  const [countryData, setCountryData] = useState([])
  const [url, setUrl] = useState("https://restcountries.com/v2/all")
  const [isLoading, setIsLodaing] = useState(false)
  // const [error, setError] = useState("")

  const fetchCountry = useCallback(async () => {
    const res = await fetch(url)
    const json = await res.json()
    setCountryData(json)
    console.log(countryData)
  }, [url])

  // const getCountryByRegion = async (regionName) => {
  //   // added
  //   try {
  //     const res = await fetch(`${url}/region/${regionName}`)

  //     if (!res.ok) throw new Error("Failed..........")

  //     const data = await res.json()
  //     setCountryData(data)

  //     setIsLodaing(false)
  //   } catch (error) {
  //     setIsLodaing(false)
  //     setError(false)
  //   }
  // }

  useEffect(() => {
    fetchCountry()
  }, [url, fetchCountry])

  return (
    <div className="background">
      {/* <div className="filter">
        <FilterCountry onSelect={getCountryByRegion} /> 
      </div> // added */}
      {/* <button onClick={() => setUrl("")}>Filter America</button> */}
      {/* <hr /> */}
      <div className="blank"></div>
      <div className="card-wrapper wrapper">
        {countryData.length ? (
          countryData.map((item, i) => (
            <CountryCard key={i} data={item} isLoading={isLoading} />
          ))
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  )
}
