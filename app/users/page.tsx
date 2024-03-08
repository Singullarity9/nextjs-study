import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
    searchParams: {
        sortOrder: string;
    }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <>
            <h1>Users:</h1>
            <Link href='/users/new' className='btn'>创建新用户</Link>
            <p>{new Date().toLocaleTimeString()}</p>
            <Suspense fallback={<p>Loading...</p>}>
                <UserTable sortOrder={sortOrder}></UserTable>
            </Suspense>
        </>
    )
}

export default UsersPage