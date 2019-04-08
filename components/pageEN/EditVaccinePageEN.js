import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text,Textarea, Body,Right,Left, Title,Form,Label,Input,Item,Picker,DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class EditVaccinePageEN extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: undefined };
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Body>
            <Title>Edit Vaccine</Title>
          </Body>
        </Header>
            <Content>
              <Item fixedLabel>
                <Label>Cat name</Label>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  placeholder="Select your Cat"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                  >
                  <Picker.Item label="Cat Red" value="key0" />
                  <Picker.Item label="Cat Blue" value="key1" />
                  <Picker.Item label="Cat Black" value="key2" />
                  <Picker.Item label="Cat White" value="key3" />
                  <Picker.Item label="Cat Orange" value="key4" />
                </Picker>
              </Item>
              <Item fixedLabel>
                <Label>Vaccine</Label>
                <Left>
                  <Input/>
                </Left>
              </Item>
              <Item fixedLabel>
                <Label>Date</Label>
                <Left>
                  <DatePicker
                    defaultDate={new Date(2019, 0, 1)}
                    minimumDate={new Date(2000, 0, 1)}
                    maximumDate={new Date(2050, 11, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "#4050b5" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                  />
                </Left>
              </Item>
            </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => Actions.reset("vaccineEN")}>
                <Text style={{color: "white",fontSize: 15}}>Change</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
