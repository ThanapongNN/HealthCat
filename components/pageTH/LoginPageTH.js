import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image,StatusBar,Alert,StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import base64 from 'react-native-base64';
import axios from "axios";

export default class LoginPageTH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: ""
    };
  }

  onLogin() {
    axios
      .post("http://128.199.70.49:8080/post/login", {
        username: this.state.Username,
        password: base64.encode(this.state.Password)
      })
      .then(res => {
        console.log(res.data);
        if (!res.data[0]) {
          Alert.alert(
            'ผิดพลาด',
            'ชื่อหรือรหัสผ่านไม่ถูกต้อง',
            [
              {text: 'ตกลง', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        } else {
          Actions.reset("profileTH");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}><StatusBar hidden />
        <View style={{alignItems: 'flex-end',backgroundColor: "#4050b5"}}>
          <Text style={{color: "white", fontSize: 15,paddingRight: 15,paddingTop: 15, }} onPress={() => Actions.reset("loginEN")}>ไทย</Text>
        </View>
        <View style={{width: "100%",height: "30%",backgroundColor: "#4050b5",alignItems: "center",justifyContent: "center"}}>
          <Image style={{ width: 200, height: 200 }} source={require("../../img/iconTH.png")}/>
        </View>
        <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
          <View style={{width: '100%' }}>
            <TextInput style={styles.textbox}
              placeholder=" ชื่อผู้ใช้" onChangeText={(Username) => this.setState({Username})}
              value={this.state.Username}
            />
          </View>
          <View style={{width: '100%' }}>
            <TextInput secureTextEntry={true} style={styles.textbox}
              placeholder=" รหัสผ่าน" onChangeText={(Password) => this.setState({Password})}
              value={this.state.Password}
            />
          </View>
          <TouchableOpacity onPress={() => this.onLogin()}>
            <View style={styles.button}>
              <Text style={{ padding: 5, color: "white", fontSize: 20 }}>เข้าสู่ระบบ</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textbox: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  button: {
    alignItems: "center",
    backgroundColor: "#4050b5",
    borderRadius: 7,
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25
  },
});
