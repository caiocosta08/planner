import React from 'react';
import {View, Text} from 'react-native';
import {
    Container,
    Input,
    PageTitle,
    LoginButton,
    LoginButtonText,
} from './styles';

const Login = () => {
    return (
        <Container>
            <PageTitle>Login</PageTitle>
            <Input
                type="text"
                placeholder="E-mail"
                placeholderTextColor="#c1e2ff"
            />
            <Input
                type="password"
                placeholder="Password"
                placeholderTextColor="#c1e2ff"
            />
            <LoginButton>
                <LoginButtonText>LOGIN</LoginButtonText>
            </LoginButton>
        </Container>
    );
};

export default Login;
