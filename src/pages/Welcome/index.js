import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TextHeader,
  View,
  Image,
  Button,
  SwiperSkip,
  ButtonText,
} from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({
      items: [
        {
          text: 'Cadastre seu número e autorize o app.',
          // eslint-disable-next-line global-require
          skip: require('../../assets/skip_1.png'),
        },
        {
          text: 'Você fara parte de uma grande rede de colaboração.',
          // eslint-disable-next-line global-require
          skip: require('../../assets/skip_2.png'),
        },
        {
          text: 'Tudo pronto, receba informações e fique seguro.',
          // eslint-disable-next-line global-require
          skip: require('../../assets/skip_3.png'),
        },
      ],
    });
  }

  handleNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    const { items } = this.state;
    return (
      <Container>
        <SwiperSkip showsButtons loop={false}>
          {items.map((item, key) => {
            return (
              <View key={String(key)}>
                <TextHeader style={{ fontSize: 28 }}>{item.text}</TextHeader>
                <Image source={item.skip} />
              </View>
            );
          })}
        </SwiperSkip>
        <Button onPress={this.handleNavigate}>
          <ButtonText>PULAR</ButtonText>
        </Button>
      </Container>
    );
  }
}
