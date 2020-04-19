/* eslint-disable global-require */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Input, Button, ButtonText, TitleText } from './styles';

export default class CheckNumber extends Component {
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
    navigation.navigate('Agreement');
  };

  render() {
    return (
      <Container>
        <StatusBar hidden />
        <TitleText>
          Insira o código de verificação enviado para seu telefone.
        </TitleText>
        <Input
          placeholder="Código"
          onChangeText={this.handleAdduser}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button onPress={this.handleNavigate}>
          <ButtonText>Velidar</ButtonText>
        </Button>
      </Container>
    );
  }
}
