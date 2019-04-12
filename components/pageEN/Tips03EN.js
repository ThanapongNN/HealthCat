import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Title, } from 'native-base';

export default class Tips03EN extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Body>
            <Title>Cat vaccination</Title>
          </Body>
        </Header>
        <Content>
            <Card transparent>
              <Body>
                <CardItem>
                    <Image source={require('../../img/swiper-3.jpg')} style={{height: 200, width: 400}}/>
                </CardItem>
              </Body>
              <CardItem>
                <Text>        Creating a protective barrier for the health of the cat by making a vaccine is important. Because the cat vaccine will help protect the younger cat from various viral infections That can cause severe illness</Text>
              </CardItem>
              <Body>
                <CardItem>
                  <Image source={require('../../img/program-EN.png')} style={{ height: 500, width: 300 }}/>
                </CardItem>
              </Body>
            </Card>
        </Content>
      </Container>
    );
  }
}
