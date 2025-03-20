import { useContext } from 'react'
import ModalContext from './ModalContext.js'

export default function ListItem({ clientData }) {
    
    const {id, name, surname, dateOfBirth, sex, marital, number} = clientData
    
    const { handleShow } = useContext(ModalContext)

    return (
        <>
            <tr onClick={handleShow}>
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
