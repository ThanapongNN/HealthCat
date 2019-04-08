import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, FooterTab, Body, Title,Thumbnail,Left,Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

const datas = [
  'Cat',
];

export default class VaccinePageTH extends Component {

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
      <Container>
        <Header>
          <Body>
            <Title>ฉีดวัคซีน</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.addvaccineTH()}>
              <Icon active name="add"/>
            </Button>
            <Button transparent onPress={() => Actions.reset("vaccineEN")}><Text>ไทย</Text></Button>
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
                  <Text note numberOfLines={1}>วัคซีน : </Text>
                  <Text note numberOfLines={2}>วันที่ : </Text>
                </Body>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => Actions.editvaccineTH()}>
                <Icon active name="md-create" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
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
            <Button vertical active>
              <Icon active name="book" />
              <Text style={{fontSize: 10}}>วัคซีน</Text>
            </Button>
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