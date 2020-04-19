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

export default class Agreement extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Permission');
  };

  render() {
    return (
      <Container>
        <TextTitle>
          Para continuar é preciso que aceite os termos listados logo abaixo.
        </TextTitle>
        <View>
          <TextList>
            - Registraremos seu número em um banco de dados criptografado.
          </TextList>
          <TextList>
            - Você está de acordo que seu telefone sejá rastreado, ajudando
            assim com as informações necessárias.
          </TextList>
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
