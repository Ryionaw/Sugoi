import React, {Component} from 'react'
import {Image} from 'react-native'
import {Tab,Tabs,List,ListItem,Text,Icon,Container,Header,Content,Footer,Thumbnail,Spinner,Form,Item,Input,Label,Button,Left,Right,Body,Col,Row,Grid,Title,FooterTab,Fab,DeckSwiper,Card,CardItem} from 'native-base'


class App3 extends Component {
  constructor() 
  { super(); 
    this.state = {fab: true}; } 
  render() {

    return(
      <Container>
        <Header searchBar rounded style={{backgroundColor:'green'}}>
        <Item>
          <Icon name="search" />
          <Input placeholder="Cari di sini......."/>
        </Item>
        </Header>
        <Header>
          <Left>
            <Button>
              <Icon name='home'/>
            </Button>
          </Left>
          <Body style={{flex:1}}><Title style={{alignSelf:'center'}}>Pembayaran</Title></Body>
          <Right>
            <Button>
              <Icon name="share"/>
            </Button>
          </Right>
        </Header>
    <Content>
      <Grid>
        <Row>
          <Col style={{alignItems:'center',backgroundColor:'orange',height:100}}><Thumbnail large source={require('./gambar/bca.jpg')}/></Col>
          <Col style={{alignItems:'center',backgroundColor:'orange',height:100}}><Thumbnail large source={require('./gambar/mandiri.jpg')}/></Col>
          <Col style={{alignItems:'center',backgroundColor:'orange',height:100}}><Thumbnail large source={require('./gambar/bri.jpg')}/></Col>
        </Row>
      </Grid>
      <Grid>
        <Row>
          <Col style={{alignItems:'center',backgroundColor:'orange',height:100}}><Thumbnail large source={require('./gambar/5.jpg')}/></Col>
          <Col style={{alignItems:'center',backgroundColor:'yellow',height:100}}><Icon name='home' style={{paddingTop:25,fontSize:50}}/></Col>
          <Col style={{alignItems:'center',backgroundColor:'orange',height:100}}><Thumbnail large source={require('./gambar/3.jpg')}/></Col>
        </Row>
      </Grid>
    </Content>
      <Footer>
        <FooterTab>
          <Button active>
            <Icon name="apps"/>
            <Text>Menu</Text>
          </Button>
          <Button active>
            <Icon name="home"/>
            <Text>Home</Text>
          </Button>
        </FooterTab>
      </Footer>
  <Fab
  active={this.state.fab}
  direction='up' position='bottomRight'
  onPress={()=>{this.setState({fab: !this.state.fab})}}
  style={{backgroundColor:'pink'}}
  >
  <Icon name='camera'/>
    <Button style={{backgroundColor: 'green'}}>
    <Icon name='logo-whatsapp' />
    </Button>
      <Button style={{backgroundColor: 'blue'}}>
    <Icon name='logo-facebook' />
    </Button>
    <Button style={{backgroundColor: 'red'}}>
    <Icon name='person' />
    </Button>
  </Fab>

</Container>

    )
  }
}

export default App3