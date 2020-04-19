import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 0px;
  background-color: #fff;
`;

export const Header = styled.View`
  background-color: #ffff;
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  max-height: auto;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonQR = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
`;

export const ButtonAm = styled(RectButton)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  background-color: #fff;
`;

export const ImageAm = styled.Image`
  width: 23px;
  height: 16px;
  margin: 5px;
`;

export const QuestionView = styled.View`
  display: flex;
  flex-direction: row;
  max-height: auto;
  align-items: center;
  padding: 5px 15px;
`;

export const Status = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusView = styled.View`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const StatusLabel = styled.Text`
  margin-bottom: 5px;
`;

export const StatusButton = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const ZonaView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 15px;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding: 10px;
  border-radius: 5px;
  border-color: #eee;
  background-color: #eee;
  align-self: stretch;
  font-size: 16px;
  margin: 5px 15px;
`;

export const HelpView = styled.View`
  flex: 1;
  margin: 30px 15px;
`;

export const HelpButton = styled(RectButton)`
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  width: 150px;
  height: 100px;
  padding: 10px;
`;

export const HelpImage = styled.Image`
  align-self: auto;
  margin-left: 0px;
  padding-left: 0px;
  margin-bottom: 15px;
`;
