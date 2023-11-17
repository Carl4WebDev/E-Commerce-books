import { Routes, Route } from "react-router-dom"
import { HomePage,ProductsList, ProductDetail} from "../pages"



export const AllRoutes = () => {
  return (
    <>

        <Routes>
            <Route path="/" element={<HomePage title="Access Computer Science E-Books" /> } />
            <Route path="/products" element={<ProductsList title="Explore E-Books Collection"  />} />
            <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    </>
  )
}
