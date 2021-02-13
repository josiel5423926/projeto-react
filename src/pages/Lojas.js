
import { Table} from "react-bootstrap";


export default function Lojas() {
    return (
        <Table striped bordered hover size="lg ">
        <thead >
          <tr>
          
            <th>São Paulo</th>
            <th>Rio de Janeiro</th>
            <th>Belo Horizonte</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           
            <td>venida Paulista, 987</td>
            <td>Avenida Franco Vargas, 5000</td>
            <td>Rua Major Ávila,370</td>
          </tr>
          <tr>
           
            <td>10&deg; andar</td>
            <td>3&deg; andar</td>
            <td>Vila Mariana</td>
          </tr>
          <tr>
            <td>(11) 3333-3333</td>
            <td>(21) 4566-7712</td>
            <td>(31) 3562-4562</td>
          
          </tr>
        </tbody>
      </Table>
        
    )

}
