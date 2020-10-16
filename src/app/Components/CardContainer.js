import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, List, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const MainContainer = styled.div`
  padding: 5vh;
`;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  render() {
    const { recipeList } = this.props;
    var data = [];

    if (recipeList !== null) {
      data = recipeList;
    }

    return (
      <MainContainer>
        <List
          grid={{
            gutter: 16,
            column: 5,
          }}
          style={{ padding: "1vh" }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Card
                style={{ width: 300 }}
                cover={<img alt={item.name} src={item.image} />}
                actions={[
                  <Button type="text">
                    <Link to={`/${item.id}/payment`} style={{color:'inherit'}}>Go to Payment</Link>
                  </Button>,
                ]}
              >
                <Meta title={item.name} description={item.description} />
              </Card>
            </List.Item>
          )}
        />
      </MainContainer>
    );
  }
}
