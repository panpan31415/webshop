import { IAuthentication } from "./stateTypes";
import {
  AUTHENICATION_REQUEST_PENDING,
  AUTHENICATION_REQUEST_FAIL,
  AUTHENICATION_REQUEST_SUCCESS,
  LOGOUT
} from "../actions/type";
import * as Redux from "redux";
const initialAuthentication: IAuthentication = {
  loginStatus: false,
  user: {
    password: "",
    userName: "",
    loginTime: "0000-00-00 00:00:00",
    logoutTime: "0000-00-00 00:00:00",
    IP: "255.255.255.255"
  }
};

const authenticate: Redux.Reducer<IAuthentication, Redux.AnyAction> = (
  authenticate = initialAuthentication,
  action = { type: "" }
) => {
  switch (action.type) {
    case AUTHENICATION_REQUEST_SUCCESS: {
      // should also check login sucess or fail, but ignored
      const _user = action.payload["0001"];

      return {
        loginStatus: true,
        user: {
          password: _user.password,
          userName: _user.userName,
          loginTime: loggingTime(),
          logoutTime: "0000-00-00 00:00:00",
          IP: "255.255.255.255"
        }
      };
    }
    case AUTHENICATION_REQUEST_PENDING: {
      console.log("login request send, waiting for response... ");
      return authenticate;
    }
    case AUTHENICATION_REQUEST_FAIL: {
      console.log("login request send, waiting for response... ");
      return authenticate;
    }
    case LOGOUT: {
      return initialAuthentication;
    }
    default: {
      return authenticate;
    }
  }
};
export default authenticate;

function loggingTime() {
  const time = new Date();
  return `${time.getFullYear()}-${
    time.getMonth() + 1 < 10 ? "0" + time.getMonth() + 1 : time.getMonth() + 1
  }-${time.getDate() < 10 ? "0" + time.getDate() : time.getDate()} ${
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
  }:${time.getMinutes() < 10 ? "0" : +time.getMinutes()}:${
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
  }`;
}
