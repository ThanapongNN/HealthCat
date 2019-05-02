import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Title, } from 'native-base';

export default class Tips02EN extends Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cat's excretion behavior</Title>
          </Body>
        </Header>
        <Content>
            <Card transparent>
              <Body>
                <CardItem>
                    <Image source={require('../../img/swiper-2.jpg')} style={{height: 200, width: 400}}/>
                </CardItem>
              </Body>
              <CardItem>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Excretion problems</Text>
              </CardItem>
              <CardItem>
                <Text>        Most people who feed cats will practice the habit of kittens for kittens since they are small. By finding a tray or pickup truck for the cat to excrete. Until the cat excretes normally or has been excreted systematically. But when the behavior changed, refused to excrete in the pickup truck that we prepared This problem may be caused by a sand pick-up cat that is not clean enough. Causing the cat to not excrete or not excrete in the prepared sand tray Should immediately explore and clean or change the sand. Should not hit or punish because it will cause the cat to be paranoid and unable to train again. Kittens can control their own excretion at the age of 3 weeks and at the age of 1 month. Will begin to find a place to excrete by observing the behavior of the mother cat and relying on the smell Digging and dredging After complete excretion is a natural behavior of cats. Therefore, there is no need to train the kitten to excrete. Except in the case of an orphaned kitten that was raised in the house.  Training is nothing more. Just after every kitten has finished eating, carry it in the sandbox. Leave the kitten just do not touch the kitten's foot to scrub the sand or blocking kittens from pick-up. Because equal to creating a negative experience with the use of sandbox at first, if the kitten Starting to excrete in a pickup truck may leave the excretory a little. To stimulate the kitten to excrete the same When you repeat many on the day the kitten learns to excrete in the sandbox itself. Whether cats, children, cats grow the male or female cat, the excretion behavior will have the same procedure. Starting from aiming for excretion When getting the place and then start digging into shallow holes Shrink down to excrete into the hole turned to sniff before finally drowning. Some cats may not do all of these steps. But your cat normally does not have all the steps. Such as rushing to shoot and hurriedly leaving Doi dig a hole or strange symptoms, such as shaking his legs strong while in the sandbox It is possible that the cat toilet management at your home is having problems and needs to be fixed</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold', fontSize: 18,}}>Factors affecting the decision to use a cat's toilet</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        1.Place<Text style={{fontWeight: 'normal'}}> Should put the sandbox in the room where the cat will spend most of the time in that area by placing it in an area that is easy for cats to access Do not place it near to the area where water is eaten, eat, or at the resting area of the cat. The room chosen to be placed in the sandbox should be quiet and not crowded. Avoid the kitchen or TV room that is often noisy. If the owner wants to move the sandbox from the original location to the appropriate area gradually Moving the sand 1 inch per day will help reduce the stress of changing the sand tray. For homes that have problems with the cat's quarrel in the house Antagonists trap the entrance to the cat until the other cat doesn't dare to enter the bathroom or some of them may be intercepted while leaving the room after the excretion is complete</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        2.Sand box<Text style={{fontWeight: 'normal'}}> A good sandbox should be at least 1.5 times the width and length of the cat. Due to the time of excretion, the cat will enter the whole sandbox. Commonly used as a plastic tray in which cats learn to use easily and easy to clean A sandbox with a cover is another type that some owners choose to use. The advantage is privacy and quiet. And the cat rubbing the sand does not spread out or the dog in the house cannot go into the sand to play but there are disadvantages: bad ventilation inside Need to be cleaned frequently. And some cats may not like the narrow places that have no way to escape. Statistical data show that most cats prefer open-air sandbox If staying in a place that is calm enough for houses with cats older than 10 years or cats with arthritis Consider using a sandbox with a side opening. Will help the cat to step into the sand tray easier than usual</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        3.Sand<Text style={{fontWeight: 'normal'}}> There are 3 types of cats that are used frequently</Text></Text>
              </CardItem>
              <CardItem>
                <Text>        Clay Litters Most cats tend to like this type of sand. Because close to natural especially the type that has a rather fine texture, these sand has a good ability to absorb urine and just help to cover the excreta Makes it less odor Therefore needing to scoop the excreta and sand that is often messed up</Text>
              </CardItem>
              <CardItem>
                <Text>        Clumping Litters This type of sand, when found with urine, will catch together as a lump. Easy to trap but the disadvantage is that the fine texture of the sand is       more dusty and is more likely to stick to the cat's feet in the house</Text>
              </CardItem>
              <CardItem>
                <Text>        Silica pellet Litters have very good absorbency of urine, which makes them almost no problem. Smell it When absorbing urine, the silica will change color, allowing the owner to scoop and change quickly because it is easily noticeable. And different from knowing or quite natural soil</Text>
              </CardItem>
              <CardItem>
                <Text>        Each cat has different preferences for each type of sand. In the beginning, the owner had to experiment with the use of several sand trucks to put in each type and put them together. Notice how your cat's edge goes to excrete sand. Do not forget that the amount of sand put must be sufficient. Let the cat dig before excretion and drown after shooting. So that cats can express their behavior properly. Recommended is that the sand height should be at least 3 to 4 inches</Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        4.Cleanliness and smell<Text style={{fontWeight: 'normal'}}> How do people like to go to public toilets that are dirty? The cat is the same. In the nature of most cats, there are 2 to 4 times daily urination and 1 time a day stool, which we cannot clean all day. The owner needs to scoop the dirty sand from the sandbox at least 1 day, 2 times a day, but in the case of raising more than 1 cat, the lap cleaning is necessary more often because the cat will not like it at all. If there is a smell of the excretion of other cats in the sandbox</Text></Text>
              </CardItem>
              <CardItem>
                <Text style={{fontWeight: 'bold'}}>        5.Experience and health<Text style={{fontWeight: 'normal'}}> The owner should avoid creating a bad experience for the cat. When the cat is in the sandbox Do not disturb Do not catch and carry. Or trying to enter the cat medicine in that area. Because these events will cause the cat not to come to the sandbox again Always take the cat to check for health. If seeing something unusual Cat with constipation or bladder inflammation Often linking the pain of excretion and using sandbox together</Text></Text>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
