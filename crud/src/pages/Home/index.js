import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Table, Alert} from 'reactstrap';

import { api } from '../../config';


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
            <a href="/cadastrar" className="btn btn-outline-success btn-sm">Cadastrar</a>
          </div>
        </div>

        {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
        {status.type === 'success' ? <Alert color="success">{status.mensagem}</Alert> : ""}
                
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
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.titulo}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center">Botão</td>
                            </tr>
                        ))}
                    </tbody>
        </Table>
      </Container>
    </div>
    
  );
}
