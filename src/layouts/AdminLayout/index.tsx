import Bar from 'components/Bar'
import Sidebar from 'components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'

interface IProps {
    
}

const AdminLayout: React.FC<IProps> = () => {
    return (
        <>
            <Bar />
            <Sidebar />
            <main className='main'>
                <div className='main-container'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default AdminLayout
