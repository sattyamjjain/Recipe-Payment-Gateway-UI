import React from "react";
import styled from 'styled-components';
import { Layout, Typography, Button,notification  } from 'antd';
import { List, Avatar } from 'antd';
import axios from 'axios';
import CardContainer from './CardContainer'
import { RightOutlined} from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const HeaderContainer = styled.div`
    color:#ffffff;
`;

export default class HomePage extends React.Component {

    constructor(props){
        super(props)
        this.state={
            user:null
        }
    }


    render() {
        const { recipeList } = this.props;
        console.log('recipe',recipeList)
        return (
        <Layout>
            <Header>
                <HeaderContainer>
                    Recipe Payment Booking App
                </HeaderContainer>
            </Header>
            <Content>
                    <CardContainer recipeList={recipeList}/>
            </Content>
        </Layout>
        );
    }
}
