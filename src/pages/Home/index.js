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
import BleSetup from '../../services/ble';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };

    BleSetup().then(() => {
      this.setState({ active: true });
    });
  }

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Alert');
  };

  render() {
    const { active } = this.state;
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
            <StatusButton
              style={{ backgroundColor: active ? '#8CC63F' : '#FF6543' }}>
              <Icon name="eye-outline" size={25} color="#fff" />
              <Text style={{ color: '#fff', paddingLeft: 10, fontSize: 16 }}>
                {active ? 'Ativo' : 'Inativo'}
              </Text>
            </StatusButton>
          </StatusView>
          <StatusView>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Seus Alertas</Text>
            <StatusButton
              style={{ backgroundColor: '#FF6543' }}
              onPress={this.handleNavigate}>
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
                  padding: 20,
                  fontSize: 16,
                  color: '#fff',
                }}>
                Unidades de saúde próximas
              </Text>
            </HelpButton>
          </HelpView>
          <HelpView>
            <HelpButton style={{ backgroundColor: '#8CC63F' }}>
              <HelpImage source={require('../../assets/group.png')} />
              <Text
                style={{
                  textAlign: 'justify',
                  marginRight: 5,
                  paddingRight: 5,
                  fontSize: 16,
                  color: '#fff',
                }}>
                Como se prevenir?
              </Text>
            </HelpButton>
          </HelpView>
        </View>
      </Container>
    );
  }
}
