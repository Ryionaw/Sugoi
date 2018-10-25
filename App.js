// import React, {Component} from 'react'
// import {Text,Thumbnail, Icon,Label,Input, Container, Header, Content, Footer, Spinner, Form, Item} from 'native-base'

// class App extends Component {

//   render() {

//     return(
//       <Container>
//         <Header></Header>
//         <Content>
//           <Text>Tes Native Base</Text>
//           <Icon name='appstore' style={{color:'red'}}/>
//           <Icon name='facebook-square' type="FontAwesome" style={{color:'blue'}}/>
//          <Form>
//            <Item floatingLabel>
//            <Label> Username </Label><Input/>
//           </Item>
//           <Item floatingLabel last>
//            <Label> Password  </Label><Input/>
//           </Item>
//          </Form>
//           <Thumbnail square source={{uri:'https://www.allkpop.com/upload/2018/08/af_org/22142834/sana-onf.jpg'}} /> 
//           <Spinner/>
//         </Content>
//         <Footer></Footer>
//       </Container>
//     )
//   }
// }

// export default App

// ----------------------------------------------------------------------------------------------------------------------------------------
// LIST ITEM
// import React, {Component} from 'react'
// import {List,ListItem,Text,Icon,Container,Header,Content,Footer,Thumbnail,Spinner,Form,Item,Input,Label,Button,Left,Right,Body} from 'native-base'

// class App extends Component {

//   render() {

//     return(
//       <Container>
//         <Header></Header>
//         <Content>
//          <List>
//           <ListItem avatar>
//           <Left>
//             <Thumbnail source={require('./gambar/1.png')}/>
//           </Left>
//           <Body>
//             <Text>Ini ListItem Pertama</Text>
//             <Text note>Ini ListItem Pertama</Text>
//           </Body>
//           <Right><Icon name="share"/></Right>
//           </ListItem> 
//          </List>
//         </Content>
//         <Footer></Footer>
//       </Container>
//     )
//   }
// }

// export default App
// ----------------------------------------------------------------------------------------------------------------------------------------
import React, {Component} from 'react'
import {Image} from 'react-native'
import {Tab,Tabs,List,ListItem,Text,Icon,Container,Header,Content,Footer,Thumbnail,Spinner,Form,Item,Input,Label,Button,Left,Right,Body,Col,Row,Grid,Title,FooterTab,Fab,DeckSwiper,Card,CardItem} from 'native-base'
import Tab1 from './App1'
import Tab2 from './App2'
import Tab3 from './App3'
import Tab4 from './App4'

class App extends Component {
  render() {

    return(
      <Container style={{backgroundColor:"green"}}>
      <Header hasTabs />
        <Tabs>
          <Tab heading="Pilih Kencan">
            <Tab1 />
          </Tab>
          <Tab heading="Pilih Tanggal">
            <Tab2 />
          </Tab>
          <Tab heading="Bayar">
            <Tab3 />
          </Tab>
          <Tab style={{}}heading="Pesan Sponsor">
            <Tab4 />
          </Tab>
        </Tabs>
        

</Container>

    )
  }
}

export default App