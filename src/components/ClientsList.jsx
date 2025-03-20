import { useEffect, useState, useContext, createContext } from 'react'
import Table from 'react-bootstrap/Table';
import ListItem from './ListItem.jsx';
import ClientsModal from './ClientsModal.jsx'
import ModalContext from './ModalContext.js'

export default function ClientsList() {
  const [ data, setData ] = useState(null)

  const getData = async url => {  
    const request = await fetch(url)
    return request.json()
  }
  // Создаём функцию, которая получает данные(делает запрос).

  useEffect( () => { 
    getData('https://67891f1e2c874e66b7d7ac43.mockapi.io/products/clients')
    .then( res => { setData(res) })
  }, [])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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


