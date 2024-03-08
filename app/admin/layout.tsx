import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            <aside className='bg-slate-200 p-5 mr-5'>侧边栏</aside>
            <div>
                <div>导航栏</div>
                <div>{children}</div>
            </div>
        </div>
    )
}

export default AdminLayout