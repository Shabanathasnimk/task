import React, {useEffect,useState,useRef} from 'react'

import styled from 'styled-components';
import Background from '../../assets/images/bg.png';
export default function Main() {
    const [data,setData] = useState([
        {
            id:1,
            image : require('../../assets/images/game.png'),
            title: '5000+ video games available'
        },
        {
            id:2,
            image : require('../../assets/images/ball.png'),
            title: 'Available for all Xbox consoles'
        },
        {
            id:3,
            image : require('../../assets/images/tick.png'),
            title: 'Trusted by 10000+ Customers'
        },
    ])
    const [social,setSocial] = useState([
        {
            id:1,
            image : require('../../assets/images/insta.png'),
        },
        {
            id:2,
            image : require('../../assets/images/youtube.png'),
        },

        {
            id:3,
            image : require('../../assets/images/mes.png'),
        },

        {
            id:4,
            image : require('../../assets/images/twitter.png'),
        },


    ])
  return (
    <MainContainer>
    <Header>
      <HeaderLeft>
            <LogoImage src={require("../../assets/images/logo.png")} lt ="logo" />
      </HeaderLeft>
      <HeaderMiddle>
            <Items>
                <Title>Games</Title>
            </Items>
            <Items>
                <Title>Browse Games</Title>
                <DropImage src={require('../../assets/images/drop.png')} />
            </Items>
            <Items>
                <Title>Store</Title>
            </Items>
      </HeaderMiddle>
      <HeaderRight>
            <Signup>Signup</Signup>
            <LogButtons>Login</LogButtons>
      </HeaderRight>
    </Header>
    <SpotlightContainer style={{backgroundImage: `url(${require('../../assets/images/bg.png')})`,}} >
      {/* <LeftButton><NextImage src={require('../src/assets/images')} /></LeftButton> */}
      <SpotlightTitle>MultiVersus</SpotlightTitle>
      <SpotlightContent>Now Officially free to play for all Xbox users.</SpotlightContent>
      <GetLink>Get in now!</GetLink>
      {/* <LeftButton><NextImage src={require('../src/assets/images')} /></LeftButton> */}
    </SpotlightContainer>
    <DetailContainer>
      <TopContainer>
        <TitleStore>Why eXStore ?</TitleStore>
        <TDetailContent>WE are the Official Xbox partner in Indonesia that provides official video games.</TDetailContent>
      </TopContainer>
      <BottomContainer>
      {data.map((item)=>(
        <BottomItems>
        <ItemImage src={item.image} />
        <ItemTitle>{item.title}</ItemTitle>
      </BottomItems>

      ))}
        
      </BottomContainer>
    </DetailContainer>
    <Footer>
      <FooterLeft>
        <LogoImage src={require('../../assets/images/logo.png')} />
      </FooterLeft>
      <FooterMiddle>
        <FooterItem>
          <FooterTitle>Menu</FooterTitle>
          <FooterList>
            <ListItem>Order tracking</ListItem>
            <ListItem>Store location</ListItem>
            <ListItem>Return policy</ListItem>
            <ListItem>Support</ListItem>
          </FooterList>
        </FooterItem>
        <FooterItem>
          <FooterTitle>Resources</FooterTitle>
          <FooterList>
            <ListItem>Blog</ListItem>
            <ListItem>Help center</ListItem>
            <ListItem>Documentation </ListItem>
            <ListItem>Guidelines</ListItem>
          </FooterList>
        </FooterItem>
      </FooterMiddle>
      <FooterRight>
      <FooterTitle>Follow us on :</FooterTitle>
      <SocialList>
     { social.map((item)=>(
            <SocialSpan>
                <SocialImage src={item.image} />
            </SocialSpan>

     ))}

      </SocialList>
      </FooterRight>

     
    </Footer>
    <BottomFooter>
        <BottomTitle>© 2024 Exstore</BottomTitle>
    </BottomFooter>
  </MainContainer>
  )
}
const MainContainer = styled.div``
const Header = styled.div`
padding: 0 30px;
height : 83px;
width: 100%;
justify-content: space-between;
align-items: center;
background-color: #000;
flex-direction: 'row';
display:flex;

`
const HeaderLeft = styled.div`
justify-content: center;
align-items: center;
width: 20%;
display:flex;


`
const LogoImage = styled.img`
`
const HeaderMiddle = styled.div`
display:flex;
flex-direction: 'row';
justify-content: space-between;
align-items: center;

`
const Items = styled.div`
display:flex;
margin-right: 25px;
align-items: center;
justify-content: center;

`
const Title = styled.a`
cursor:pointer ;
color: #fff;
font-size: 18px;
`
const DropImage = styled.img`
margin-left:7px
`
const HeaderRight = styled.div`
width: 30%;
display: flex;
justify-content: center;
align-items: center;
`
const Signup = styled.a`
font-size: 15px;
color: #fff;
border: 1px solid #3B44F6;
border-radius: 8px ;
padding: 10px 12px;
background-color: #3B44F6;
margin-right: 10px;
cursor:pointer ;

`
const LogButtons = styled.a`
font-size: 15px;
color: #fff;
border: 1px solid #fff;
border-radius: 8px ;
padding: 10px 12px;
background-color: #000;
cursor:pointer ;

`
const SpotlightContainer = styled.div`
/* background-color: red; */
background-image: url('../../assets/images/bg.png');
background-repeat: no-repeat;
background-size: 100%;
width: 100%;
height: calc(100vh - 83px);
padding : 30px;
`
const LeftButton = styled.div``
const SpotlightTitle = styled.h2`
font-size: 48px;
font-weight: 600;
color:#fff;
margin-bottom: 30px
`
const SpotlightContent = styled.div`
font-size: 24px;
font-weight: 500;
color:#fff;
width:45%;
margin-bottom: 50px;
`
const GetLink = styled.a`
font-size: 15px;
color: #fff;
border: 1px solid #3B44F6;
border-radius: 8px ;
padding: 10px 12px;
background-color: #3B44F6;
cursor:pointer ;
`
const DetailContainer = styled.div`
align-items: center;

`
const TopContainer = styled.div``
const TitleStore = styled.h3`
font-size:36px;
font-weight: 600;
margin-bottom: 30px;
text-align: center;
`
const TDetailContent = styled.p`
font-size:18px;
font-weight: 400;
margin-bottom: 30px;
text-align: center;
`
const BottomContainer = styled.div`
display: flex;
justify-content: space-between;
padding : 30px;
align-items: center;
`
const BottomItems = styled.div`
width: 25%;
align-items: center;
display: flex;
flex-direction: column;



`
const ItemImage = styled.img`
display: block;
width:94px;
height:94px;
`
const ItemTitle = styled.h4`
font-size: 20px;
font-weight: 500;
text-align:center;
width: 70%
`
const Footer = styled.div`
display: flex;
justify-content: space-between;
padding:40px;
background-color: #000;

`
const FooterLeft = styled.div`
margin-top:20px;
`
const FooterMiddle = styled.div`
display: flex;
width: 30%;
justify-content: space-between;
`
const FooterItem= styled.div``
const FooterTitle = styled.h5`
color: #fff;
font-size: 18px ;
font-weight: 600 ;
`
const FooterList = styled.div``
const ListItem = styled.p`
color: #A0A0A0;
font-size: 16px ;
font-weight: 400 ;
`
const FooterRight = styled.div`
width: 30%
`
const SocialList = styled.div`
display: flex;
`
const SocialSpan = styled.div`
margin-right:20px;
border-radius: 50%;
background-color: #262626;
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
`
const SocialImage = styled.img``
const BottomFooter = styled.div`
background-color: #000;
border-top: 1px solid #0E0E0E;
`
const BottomTitle = styled.p`
text-align: center;
color: #A0A0A0;
padding : 20px 0 30px
`



