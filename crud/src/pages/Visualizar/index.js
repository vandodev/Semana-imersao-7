import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Container, Alert} from 'reactstrap';
import { api } from '../../config';
import { Link } from 'react-router-dom';

export const Visualizar = (props) => {

  const [data, setData] = useState([]);
  const [id] = useState(props.match.params.id);

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  useEffect(()=>{

    const getAnuncio = async () =>{
      await axios.get(api + "visualizar/" + id)
      .then((response) =>{
        setData(response.data.anuncio);        
      }).catch(()=>{
        setStatus({
          type: 'error',
          mensagem: 'Erro: Tente mais tarde!'
        });
      })
    }

    getAnuncio();
  },[id]);

  return (
    <div>
      <Container>

        <div className="d-flex">
          <div className="mr-auto p-2">
              <h1>Visualizar Anúncios</h1>
          </div>
          <div className="p-2">
            <Link to="/" className="btn btn-outline-info btn-sm">Listar</Link>
          </div>
        </div>
       
        {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
        <hr className="m-1" />

        <dl className="row">

          <dt className="col-sm-3">ID</dt>
          <dd className="col-sm-9">{data.id}</dd>

          <dt className="col-sm-3">Titulo</dt>
          <dd className="col-sm-9">{data.titulo}</dd>

          <dt className="col-sm-3">Descrição</dt>
          <dd className="col-sm-9">{data.descricao}</dd>
        </dl>

      </Container>
    </div>
    
  );
}
