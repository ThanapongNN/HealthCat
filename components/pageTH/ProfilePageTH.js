import React, { Component } from 'react';
import { ListView,StatusBar } from 'react-native';
import { Container,Header,Content,Footer,FooterTab,Button,Icon,Body,Right,Left,Title,Card,CardItem,Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import axios from 'axios';

export default class ProfilePageTH extends Component {

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
            <Title>ข้อมูลส่วนตัว</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.reset("profileEN")}><Text>ไทย</Text></Button>
          </Right>
        </Header>
        <Content>
          {this.state.user.map((row, index) => {
            return (
              <Card transparent key={index}>
                <Body>
                  <CardItem header>
                    <Text>{row.name}</Text>
                    <Button transparent onPress={() => Actions.reset("loginTH")}>
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
              <Text style={{fontSize: 10}}>ข้อมูล</Text>
            </Button>
            <Button vertical onPress={() => Actions.reset("catTH")}>
              <Icon name="logo-octocat" />
              <Text style={{fontSize: 10}}>แมว</Text>
            </Button>
            {/* <Button vertical onPress={() => Actions.reset("vaccineTH")}>
              <Icon name="book" />
              <Text style={{fontSize: 10}}>วัคซีน</Text>
            </Button> */}
            <Button vertical onPress={() => Actions.reset("tipsTH")}>
              <Icon name="md-bulb" />
              <Text style={{fontSize: 10}}>เคล็ดลับ</Text>
            </Button>
            <Button vertical onPress={() => Actions.reset("contactTH")}>
              <Icon name="person" />
              <Text style={{fontSize: 10}}>ติดต่อ</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}