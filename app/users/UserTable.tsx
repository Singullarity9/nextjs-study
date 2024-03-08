import React from 'react'
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder?: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store'
    })
    const users: User[] = await res.json()

    const sortedUsers = sort(users).asc(sortOrder === 'name' ? (user) => user.name : (user) => user.email)

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>
                        <Link href={'/users?sortOrder=name'}>姓名</Link>
                    </th>
                    <th>
                        <Link href={'/users?sortOrder=email'}>邮箱</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable