import { MainContainer, WelcomeText, InputContainer, ButtonContainer, LoginWith, HorizontalRule, IconsContainer, ForfotPassword } from './login.elements';
import {FaGoogle} from 'react-icons/fa';
import '../../assets/css/login.css'
import {Input, Button, Icon} from '../../components/index';
import axios from 'axios';
import { Component, useRef, useState, useEffect } from 'react';

class Login extends Component {

    state = {
        correo: '',
        password: ''
    }

    onChangeUsername = (e) => {
        this.setState({
            correo: e.target.value
        })
    }

    onChangePass= (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = async (e) => {
            
            const res = await axios.post('http://localhost:3000/login', {
                correo: this.state.correo,
                password: this.state.password
            })
            console.log(res);
    }

    
    

    render() {
    const GoogleBackground = "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);"
    return (
        <div className='hf__backg'>
            <form action='/login' onSubmit={this.onSubmit}>
            <MainContainer>
                <WelcomeText className='gradient__text'>
                    Bienvenido
                </WelcomeText>
                <InputContainer>
                    <Input type="text" placeholder="Email" onChangeUsername={this.onChangeUsername} />
                    <Input type="password" placeholder="Contrasena" onChangePass={this.onChangePass} />
                </InputContainer>
                <ButtonContainer>
                    <Button content="Ingresar" type="submit"/>
                </ButtonContainer>
                <LoginWith>O Ingresa Con</LoginWith>
                <HorizontalRule />
                <IconsContainer>
                    <Icon color={GoogleBackground}>
                        <FaGoogle />
                    </Icon>
                </IconsContainer>
                <ForfotPassword>Olvidaste tu contrasena?</ForfotPassword>
            </MainContainer>
            </form>
        </div>
    )
    }
}





export default Login;