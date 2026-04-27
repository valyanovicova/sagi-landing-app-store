import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppStoreLanding from './pages/AppStoreLanding'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NetworkPage from './pages/NetworkPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppStoreLanding />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/user/network" element={<NetworkPage />} />
      </Routes>
    </BrowserRouter>
  )
}
