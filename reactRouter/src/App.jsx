import { Container } from "postcss"
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Home from "./components/Home/Home"

const App = () => {
  
  const router = createBrowserRouter()
  return (
    <>
    <Header/>
    <RouterProvider router={router}>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    </RouterProvider>
    <Footer/>
    </>
    )
}

export default App