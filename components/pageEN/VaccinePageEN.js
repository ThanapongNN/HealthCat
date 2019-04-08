import React, { Component } from 'react';
import { ListView,StatusBar } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, FooterTab, Body, Title,Thumbnail,Left,Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

const datas = [
  'Cat',
];

export default class VaccinePageEN extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Body>
            <Title>Vaccine</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.addvaccineEN()}>
              <Icon active name="add"/>
            </Button>
            <Button transparent onPress={() => Actions.vaccineTH()}><Text>EN</Text></Button>
          </Right>
        </Header>
        <Content>
          <List
            leftOpenValue={75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem thumbnail>
                <Body>
                  <Text> {data} </Text>
                  <Text note numberOfLines={1}>Vaccine : </Text>
                  <Text note numberOfLines={2}>Date : </Text>
                </Body>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => Actions.editvaccineEN()}>
                <Icon active name="md-create" />
              </Button>}
          />
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
            <Button vertical active>
              <Icon active name="book" />
              <Text style={{fontSize: 10}}>Vaccine</Text>
            </Button>
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