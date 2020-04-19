/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  ButtonQR,
  Logo,
  ButtonAm,
  ImageAm,
  QuestionView,
  StatusView,
  Status,
  StatusButton,
  Input,
  ZonaView,
  HelpView,
  HelpButton,
  HelpImage,
} from './styles';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Header>
          <ButtonQR>
            <Icon name="qrcode-scan" size={30} color="#8CC63F" />
          </ButtonQR>
          <Logo source={require('../../assets/logo.png')} />
          <ButtonAm>
            <ImageAm
              source={require('../../assets/bandeira_do_amazonas.png')}
            />
            <Icon name="chevron-down" size={25} color="#8CC63F" />
          </ButtonAm>
        </Header>
        <View>
          <QuestionView style={{ backgroundColor: '#5440AF' }}>
            <Text style={{ color: '#fff', paddingRight: 20, fontSize: 16 }}>
              Olá! Como está se sentindo?
            </Text>
            <Icon name="emoticon-sad" size={25} color="#FB8585" />
            <Icon name="emoticon-happy" size={25} color="#8CC63F" />
          </QuestionView>
          <QuestionView style={{ backgroundColor: '#6A50E1' }}>
            <Text style={{ color: '#fff', paddingRight: 20, fontSize: 16 }}>
              Precisa de apoio psicológico?
            </Text>
            <Icon name="comment-multiple" size={25} color="#FFCE51" />
          </QuestionView>
        </View>
        <Status>
          <StatusView>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Seu status</Text>
            <StatusButton style={{ backgroundColor: '#8CC63F' }}>
              <Icon name="eye-outline" size={25} color="#fff" />
              <Text style={{ color: '#fff', paddingLeft: 10, fontSize: 16 }}>
                Ativo
              </Text>
            </StatusButton>
          </StatusView>
          <StatusView>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Seus Alertas</Text>
            <StatusButton style={{ backgroundColor: '#FF6543' }}>
              <Icon name="bell" size={25} color="#fff" />
              <Text style={{ color: '#fff', paddingLeft: 10, fontSize: 16 }}>
                2 Alertas
              </Text>
            </StatusButton>
          </StatusView>
        </Status>
        <View>
          <ZonaView>
            <Icon name="map-marker" size={25} color="#FF6543" />
            <Text style={{ fontSize: 16 }}>Verique situação por zona</Text>
          </ZonaView>

          <Input
            placeholder="Digite a cidade ou bairro"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <HelpView>
            <HelpButton style={{ backgroundColor: '#6A50E1' }}>
              <Icon name="hospital" size={30} color="#8CC63F" />
              <Text
                style={{
                  textAlign: 'left',
                  margin: 10,
                  fontSize: 16,
                  color: '#fff',
                }}>
                Unidades de saúde mais próximas
              </Text>
            </HelpButton>
          </HelpView>
          <HelpView>
            <HelpButton style={{ backgroundColor: '#8CC63F' }}>
              <Text
                style={{
                  textAlign: 'right',
                  margin: 10,
                  fontSize: 16,
                  color: '#fff',
                }}>
                Como posso me prevenir?
              </Text>
              <HelpImage source={require('../../assets/group.png')} />
            </HelpButton>
          </HelpView>
        </View>
      </Container>
    );
  }
}
