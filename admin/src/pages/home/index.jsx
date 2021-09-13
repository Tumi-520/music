import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeShow } from "../../store/login";
import { Modal, Button } from "antd";
const Home = () => {
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
      <Button onClick={() => disaptch(changeShow(true))}>show</Button>
      {show ? (
        <Modal
          title="Basic Modal"
          visible={show}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          hello
        </Modal>
      ) : null}
    </div>
  );
};

export default Home;
