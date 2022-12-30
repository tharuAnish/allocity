import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./country.style.css"

export default function Country() {
  const { name } = useParams()
  const url = "https://restcountries.com/v2/name/" + name
  const { data: countrys, isLoading, error } = useFetch(url)

  return (
    <div>
      {countrys ? (
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
                  <h3 className="countryName">{country.name}</h3>
                  <hr className="countryHr" />
                  <p className="countryData">
                    Native name : {country.nativeName}
                  </p>
                  <p className="countryData">Capital : {country.capital}</p>
                  <p className="countryData">
                    Alt spellings : {country.altSpellings}
                  </p>
                  <p className="countryData">
                    Population : {country.population}
                  </p>
                  <p className="countryData">Area : {country.area}</p>
                  <p className="countryData">Region : {country.region}</p>
                  <p className="countryData">Subregion : {country.subregion}</p>
                  <div className="countryData">
                    {country.currencies.map((currency, i) => (
                      <div key={i}>
                        <div>
                          Currencies
                          <ul className="ul">
                            <li>name : {currency.name}</li>
                            <li>code : {currency.code}</li>
                            <li>symbol : {currency.symbol}</li>
                            {console.log(country.currencies)}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="countryData">
                    Top level domain : {country.topLevelDomain}
                  </p>
                  <div className="countryData">
                    <p>Codes :</p>
                    <ul className="ul">
                      <li>alpha2Code : {country.alpha2Code}</li>
                      <li>alpha3Code : {country.alpha3Code}</li>
                      <li>callingCodes : +{country.callingCodes}</li>
                    </ul>
                  </div>
                  <p className="countryData">
                    Polar Coordinate (latitude, longitude) : {country.latlng}
                  </p>
                  <p className="countryData">Demonym : {country.demonym}</p>
                  <p className="countryData">TimeZones : {country.timezones}</p>
                  <p className="countryData">
                    Numeric Code :{country.numericCode}
                  </p>
                  <div className="countryData">
                    <p>Languages </p>
                    {country.languages.map((language, i) => (
                      <div key={i}>
                        <ul className="ul">
                          <li>Name : {language.name}</li>
                          <li>Native name : {language.nativeName}</li>
                          <li>ISO name : {language.iso639_1}</li>
                          <li>ISO name : {language.iso639_2}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="countryData">
                    <p>Translation of the nation name</p>
                    <ul className="ul">
                      <li>Brazil : {country.translations.br}</li>
                      <li>Portugal : {country.translations.pt}</li>
                      <li>Netherlands : {country.translations.nl}</li>
                      <li>Croatia : {country.translations.hr}</li>
                      <li>Afghanistan : {country.translations.fa}</li>
                      <li>Germany : {country.translations.de}</li>
                      <li>France : {country.translations.fr}</li>
                      <li>Japan : {country.translations.ja}</li>
                      <li>Italy : {country.translations.it}</li>
                      <li>Hungary : {country.translations.hu}</li>
                    </ul>
                  </div>
                  <div className="countryData">
                    Territory/Dependency :
                    {country.independent && <span>Independent </span>}
                  </div>
                  <div className="countryData">
                    <p>Regional blocks :</p>
                    {country.regionalBlocs.map((regionalBloc, i) => (
                      <ul className="ul" key={i}>
                        <li>Acronym : {regionalBloc.acronym}</li>
                        <li>Name : {regionalBloc.name}</li>
                      </ul>
                    ))}
                  </div>
                  {country.gini && (
                    <p className="countryData">
                      GINI index (World Bank estimate) : {country.gini}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>No Data</p>
      )}
    </div>
  )
}
