import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { HomePage } from './pages/HomePage/HomePage'
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
