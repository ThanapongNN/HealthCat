import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, FooterTab, Body, Title,Thumbnail,Left,Right,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import axios from 'axios';

export default class CatPageEN extends Component {

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
          <Body>
            <Title>Cat</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.reset("catTH")}><Text>EN</Text></Button>
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
                    <Text note numberOfLines={1}>Color : {row.cat_color}</Text>
                    <Text note numberOfLines={2}>Species : {row.cat_species}</Text>
                    <Text note numberOfLines={3}>Last used : {moment(moment.unix(row.last_time)).format("DD-MM-YYYY")}</Text>
                    <Text note numberOfLines={4}>When vaccinated : {moment(moment.unix(row.cat_vaccine)).format("DD-MM-YYYY")}</Text>
                  </Body>
                </CardItem>
            </Card>
          );
        })}
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => Actions.reset("profileEN")}>
              <Icon name="md-contact" />
              <Text style={{fontSize: 10}}>Profile</Text>
            </Button>
            <Button vertical active>
              <Icon active name="logo-octocat" />
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