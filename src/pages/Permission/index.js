import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextTitle,
  View,
  TextList,
  Button,
  TextButton,
} from './styles';

export default class Permission extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleNavigate = () => {};

  render() {
    return (
      <Container>
        <TextTitle>
          Para continuar pe preciso que você dê ao aplicativo as seguintes
          permissões.
        </TextTitle>
        <View>
          <TextList>- Acesso ao Bluetooth.</TextList>
          <TextList>- Receber notificações push.</TextList>
        </View>
        <Button
          onPress={this.handleNavigate}
          style={{ backgroundColor: '#8CC63F' }}>
          <TextButton>Aceito</TextButton>
        </Button>
        <Button
          onPress={this.handleNavigate}
          style={{ backgroundColor: '#D0D0D0' }}>
          <TextButton>Não aceito</TextButton>
        </Button>
      </Container>
    );
  }
}
