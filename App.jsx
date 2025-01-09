import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import DetailPage from "./Components/DetailPages/Detailpage"




const reactRouter = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />

      </Routes>
    </BrowserRouter>





  )
}

export default reactRouter