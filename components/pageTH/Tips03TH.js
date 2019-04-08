import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Title, } from 'native-base';

export default class Tips03TH extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Body>
            <Title>การฉีดวัคซีนแมว</Title>
          </Body>
        </Header>
        <Content>
            <Card transparent>
              <Body>
                <CardItem>
                    <Image source={require('../../img/swiper-3.jpg')} style={{height: 200, width: 400}}/>
                </CardItem>
              </Body>
              <CardItem>
                <Text>        การสร้างเกราะป้องกันให้กับสุขภาพของน้องแมวด้วยการทำวัคซีนก็เป็นสิ่งสำคัญ เพราะวัคซีนแมวจะช่วยป้องกันน้องแมวจากการติดเชื้อไวรัสต่างๆ ที่ทำให้เกิดอาการป่วยรุนแรงได้</Text>
              </CardItem>
              <Body>
                <CardItem>
                  <Image source={require('../../img/program-TH.png')} style={{ height: 500, width: 400 }}/>
                </CardItem>
              </Body>
            </Card>
        </Content>
      </Container>
    );
  }
}
