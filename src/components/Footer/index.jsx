import "./footer.style.css"
import React from "react"

export default function Footer() {
  const date = new Date().getFullYear()

  return (
    <div className="footer">
      <p>
        Copyright ©{date} - www.allocity.com - All rights reserved to AlloCity
      </p>
    </div>
  )
}
