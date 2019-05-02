import React, { Component } from 'react';
import { StatusBar,Image,Alert } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Footer, FooterTab, Body, Title,Thumbnail,Left,Right,Card,CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ImagePicker, Permissions } from 'expo';
import moment from 'moment';
import axios from 'axios';

export default class CatPageEN extends Component {

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
            <Title>Cat</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("catTH")}><Text>EN</Text></Button>
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
                  <Text>Name : {row.cat_name}</Text>
                  <Text note>Color : {row.cat_color}</Text>
                  <Text note>Species : {row.cat_species}</Text>
                  <Text>Cat on toilet : {moment(moment.unix(row.last_time)).format("D/MM/YYYY, hh:mm A")}</Text>
                </Body>
              </ListItem>
            </List>
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