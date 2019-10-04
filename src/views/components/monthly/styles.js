import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    padding: 10px;
`;
export const Input = styled.TextInput`
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.13);
    width: 230px;
    color: #ffffff;
    border: 2px solid #fff;
    border-radius: 5px;
    margin: 10px;
    font-size: 16px;
`;
export const PageTitle = styled.Text`
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 28px;
`;
export const RefreshButton = styled.TouchableOpacity`
    border-radius: 5px;
    padding: 3px;
    margin: 5px;
    background-color: #90caf9;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 150px;
`;
export const RefreshButtonText = styled.Text`
    font-size: 18px;
    color: #ffffff;
`;
export const Task = styled.TouchableOpacity`
    flex: 1;
    margin: 5px;
    /*background-color: #90caf977;*/
    background-color: #00000011;
    border-bottom-width: 1px;
    border-bottom-color: #ffffff;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50px;
    width: 300px;
`;
export const TaskText = styled.Text`
    font-size: 16px;
    color: #ffffff;
    margin: 10px;
`;
