import AdminLayout from 'layouts/AdminLayout'
import BlankPage from 'pages/admin/blank_page'
import Login from 'pages/auth/login'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route path="" element={<BlankPage />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default AppRouter