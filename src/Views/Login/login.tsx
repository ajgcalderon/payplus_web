import React, {ChangeEvent, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from 'axios'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

interface User{
    username: string,
    password: string
}

const Login = () => {
    const [login,setLogin] = useState<boolean>(false)
    const [user, setUser] = useState<User>({
        username:"",
        password:""
    })
    const navigate = useNavigate();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit = async () => {
        let {data} = await axios.post('http://localhost:8000/api/admin/login/',user,{responseType:"json"});
        console.log(data)
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
    },[])
    return (
        <div className="">
            <Container className="text-center">
                <Card className="mt-5 mx-auto text-center"  style={{ width: '25rem' }}>
                    <Card.Header className="primary" >
                        Login
                    </Card.Header>
                    <Card.Body className="p-5">
                        <Form>
                            <Form.Group>
                                <Form.Label >Nombre de Usuario</Form.Label>
                                <input type="text" className="form-control" name="username" value={user.username} onChange={e => onChange(e)} placeholder="Nombre de Usuario"/>
                                {/* <Form.Control type="text" value={user.username} onChange={e => onChange(e)} placeholder="Nombre de Usuario"  /> */}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <input type="text" className="form-control" name="password" value={user.password} onChange={e => onChange(e)} placeholder="Contraseña"/>
                                {/* <Form.Control type="password" value={user.password} onChange={e => onChange(e)} placeholder="Contraseña"  /> */}
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Button variant="primary" type="submit" onClick={e => onSubmit()}>Enviar</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Login