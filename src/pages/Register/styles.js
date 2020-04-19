import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const TitleText = styled.Text`
  color: #999;
  font-size: 16px;
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 25%;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin: 15px;
  font-size: 16px;
`;

export const Button = styled(RectButton)`
  padding: 15px;
  border-radius: 5px;
  background-color: #8cc63f;
  align-self: stretch;
  margin: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
