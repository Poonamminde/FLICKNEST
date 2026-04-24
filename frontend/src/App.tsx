import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<h1>Profile Page</h1>} />
          <Route path="/movies" element={<h1>Movies Page</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App