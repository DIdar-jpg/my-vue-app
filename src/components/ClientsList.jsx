import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import ListItem from './ListItem.jsx';

export default function ClientsList() {

  const [ data, setData ] = useState(null)
  // Создаём состояние

  const getData = async url => {  
    const request = await fetch(url)
    return request.json()
  }
  // Создаём функцию, которая получает данные(делает запрос).

  useEffect( () => { 
    getData('https://67891f1e2c874e66b7d7ac43.mockapi.io/products/clients')
    .then( res => { setData(res) })
  }, [])

  return (
    <>
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
    </>
  )
}


