import React, { Component } from 'react';
import { ListView,StatusBar,Alert,Image } from 'react-native';
import { Container,Header,Content,Footer,FooterTab,Button,Icon,Body,Right,Left,Title,Card,CardItem,Text,Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ImagePicker, Permissions } from 'expo';
import axios from 'axios';

export default class ProfilePageTH extends Component {

  constructor(props) {
    super(props);
    this.state = { user: [], image: '<null>'  };
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
  showLogout = () =>{
    Alert.alert(
      'ยืนยันออกระบบ',
      '',
      [
        {text: 'ไม่',style: 'cancel',},
        {text: 'ใช่', onPress: () => Actions.reset("loginTH")}
      ],
      {cancelable: false},
    );
  }
  showImagePicker = () =>{
    Alert.alert(
      'เลือก',
      '',
      [
        {text: 'อัลบั้มรูป', onPress: () => this.selectPicture()},
        {text: 'กล้อง', onPress: () => this.takePicture()},
        {text: 'ยกเลิก',style: 'cancel',},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Title>ข้อมูลส่วนตัว</Title>
          </Left>
          <Right>
            <Button transparent onPress={() => Actions.reset("profileEN")}><Text>ไทย</Text></Button>
          </Right>
        </Header>
        <Content>
          {this.state.user.map((row, index) => {
            return (
              <Card key={index}>
                <Body>
                  <CardItem>
                    <Button transparent style={{paddingVertical: 30,width: 200,height: 200,borderRadius: 100,}} onPress={this.showImagePicker}>
                    <Image 
                      style={{paddingVertical: 30,width: 200,height: 200,borderRadius: 100, backgroundColor: 'gray' }} 
                      source={{ uri: this.state.image }}
                    />
                    </Button>
                  </CardItem>
                </Body>
                <CardItem>
                  <Body>
                    <CardItem>
                      <Icon active name="md-contact"/><Text>{row.name}</Text>
                    </CardItem>
                    <CardItem>
                      <Icon name="ios-mail"/><Text>{row.email}</Text>
                    </CardItem>
                    <CardItem>
                      <Icon name="ios-pin"/><Text>{row.address}</Text>
                    </CardItem>
                    <CardItem>
                      <Icon name="md-call"/><Text>{row.tel}</Text>
                    </CardItem>
                  </Body>
                </CardItem>
                <Left>
                  <CardItem>
                    <Button transparent onPress={() => this.showLogout()}>
                      <Icon active name="ios-log-out"/>
                    </Button>
                  </CardItem>
                </Left>
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