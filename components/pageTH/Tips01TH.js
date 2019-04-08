import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Title, } from 'native-base';

export default class Tips01TH extends Component {

  render() {
    return (
      <Container><StatusBar hidden />
        <Header>
          <Body>
            <Title>ลักษณะของแมวและสายพันธุ์ของแมว</Title>
          </Body>
        </Header>
        <Content>
            <Card transparent>
              <Body>
                <CardItem>
                    <Image source={require('../../img/swiper-1.jpg')} style={{height: 200, width: 400}}/>
                </CardItem>
              </Body>
              <CardItem>
                <Text>        ด้วยเสน่ห์ของน้องแมวที่ทำให้ใครๆ ก็หลงรัก ถึงจะมีนิสัยที่เราก็ยากจะเดาใจ แต่น้องแมวก็เป็นสัตว์ที่เชื่องและชอบคลอเคลียกับเจ้าของ ในปัจจุบันเมื่อแมวอยู่ใกล้ชิดกับคนเรามากขึ้น น้องแมวจึงต้องพึ่งพาคนอย่างเรามากขึ้นตามไปด้วย และในฐานะที่น้องแมวเป็นเพื่อนที่ดีของเรา น้องแมวจึงสมควรที่จะได้รับความเอาใจใส่ในเรื่องความเป็นอยู่ที่ดี กิจกรรมที่เหมาะสมตามวัย การกิน การดูแลปกป้องร่างกายจากปรสิต และสิ่งสำคัญที่เราควรจะต้องรู้เกี่ยวกับน้องแมว เพื่อให้เรารู้จักและเข้าใจความเป็นน้องแมวมากยิ่งขึ้นก็คือพฤติกรรมตามธรรมชาติของน้องแมวนั่นเอง</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>พฤติกรรมทางสังคม: <Text style={{fontWeight: 'normal'}}>การเข้าสังคมของลูกแมวเริ่มตั้งแต่สัปดาห์ที่ 2 นับแต่ลืมตาดูโลก ช่วงเวลานี้เป็นเวลาที่สำคัญอย่างยิ่งในการกระตุ้นประสาทสัมผัส และเสริมสร้างพัฒนาการให้กับลูกแมวน้อย ช่วงวัยนี้จึงเป็นช่วงวัยที่น้องแมวจะเรียนรู้เกี่ยวกับการใช้ชีวิตร่วมกับเจ้าของ เราจึงควรฝึกให้น้องแมวคุ้นเคยกับคนตั้งแต่วัยนี้ ไม่ว่าจะเป็นการสัมผัส อุ้ม ขับถ่าย ทำความสะอาดร่างกาย หากน้องแมวไม่ได้ถูกเลี้ยงและไม่ถูกอุ้มจนกระทั่งอายุ 2 เดือน เมื่อน้องแมวโตเต็มวัยอาจไม่ยอมรับการสัมผัสจากคนหรือไม่ยอมให้อุ้ม</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>พฤติกรรมการสื่อสาร: <Text style={{fontWeight: 'normal'}}>น้องแมวสามารถสื่อสารได้หลายวิธี ไม่ว่าจะเป็นการสื่อสารโดยผ่านทางการขยับใบหู  การเคลื่อนไหวของร่างกาย การส่งเสียงหลากหลายเสียง เช่น การส่งเสียงฮึมฮัมในคอ (purr) เป็นต้น</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>พฤติกรรมการกิน: <Text style={{fontWeight: 'normal'}}>น้องแมวแรกเกิดจะกินนมแม่เป็นหลัก จนเมื่อเริ่มเข้าสู่ช่วงหลังหย่านมในช่วง 8 สัปดาห์ จึงเริ่มกินอาหารเม็ด เรียนรู้ที่จะกินน้ำ และสนุกกับอาหารที่หลากหลายมากขึ้น</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold', fontSize: 18,}}>สายพันธุ์แมว</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        แมวเปอร์เซีย (Persian) <Text style={{fontWeight: 'normal'}}>เป็นแมวที่สวยงามมากในทางฝั่งตะวันออกกลาง แน่นอนเลยว่ามีถิ่นกำเนิดอยู่ในแถบเปอร์เซีย หรือประเทศตุรกีกับอิหร่านในปัจจุบัน เปอร์เซียถือเป็นแมวต่างประเทศสายพันธุ์แรกๆ เลยก็ว่าได้ที่ถูกนำเข้ามาในประเทศไทย จึงทำให้แมวสายพันธุ์นี้ยังคงเป็นที่นิยมในหมู่คนรักแมว เพราะนอกจากจะมีหน้าตาน่าเอ็นดูแล้ว ขนฟูของเจ้าแมวเปอร์เซียนี้ยังมีสีสันที่หลากหลาย ลักษณะของเจ้าเปอร์เซียนั้นมีหัวและหน้ากลม หน้าผากโหนก แก้มเต็ม ดวงตากลมโต มีจมูกที่หัก พูดง่ายๆ ก็คือ สังเกตได้เมื่อมองจากด้านข้าง จะเห็นจุดหักระหว่างจมูกกับหน้าผากได้อย่างชัดเจนนั่นเองค่ะ และนอกจากหน้าตาที่น่ารักแล้ว ยังเป็นแมวที่ขี้ประจบ มีความซุกซน เข้ากับคนได้ง่าย และเป็นแมวที่มีไหวพริบมาก</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        อเมริกันช็อตแฮร์ (American Short Hair) <Text style={{fontWeight: 'normal'}}>แมวสายพันธุ์อเมริกาที่สืบเชื้อสายมาจากประเทศในแถบยุโรป และแพร่พันธุ์มายังอเมริกา เมื่อสมัยที่ชาวยุโรปเดินทางไปแสวงหาถิ่นที่อยู่ใหม่ โดยพวกเขาได้นำแมวอเมริกันช็อตแฮร์ติดเรือไปด้วย เพื่อป้องกันไม่ให้หนูทำลายข้าวของ และได้มีการพัฒนาสายพันธุ์ในเวลาต่อมา จนกระทั่งกลายเป็นแมวพื้นเมืองขนสั้นของอเมริกาไปในที่สุด จะมีขนาดกลางไปจนถึงขนาดใหญ่ ลำตัวโต มีกล้ามเนื้อแข็งแรง มองเห็นชัดเจน อกใหญ่ ขาใหญ่ ใบหูมีขอบเป็นทรงกลมมนส่วนหัวมีลักษณะเป็นรูปไข่ ดวงตากลมโตเป็นสีเขียวมรกต มีลักษณะสีขน ส่วนอุปนิสัยของอเมริกันช็อตแฮร์นั้นเป็นแมวที่ช่างสงสัย นิสัยร่าเริง ชอบเล่น มีเสน่ห์ แต่จะฝึกค่อนข้างยาก เจ้าของควรจะคลุกคลีและอยู่กับแมวให้มากๆ</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        สก็อตติช โฟลด์ (Scottish Fold) <Text style={{fontWeight: 'normal'}}>เป็นแมวที่มีถิ่นกำเนิดมาจากประเทศสกอตแลนด์ โดยแมวพันธุ์ Scottish Fold นี้ถูกค้นพบครั้งแรกในปี ค.ศ.1961 ในสกอตแลนด์ ชื่อว่า Susie มีลักษณะเป็นแมวสีขาวที่มีหูพับไปมาทั้งด้านหน้า และด้านหลังได้ ใบหน้ามีลักษณะคล้ายนกฮูก หรือหน้าของตัวนาก ผู้ที่สังเกตเห็นคนแรกคือ William Ross มีอาชีพเป็นคนเลี้ยงแกะ William และ Marry ภรรยาของเขาเป็นคนที่รักแมวมาก ทั้งคู่สนใจในตัวของเจ้า Susie เป็นอย่างมากมาก เมื่อเจ้า Susie ได้ออกลูกเป็นลูกแมวหูพับ 2 ตัว ครอบครัวของเขาจึงขอลูกแมวตัวเมียตัวหนึ่งมาเลี้ยง และได้ตั้งชื่อว่า Snooks นี่จึงเป็นต้นกำเนิดของสายพันธุ์ Scottish Fold เจ้าเหมียวสายพันธุ์นี้จะมี 2 แบบ คือ ขนสั้นกับขนยาว ซึ่งทั้ง 2 แบบจะมีลักษณะตัวกลม หัวกลม ช่วงคอสั้น ดวงตากลมใหญ่ และมีหูตั้งตรงขนาดกลาง ไปจนถึงหูพับขนาดเล็ก ปลายหูส่วนใหญ่จะกลม หูของลูกแมวจะเริ่มพับในช่วง 2-3 อาทิตย์แรก ซึ่งบางตัวมีปากโค้งได้รูปรับกับคางพอดี จึงเป็นที่มาของสมญานามว่า Smiling Cat หรือ แมวยิ้ม นั่นเอง บางตัวอาจไม่ชอบนอนบนตัก แต่เลือกที่จะอยู่ใกล้ๆ กับเจ้าของแทน เหตุอาจเป็นเพราะส่วนหนึ่งเจ้าเหมียวพันธุ์นี้มีอุปนิสัยน่ารัก และค่อนข้างสุภาพเรียบร้อย แถมยังขี้อ้อน</Text></Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}