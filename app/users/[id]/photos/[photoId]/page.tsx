import React from 'react'

interface Props {
    params: {
        id: number;
        photoId: number;
    }
}

const DeepIdPage = ({ params: { id, photoId } }: Props) => {
    return (
        <div>深度id{photoId}</div>
    )
}

export default DeepIdPage