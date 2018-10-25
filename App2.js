import React, {Component} from 'react'
import {Image} from 'react-native'
import {DatePicker,Tab,Tabs,List,ListItem,Text,Icon,Container,Header,Content,Footer,Thumbnail,Spinner,Form,Item,Input,Label,Button,Left,Right,Body,Col,Row,Grid,Title,FooterTab,Fab,DeckSwiper,Card,CardItem} from 'native-base'
var daftarSwipe = [
    {
      text:'Orang 1',name:'Satu',
      image: require('./gambar/1.png')
    },
    {
      text:'Orang 2',name:'Dua',
      image: require('./gambar/2.jpg')
    },
    {
      
      text:'Orang 3',name:'Tiga',
      image: require('./gambar/3.jpg')
    },
  ]
class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
    render() {
        return(
            <Container>
                <DeckSwiper
 dataSource={daftarSwipe} 
 renderItem={item=>
 <Card style={{ elevation: 3 }}>
   <CardItem>
     <Left>
       <Thumbnail source={item.image}/>
        <Body>
          <Text>{item.text}</Text>
          <Text note>{item.text}</Text>
        </Body>
     </Left>
   </CardItem>
   <CardItem cardBody>
    <Image style={{height:300, width:200, flex:1}} source={item.image}/>
   </CardItem>
   <CardItem>
    <Icon name="heart" style={{ color:'pink' }}/>
    <Text>{item.text}</Text> 
   </CardItem>
</Card>
}
 />

            <Header />
            <Content style={{backgroundColor:"green"}}>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "black" }}
                placeHolderTextStyle={{ color: "blue" }}
                onDateChange={this.setDate}
                />
                <Text>
                  Date: {this.state.chosenDate.toString().substr(4, 12)}
                </Text>
            </Content>
          </Container>

 )
}
}
export default App2