import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container,Header,Content,Footer,FooterTab,Button,Text,Body,Right,Left,Title,Icon,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ContactPageEN extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Left>
            <Title>Contact</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("contactTH")}><Text>EN</Text></Button>
          </Right>
        </Header>
        <Content>
          <Card transparent>
            <CardItem header>
              <Text>Department of Computer Education</Text>
            </CardItem>
            <CardItem>
              <Text><Icon name="ios-call" />    02-913-2500 Ext.3234</Text>
            </CardItem>
            <CardItem>
              <Text><Icon name="ios-mail" />    Email:administrator@ced.kmutnb.ac.th</Text>
            </CardItem>
            <CardItem >
              <Text><Icon name="ios-pin"/>    1518 Pracharat 1Rd. Wongsawang Bang Sue Bangkok 10800</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => Actions.reset("profileEN")}>
              <Icon name="md-contact" />
              <Text style={{fontSize: 10}}>Profile</Text>
            </Button>
            <Button vertical onPress={() => Actions.reset("catEN")}>
              <Icon name="logo-octocat" />
              <Text style={{fontSize: 10}}>Cat</Text>
            </Button>
            {/* <Button vertical onPress={() => Actions.reset("vaccineEN")}>
              <Icon name="book" />
              <Text style={{fontSize: 10}}>Vaccine</Text>
            </Button> */}
            <Button vertical onPress={() => Actions.reset("tipsEN")}>
              <Icon name="md-bulb" />
              <Text style={{fontSize: 10}}>Tips</Text>
            </Button>
            <Button vertical active>
              <Icon active name="person" />
              <Text style={{fontSize: 10}}>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
