import React, {Component} from 'react'
import {Image} from 'react-native'
import {Tab,Tabs,List,ListItem,Text,Icon,Container,Header,Content,Footer,Thumbnail,Spinner,Form,Item,Input,Label,Button,Left,Right,Body,Col,Row,Grid,Title,FooterTab,Fab,DeckSwiper,Card,CardItem} from 'native-base'
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
class App1 extends Component {
    render() {
        return(
<DeckSwiper style={{backgroundColor:'green'}}
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
   <Spinner/>
</Card>
}/>

 )
}
}
export default App1