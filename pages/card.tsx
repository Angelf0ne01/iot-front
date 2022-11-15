import React from 'react'

interface Props{
    title: string,
    description: string,
    nameCard: string,
    onClick: Function,
}

export default function Card({title,description,nameCard} : Props){
return(
    <div className={nameCard}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
)
}
