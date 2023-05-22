import React, {ChangeEvent, useState} from "react";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

interface User{
    username: string,
    password: string
}

const Login = () => {
    const [user, setUser] = useState<User>({
        username:"",
        password:""
    })
    const onChange = (e: ChangeEvent<any>) => {
        console.log(e)
        // const {name,value} = e.target
        // setUser({
        //     ...user,
        //     [name]:value
        // })
    }
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
                                <Form.Control type="text" value={user.username} onChange={e => onChange(e)} placeholder="Nombre de Usuario"  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" value={user.password} onChange={e => onChange(e)} placeholder="Contraseña"  />
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Button variant="primary" type="submit">Enviar</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Login