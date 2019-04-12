import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Body,Right,Left,Title,Icon,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ContactPageTH extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Left>
            <Title>ติดต่อ</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("contactEN")}><Text>ไทย</Text></Button>
          </Right>
        </Header>
        <Content>
          <Card transparent>
            <CardItem header>
              <Text>ภาควิชาคอมพิวเตอร์ศึกษา</Text>
            </CardItem>
            <CardItem>
              <Text><Icon name="ios-call" />    02-913-2500 Ext.3234</Text>
            </CardItem>
            <CardItem>
              <Text><Icon name="ios-mail" />    Email:administrator@ced.kmutnb.ac.th</Text>
            </CardItem>
            <CardItem >
              <Text><Icon name="ios-pin"/>    1518 ถนนประชาราษฎร์ 1 แขวงวงศ์สว่าง เขตบางซื่อ กรุงเทพมหานคร 10800</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => Actions.reset("profileTH")}>
              <Icon name="md-contact" />
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
            <Button vertical active>
              <Icon active name="person" />
              <Text style={{fontSize: 10}}>ติดต่อ</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
