import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"

import "./scss/main.scss"

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
