/* eslint-disable global-require */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Input, Button, ButtonText, TitleText } from './styles';

export default class Register extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleAdduser = async () => {};

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('CheckNumber');
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <TitleText>
          Insira seu número de celular para cadastrar o dispositivo e ter acesso
          ao aplicativo.
        </TitleText>
        <Input
          placeholder="Número de celular"
          onChangeText={this.handleAdduser}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button onPress={this.handleNavigate}>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Container>
    );
  }
}
