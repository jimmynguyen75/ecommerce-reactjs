"use client";

import { Avatar, Card, Col, Divider, List, Modal, Row, Skeleton, Spin } from "antd";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const { Meta } = Card;

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface UserType {
  user_id: number;
  age: string;
  location: string;
  image: string;
  name: string;
}

interface RatingType {
  book_rating: number;
  book_title: string;
  book_author: string;
  image: string;
  isbn: string;
  publisher: string;
  year_of_publication: string;
}
const Lab4: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [userTemp, setUserTemp] = useState<UserType[]>([]);
  const [user, setUser] = useState<UserType[]>([]);
  const [rating, setRating] = useState<RatingType[]>([]);
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch("https://randomuser.me/api/?results=100&inc=name,gender,email,nat,picture&noinfo")
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const loadUers = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`);
    const list = await res.json();
    setUserTemp(list.users);
  };
  const getRatings = async (searchTerm: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommend/${searchTerm}`);
    const list = await res.json();
    setRating(list.recommendations);
  };
  const loadRatings = async (searchTerm: number) => {
    setSpin(true);
    setRating([]);
    setOpen(true);
    console.log("id", searchTerm);
    await getRatings(searchTerm);
    setSpin(false);
  };
  useEffect(() => {
    loadMoreData();
    loadUers();
  }, []);
  useEffect(() => {
    data &&
      userTemp.map(async (item, index) => {
        item.image = await data[index]?.picture.large;
        item.name = data[index]?.name.last + " " + data[index]?.name.first;
      });
    userTemp && setUser(userTemp);
  }, [userTemp, data]);

//   console.log(user);
  console.log(rating);
  return (
    <>
      <Modal title="Book recommendations" width={800} centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} >
      <Spin spinning={spin} tip="Loading" size="large">
      <Skeleton active loading={spin}/>
        <Row gutter={16}>
          {rating ? rating.map((item) => (
            <Col span={8} key={item.isbn}>
              <Card hoverable cover={<img  alt="example" src={item.image} />}>
                <Meta title={"[Rate: " + item.book_rating.toFixed(1) + "] " + item.book_title} description={item.book_author} />
              </Card>
            </Col>
          )) : <div>User này không có rating</div>}
        </Row>
        </Spin>
      </Modal>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        {user && (
          <InfiniteScroll
            dataLength={user.length}
            next={loadMoreData}
            hasMore={user.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
            className="p-10"
          >
            <List
              dataSource={user}
              renderItem={(item) => (
                <List.Item key={item.user_id}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.image} size={"large"} />}
                    title={item.name + " [" + item.user_id + "]"}
                    description={item.location}
                  />
                  <button className="heroButton" onClick={() => loadRatings(item.user_id)}>
                  Recommendations
                  </button>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Lab4;
