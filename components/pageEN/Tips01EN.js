import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Title, } from 'native-base';

export default class Tips01EN extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Characteristics of cats and species of cats</Title>
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
                <Text>        The charm of cats that make people fall in love. It has a habit that we can hardly guess. But the cat is a tame animal and likes to snuggle with the owner. At present, when cats are closer to people.  Cat have to rely more on people like us as well. And as a cat is our good friend the cat therefore deserves the attention and the well-being. Appropriate activities according to age. Eating . Caring for protecting the parasites and important things that we should know about cats in order for us to know and understand more about being a cat, it is natural behavior of cats</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>Social behavior: <Text style={{fontWeight: 'normal'}}>The society of kittens starts from the second week since open the eyes in the world. This period is a very important time in sensory stimulation. And enhance the development of the little kitten. This age is the age that the cat will learn about living with the owner. We should train cats to become familiar with people in this era. Whether it is touching, carrying, excretion, cleaning the body. If the cat is not raised and not carried until 2 months old when younger cats are grown up, they may not accept contact from people or refused to hold</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>Communication behavior: <Text style={{fontWeight: 'normal'}}>Cats can communicate in many ways. Whether it is communication through the ears Body movement Voice transmission. Such as humming in the neck (purr) etc</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>Eating behavior: <Text style={{fontWeight: 'normal'}}>The newborn cat will eat breast milk primarily. Until when he entered the weaning period for 8 weeks, he began to eat grain and learn to eat and enjoy more varied food</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold', fontSize: 18,}}>Cat breed</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        Persian <Text style={{fontWeight: 'normal'}}>Is a very beautiful cat in the Middle East of course it is native to the Persian region. Or Turkey and Iran today. Persia is considered the first foreign cat species. That was imported into Thailand. Therefore making this cat breed still popular among cat lovers because in addition to having a cute face The fur of the Persian cat is also colorful. The appearance of the Persian god has a head and a round face, a forehead, a cheek, a full cheek, a large round eye, a broken nose. In simple terms, it can be observed when viewed from the side. Can clearly be seen and besides the cute face Is also a cat that is flattering, easy to be mischievous. And a cat that is very witty</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        American Short Hair <Text style={{fontWeight: 'normal'}}>American cat species that descended from European countries and breeding to America When the Europeans traveled to seek a new residence by which they brought the American Shots with a cat. To prevent mice from destroying their belongings and have developed species at a later time until becoming a native cat, the short hair of America in the end. There will be a medium to large size, a large body with strong muscles. See clearly, big breasts, big legs, ears with rounded edges, rounded   the head looks oval. The eyes are big, emerald green, with hair color. As for the character of American Short Hair, it is a cat that is suspicious, cheerful, likes to play, has charm but is quite difficult to practice the owner should be familiar with and live with the cat a lot</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        Scottish Fold <Text style={{fontWeight: 'normal'}}>Is a cat that originated from Scotland by Scottish Fold cats. This was first discovered in 1961 in Scotland called Susie. Looks like a white cat with folded ears on the front and the back the face looks like an owl. Or the face of the otter the first observer is William Ross. His career as a shepherd is William and Marry. His wife is very fond of cats. Both were very interested in Susie's character. When Susie had made two kittens, a folded ear. His family asked for a female cat to feed. And named Snooks. Therefore, the origin of the Scottish Fold breed. This cat species has 2 types: short hair and long hair, both of which are round, round head, short neck, big round eyes, and medium sized ears. To small folded ears Most ears are round. Kitten's ears will start to fold in the first 2-3 weeks. Some have a curved mouth. Is the source of the nickname " Smiling Cat " Some people may not like to lie on the lap. But choose to stay close with the owner instead the reason may be because the part of this cat has a cute character. And quite polite Plus perverse</Text></Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
