import '../../assets/scss/MainLayout/MainLayout.scss'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Outlet />
        </div>
    )
}

export default MainLayout
