import { Routes, Route } from "react-router-dom"
import { HomePage,ProductsList, ProductDetail, Login, Register, CartPage, DashboardPage, PageNotFound} from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { OrderPage } from "../pages"




export const AllRoutes = () => {
  return (
    <>

        <Routes>
            <Route path="/" element={<HomePage title="Access Computer Science E-Books" /> } />
            <Route path="products" element={<ProductsList title="Explore E-Books Collection"  />} />
            <Route path="products/:id" element={<ProductDetail/>} />

            <Route path="register" element={<Register title="Register"/>} />
            <Route path="login" element={<Login  title="Login"/>} />
             
            <Route path="cart" element={ <ProtectedRoutes><CartPage title="Your Cart"/></ProtectedRoutes> } />
            <Route path="order-summary" element={ <ProtectedRoutes><OrderPage title="Order-Summary"/></ProtectedRoutes> } />
            <Route path="dashboard" element={ <ProtectedRoutes><DashboardPage title="Dashboard"/></ProtectedRoutes> } />

            <Route path="*" element={<PageNotFound />} />

            
        </Routes>
    </>
  )
}
