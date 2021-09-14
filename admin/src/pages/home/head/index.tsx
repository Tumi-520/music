import React from "react";
import { Avatar } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import MKF from "../../../assets/img/mkf.png";
const Head = () => {
  const baseCls = "head";
  // @ts-ignore
  const { login } = useSelector((state) => state.login);
  return (
    <div className="header-wrapper">
      <div className={`${baseCls}`}>
        <div className={`${baseCls}-logo`}>
          <span className={`${baseCls}-logo-icon`}></span>
          <span className={`${baseCls}-logo-title`}>网易云音乐</span>
        </div>
        <div className={`${baseCls}-search`}>
          <input
            type="text"
            className={`${baseCls}-search-input`}
            placeholder="搜索"
          />
          <div className={`${baseCls}-search-btn`}>
            <img
              src={MKF}
              alt="听歌识曲"
              className={`${baseCls}-search-btn-img`}
            />
          </div>
        </div>
        <div className={`${baseCls}-fun`}>
          <Avatar className={`${baseCls}-fun-img`} />
          {!login ? (
            <div className={`${baseCls}-fun-status`}>未登录</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Head;
