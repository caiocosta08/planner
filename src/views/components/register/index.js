import React from 'react';
import {View, Text} from 'react-native';
import {
    Container,
    Input,
    PageTitle,
    RegisterButton,
    RegisterButtonText,
} from './styles';

const Register = () => {
    return (
        <Container>
            <PageTitle>Register</PageTitle>
            <Input
                type="text"
                placeholder="First name"
                placeholderTextColor="#c1e2ff"
            />
            <Input
                type="text"
                placeholder="Last name"
                placeholderTextColor="#c1e2ff"
            />
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
            <Input
                type="password"
                placeholder="Confirm password"
                placeholderTextColor="#c1e2ff"
            />
            <RegisterButton>
                <RegisterButtonText>REGISTER</RegisterButtonText>
            </RegisterButton>
        </Container>
    );
};

export default Register;
