import './App.css'
import {BrowserRouter, Routes, Route} from "react-router";
import Books from "./pages/books";
import UserProfile from "./pages/userProfile";
import ErrorPage from "./pages/error";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
