import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShow } from "../../store/login";
import { Modal, Button } from "antd";
import Head from "./head";
import LeftNav from './left-nav'
import Footer from "./footer";
import Content from "./content";
const Home = () => {
  // @ts-ignore
  const { show } = useSelector((state) => state.login);
  const disaptch = useDispatch();
  const handleOk = () => {
    disaptch(changeShow(false));
  };

  const handleCancel = () => {
    disaptch(changeShow(false));
  };
  return (
    <div>
      {/* <Button onClick={() => disaptch(changeShow(true))}>show</Button>
      {show ? (
        <Modal
          title="Basic Modal"
          visible={show}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          hello
        </Modal>
      ) : null} */}
      <Head />
      <LeftNav />
      <Content />
      <Footer/>
    </div>
  );
};

export default Home;
