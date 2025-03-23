import { useEffect, useState, useContext, createContext } from 'react'
import Table from 'react-bootstrap/Table';
import ListItem from './ListItem.jsx';
import ClientsModal from './ClientsModal.jsx'
import ModalContext from './ModalContext.js'
import useFetch from '../hooks/useFetch.js'
export default function ClientsList() {

  const { data } = useFetch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(data)
  return (
    <ModalContext.Provider value={{show, setShow, handleClose, handleShow}}>
      <ClientsModal />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Date of Birth</th>
            <th>Sex</th>
            <th>Marital</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
        { data ? data.map( item =>  <ListItem clientData={item} />)
          : 
          <tr>
            <td colSpan={7} className='text-center'>Is fetching</td>
          </tr>
        }
        </tbody>
    </Table>
    </ModalContext.Provider>
      
    
  )
}


