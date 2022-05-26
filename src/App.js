import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Aboutpage from './pages/Aboutpage'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<Aboutpage />} />
          </Routes>
          <Link to="/about">
            <AboutIconLink />
          </Link>
        </div>
      </Router>
    </FeedbackProvider>
  )
}
export default App
