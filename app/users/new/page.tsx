'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewPage = () => {
    const router = useRouter()

    return (
        <button
            className='btn btn-primary'
            onClick={() => router.push('/users')}>创建</button>
    )
}

export default NewPage