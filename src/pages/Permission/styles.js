import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const TextTitle = styled.Text`
  color: #999;
  font-size: 16px;
  text-align: left;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const View = styled.View`
  margin: 15px;
  background-color: #f5f7f9;
  line-height: 18px;
`;

export const TextList = styled.Text`
  padding: 15px;
  color: #8a8989;
  font-weight: bold;
`;

export const Button = styled(RectButton)`
  padding: 15px;
  border-radius: 5px;
  align-self: stretch;
  margin: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
