'use client';
import React from 'react'

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log('错误信息', error);

    return (
        <>
            <div>看起来似乎发生了某些错误...</div>
            <button className='btn' onClick={() => reset()}>重试</button>
        </>
    )
}

export default ErrorPage