import React , {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label, Alert,Spinner} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../config';


export const Cadastrar = () => {

  const [anuncio, setAnuncio] = useState({
    titulo: '',
    descricao: ''
});

const [status, setStatus] = useState({
    formSave: false,
    type: '',
    mensagem: ''
});

  const valorInput = e => setAnuncio({...anuncio, [e.target.name]: e.target.value});

  const cadAnuncio = async e => {
    e.preventDefault();
    console.log(anuncio);

    setStatus({ formSave: true });

    const headers = {
        'Content-Type': 'application/json'
    }

    await axios.post(api + "cadastrar/", anuncio, { headers})
    .then((response) => {
        console.log(response.data.message);
        if(response.data.error){
            setStatus({
                formSave: false,
                type: 'error',
                mensagem: response.data.message
            });
        }else{
            setStatus({
                formSave: false,
                type: 'success',
                mensagem: response.data.message
            });
        }
    })
    .catch(() => {
        setStatus({
            formSave: false,
            type: 'error',
            mensagem: 'Erro: Tente mais tarde!'
        });
    })
 }


  return (
      <div>
        <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Cadastrar</h1>
          </div>
          <div className="p-2">
              <Link to="/" className="btn btn-outline-success btn-sm">Listar</Link>
          </div>
         </div> 

         {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
         {status.type === 'success' ? <Alert color="success">{status.mensagem}</Alert> : ""}
         <hr className="m-1" />

         <Form onSubmit={cadAnuncio}>

           <FormGroup>
             <Label>Título</Label>
             <Input type="text" name="titulo" placeholder="Título do anúncio" onChange={valorInput}/>
           </FormGroup>

           <FormGroup>
             <Label>Descrição</Label>
             <Input type="text" name="descricao" placeholder="Descrição do anúncio" onChange={valorInput} />
           </FormGroup>

           {/* <Button type="submit" outline color="success">Cadastrar</Button> */}

           {status.formSave ? <Button type="submit" outline color="success" disabled>Salvando <Spinner size="sm" color="success" /></Button> : <Button type="submit" outline color="success">Cadastrar</Button>}

         </Form>

       </Container>

      </div>
      
    
  );
}
