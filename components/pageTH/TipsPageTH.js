import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Right, Left, Body, Footer, FooterTab,Title,Segment,List,ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class TipsPageTH extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Left>
            <Title>เคล็ดลับ</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("tipsEN")}><Text>ไทย</Text></Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../img/swiper-1.jpg')} />
              </Left>
              <Body>
                <Text>ลักษณะของแมวและสายพันธุ์ของแมว</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.tips01TH()}>
                  <Text style={{fontWeight: 'bold'}}>อ่าน</Text>
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
                <Text>พฤติกรรมการขับถ่ายของแมว</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.tips02TH()}>
                  <Text style={{fontWeight: 'bold'}}>อ่าน</Text>
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
                <Text>การฉีดวัคซีนแมว</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => Actions.tips03TH()}>
                  <Text style={{fontWeight: 'bold'}}>อ่าน</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
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
            <Button vertical active>
              <Icon active name="md-bulb" />
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
