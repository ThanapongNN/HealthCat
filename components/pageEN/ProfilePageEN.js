import React, { Component } from 'react';
import { ListView,StatusBar } from 'react-native';
import { Container,Header,Content,Footer,FooterTab,Button,Icon,Body,Right,Left,Title,Card,CardItem,Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Font, AppLoading } from "expo";
import axios from 'axios';

export default class ProfilePageEN extends Component {

  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentWillMount() {
    axios
      .post("http://128.199.70.49:8080/post/find/user", {
        user_id: 1
      })
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.reset("profileTH")}><Text>EN</Text></Button>
          </Right>
        </Header>
        <Content>
          {this.state.user.map((row, index) => {
            return (
              <Card transparent key={index}>
                <Body>
                  <CardItem header>
                    <Text>{row.name}</Text>
                    <Button transparent onPress={() => Actions.reset("loginEN")}>
                      <Icon active name="ios-exit"/>
                    </Button>
                  </CardItem>
                </Body>

                <CardItem>
                  <Body>
                    <CardItem>
                      <Text><Icon name="ios-mail"/>    {row.email}</Text>
                    </CardItem>
                    <CardItem>
                      <Text><Icon name="ios-pin"/>      {row.address}</Text>
                    </CardItem>
                    <CardItem>
                      <Text><Icon name="md-call"/>     {row.tel}</Text>
                    </CardItem>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon active name="md-contact" />
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