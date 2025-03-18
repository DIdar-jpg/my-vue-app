import React from 'react'

export default function ListItem({ clientData }) {

    const {id, name, surname, dateOfBirth, sex, marital, number} = clientData
    
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{dateOfBirth}</td>
                <td>{sex}</td>
                <td>{marital ? 'married' : 'single'}</td>
                <td>{number}</td>
            </tr>


        </>
        
  )
}
