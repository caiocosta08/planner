import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Login from './src/views/components/login';
import Register from './src/views/components/register';
import Home from './src/views/components/home';
import Monthly from './src/views/components/monthly';
import {Container} from './src/assets/styles/';

const App = () => {
    return (
        <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={{
                uri:
                    'https://androidexample365.com/content/images/2019/03/Android-BackgroundChart.png',
            }}>
            <Container>
                <Monthly />
            </Container>
        </ImageBackground>
    );
};

export default App;
