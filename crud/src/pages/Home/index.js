import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Table, Alert} from 'reactstrap';

import { api } from '../../config';
import { Link } from 'react-router-dom';


export const Home = () => {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
});

  const getAnuncios = async () => {
    await axios.get(api)
        .then((respose) => {
            //console.log(respose.data.anuncios);
            setData(respose.data.anuncios);
        })
        .catch(() => {
            setStatus({
                type: 'error',
                mensagem: 'Erro: Tente mais tarde!'
            });
        });
};

  useEffect(() => {
    getAnuncios();
  },[]);


  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Anúncios</h1>
          </div>
          <div className="p-2">
            <Link to="/cadastrar" className="btn btn-outline-success btn-sm">Cadastrar</Link>
          </div>
        </div>

        {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
        {status.type === 'success' ? <Alert color="success">{status.mensagem}</Alert> : ""}
                
        <Table striped hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.titulo}</td>
                                <td className="text-center">
                                <Link to={"/visualizar/" + item.id} className="btn btn-outiline-primary btn-sm">Visualizar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
        </Table>
      </Container>
    </div>
    
  );
}
