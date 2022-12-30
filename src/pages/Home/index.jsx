import { useState, useEffect, useCallback } from "react"
import CountryCard from "../../components/CountryCard"
import "./home.style.css"
import { FaArrowUp } from "react-icons/fa"
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

  useEffect(() => {
    fetchCountry()
  }, [url, fetchCountry])

  //Back to top
  let mybutton
  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top")
    scrollFunction(mybutton)
  }

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block"
    } else {
      mybutton.style.display = "none"
    }
  }

  function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className="background">
      <div className="blank"></div>
      <div className="card-wrapper wrapper">
        {countryData.length ? (
          countryData.map((item) => (
            <CountryCard key={item.name} data={item} isLoading={isLoading} />
          ))
        ) : (
          // <p className="loading">Loading...</p>
          <div className="loader">
            <div className="scanner">
              <span>Loading...</span>
            </div>
          </div>
        )}
      </div>
      <div className="backToTop">
        <FaArrowUp onClick={backToTop} id="btn-back-to-top" />
      </div>
    </div>
  )
}
