import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import { useQuery } from 'react-query'

import PrivateRoutes from './router/PrivateRoutes'
import PublicRoutes from './router/PublicRoutes'

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Products from './pages/Products'
import ProductRegister from './pages/ProductRegister'
import ProfileSeller from './pages/ProfileSeller'
import Home from './pages/Home'
import SellerRegister from './pages/SellerRegister'
import NotFound from './pages/NotFound'
import Unauthorized from './pages/Unauthorized'

export default function App() {
    const Layout = () => {
        return (
            <div className="app-container">
                <div className="content">
                    <NavBar />
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    element: <PublicRoutes />,
                    children: [],
                },
                //cambiar luego
                {
                    path: '/seller-register',
                    element: <SellerRegister />,
                },
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/products',
                    element: <Products />,
                },
                {
                    path: '/product',
                    element: <Product />,
                },
                {
                    path: '/profile',
                    element: <ProfileSeller />,
                },

                {
                    element: <PrivateRoutes />,
                    children: [
                        {
                            path: '/dashboard',
                            element: <Dashboard />,
                        },
                    ],
                },
            ],
        },
        {
            element: <PrivateRoutes />,
            children: [
                {
                    path: '/register',
                    element: <ProfileSeller />,
                },
                {
                    path: '/addproduct',
                    element: <ProductRegister />,
                },
            ],
        },
        {
            path: '/unauthorized',
            element: <Unauthorized />,
        },
    ])

    return <RouterProvider router={router} />
}
