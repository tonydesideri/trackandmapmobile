import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #5440af;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
`;

export const SwiperSkip = styled(Swiper).attrs({})``;

export const TextHeader = styled.Text`
  font-style: normal;
  color: #eee;
  margin: 0 40px;
  margin-bottom: 30px;
`;

export const View = styled.View`
  flex: 1;
  flex-direction: column;
  background: #5440af;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  padding: 15px;
  border-radius: 5px;
  background-color: #5440af;
  align-self: stretch;
  margin: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
`;

export const Image = styled.Image`
  position: relative;
  margin-bottom: 80px;
`;
