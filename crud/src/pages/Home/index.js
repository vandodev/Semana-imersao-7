import React from 'react';
import {Container, Table} from 'reactstrap';


export const Home = () => {
  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Anúncios</h1>
          </div>
          <div className="p-2">
            <a href="/cadastrar" className="btn btn-outline-success btn-sm">Cadastrar</a>
          </div>
        </div>

        <Table striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Descrição</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td className="text-center">Botão</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td className="text-center">Botão</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td className="text-center">Botão</td>
              </tr>
            </tbody>
        </Table>
      </Container>
    </div>
    
  );
}
