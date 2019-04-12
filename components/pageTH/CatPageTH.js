import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, FooterTab, Body, Title,Thumbnail,Left,Right,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import axios from 'axios';

export default class CatPageTH extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataCollar: []
    };
  }

  componentWillMount() {
    axios
      .post("http://128.199.70.49:8080/post/collar", {
        user_id: 1
      })
      .then(res => {
        this.setState({ dataCollar: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Left>
            <Title>ข้อมูลแมว</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("catEN")}><Text>ไทย</Text></Button>
          </Right>
        </Header>
        <Content>
        {this.state.dataCollar.map((row, index) => {
          return (
            <Card key={index}>
              <Body>
                <CardItem header>
                    <Text><Icon active name="logo-octocat" />  {row.cat_name}</Text>
                </CardItem>
              </Body>
                <CardItem>
                  <Body>
                    <Text note numberOfLines={1}>สี : {row.cat_color}</Text>
                    <Text note numberOfLines={2}>สายพันธุ์ : {row.cat_species}</Text>
                    <Text note numberOfLines={3}>ขับถ่ายเมื่อ : {moment(moment.unix(row.last_time)).format("DD-MM-YYYY")}</Text>
                    <Text note numberOfLines={4}>ฉีดวัคซีนเเมื่อ : {moment(moment.unix(row.cat_vaccine)).format("DD-MM-YYYY")}</Text>
                  </Body>
                </CardItem>
            </Card>
          );
        })}
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => Actions.reset("profileTH")}>
              <Icon name="md-contact" />
              <Text style={{fontSize: 10}}>ข้อมูล</Text>
            </Button>
            <Button vertical active>
              <Icon active name="logo-octocat" />
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