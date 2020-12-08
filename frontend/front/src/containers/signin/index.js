import React , { useState  } from 'react'
import {  Container, Row, Col , Button ,Form} from 'react-bootstrap';
import {  Redirect} from 'react-router-dom';
import Header from "../../components/header"
import Input from "../../UI/Input_helping";
import {  login } from '../../actions';
import { useDispatch , useSelector } from 'react-redux';
/**
* @author
* @function Signin
**/ 

const Signin = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email,
            password
        }

    dispatch(login(user));
    }

    if(auth.authenticate){
        return <Redirect to={`/admin`} />
    }

  return(
      <>
        <Header />
            <Container>

                <Row style={{marginTop:"75px"}}>
                    <Col md={{ span:6 , offset:3}}>
                        <Form onSubmit={userLogin}>
                            <Input 
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                error_message="We'll never share your email with anyone else."
                                OnChange={(e)=>setEmail(e.target.value)}
                            />

                            <Input 
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"                               
                                OnChange={(e)=>setPassword(e.target.value)}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>  
            </Container>
        </>
   )

 }

export default Signin