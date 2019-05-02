import React, { Component } from 'react';
import { StatusBar,Image,Alert } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, FooterTab, Body, Title,Thumbnail,Left,Right,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ImagePicker, Permissions } from 'expo';
import moment from 'moment';
import axios from 'axios';

export default class CatPageTH extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataCollar: [],
      image: '<null>'
    };
  }

  selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    });
    if (!cancelled) this.setState({ image: uri });
  };

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    this.setState({ image: uri });
  };

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
  showImagePicker = () =>{
    Alert.alert(
      'Select',
      '',
      [
        {text: 'Gallery', onPress: () => this.selectPicture()},
        {text: 'Camera', onPress: () => this.takePicture()},
        {text: 'Cancel',style: 'cancel',},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container>
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
            <List key={index}>
              <ListItem avatar>
                <Left>
                  <Button transparent style={{width: 60,height: 60,borderRadius: 30,}} onPress={this.showImagePicker}>
                  <Image 
                    style={{width: 60,height: 60,borderRadius: 30, backgroundColor: 'gray' }} 
                    source={{ uri: this.state.image }}
                  />
                  </Button>
                </Left>
                <Body>
                  <Text>ชื่อ : {row.cat_name}</Text>
                  <Text note>สี : {row.cat_color}</Text>
                  <Text note>สายพันธุ์ : {row.cat_species}</Text>
                  <Text>เข้าห้องน้ำ : {moment(moment.unix(row.last_time)).format("D MMMM YYYY, hh:mm A")}</Text>
                </Body>
              </ListItem>
            </List>
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