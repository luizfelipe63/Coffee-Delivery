import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { Success } from './pages/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
