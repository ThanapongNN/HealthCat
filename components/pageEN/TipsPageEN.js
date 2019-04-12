import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Right, Left, Body, Footer, FooterTab,Title,Segment,List,ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class TipsPageEN extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Left>
            <Title>Tips</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("tipsTH")}><Text>EN</Text></Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../img/swiper-1.jpg')} />
              </Left>
              <Body>
                <Text>Characteristics of cats and species of cats</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.tips01EN()}>
                  <Text style={{fontWeight: 'bold'}}>Read</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../img/swiper-2.jpg')} />
              </Left>
              <Body>
                <Text>Cat's excretion behavior</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.tips02EN()}>
                  <Text style={{fontWeight: 'bold'}}>Read</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../img/swiper-3.jpg')} />
              </Left>
              <Body>
                <Text>Cat vaccination</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.tips03EN()}>
                  <Text style={{fontWeight: 'bold'}}>Read</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
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
            <Button vertical active>
              <Icon active name="md-bulb" />
              <Text style={{fontSize: 10}}>Tips</Text>
            </Button>
            <Button vertical onPress={() => Actions.reset("contactEN")}>
              <Icon name="person" />
              <Text style={{fontSize: 10}}>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
