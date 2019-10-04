import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {
    Container,
    Input,
    PageTitle,
    RefreshButton,
    RefreshButtonText,
    Task,
    TaskText,
} from './styles';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    const refreshData = async () => {
        setTasks([]);
        //let url = 'http://192.168.1.6:8000/tasks/list';
        let url = 'http://192.168.25.6:8000/tasks/list'; //url ios
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(responseJSON => {
                return setTasks(responseJSON);
            })
            .catch(error => error);
    };

    const alertData = task => {
        Alert.alert(
            task.name,
            task.description + '\n' + task.date_todo + '\n' + task.scope_id,
            [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Ok',
                },
            ],
        );
    };

    useEffect(() => {
        refreshData();
    }, []);

    if (tasks.length > 0) {
        return (
            <Container>
                <PageTitle>Home - Diary Planner</PageTitle>

                <RefreshButton
                    onPress={() => {
                        refreshData();
                    }}>
                    <RefreshButtonText>REFRESH</RefreshButtonText>
                </RefreshButton>
                <ScrollView
                    onScrollEndDrag={event => {
                        //offset = 0; se for maior que 0: scroll down
                        let direction =
                            event.nativeEvent.contentOffset.y > 0
                                ? 'down'
                                : 'up';
                        direction == 'up' ? refreshData() : direction;
                    }}>
                    {tasks.map(task => {
                        if (task.scope_id == 'Diary') {
                            return (
                                <Task
                                    onPress={() => {
                                        alertData(task);
                                    }}
                                    key={task.name}>
                                    <TaskText>{task.name}</TaskText>
                                </Task>
                            );
                        }
                    })}
                </ScrollView>
            </Container>
        );
    } else {
        return <PageTitle>Carregando...</PageTitle>;
    }
};

export default Home;
