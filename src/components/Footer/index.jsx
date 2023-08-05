import "./footer.style.css"
import React from "react"

export default function Footer() {
  const date = new Date().getFullYear()

  return (
    <div className="footer">
      <p>Copyright ©{date} - All rights reserved to Mr.Namo</p>
    </div>
  )
}
