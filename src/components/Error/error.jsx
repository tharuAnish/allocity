import "./error.css"
import error from "../../assets/data-not-found.svg"

export default function Error() {
  return (
    <div className="error">
      <img className="errorImg" src={error} alt="Error" />
    </div>
  )
}
