import React, { useState, useEffect } from "react"
import CountryCard from "../../components/CountryCard"
import "./home.style.css"
import { FaArrowUp } from "react-icons/fa"
import Hero from "../../components/heroSection/hero"
import { useFetch } from "../../hooks/useFetch"
import Loading from "../../components/Loading/loading"
// ... (previous imports)

export default function Home() {
  const [searchInput, setSearchInput] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const url = "https://restcountries.com/v2/all"
  const { data: countries, isLoading, error } = useFetch(url)

  const filteredCountries = countries
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : []

  const currentItems = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  function handlePageChange(newPage) {
    setCurrentPage(newPage)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [searchInput])

  function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className="background">
      <Hero />
      <div className="search">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        <input
          placeholder="Search for Countries"
          type="search"
          className="input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="card-wrapper wrapper">
        {isLoading && (
          <div>
            <Loading />
          </div>
        )}
        {error && <div>{error}</div>}

        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <CountryCard key={item.name} data={item} isLoading={isLoading} />
          ))
        ) : (
          <div>No countries found.</div>
        )}
      </div>
      <div className="pagination">
        {filteredCountries.length > itemsPerPage && (
          <div className="page">
            {Array.from(
              { length: Math.ceil(filteredCountries.length / itemsPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
      <div className="backToTop">
        <FaArrowUp onClick={backToTop} id="btn-back-to-top" />
      </div>
    </div>
  )
}
