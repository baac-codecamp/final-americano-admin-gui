import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

class FriendListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "initial" }}>
        <Link className="ml-10" to="/login">Import File</Link> 
          <Link className="ml-10" to="/login">Login</Link> 
          <Link className="ml-10" to="/signup">Signup</Link> 
          {/* <Link className="ml-10" to="/changepassword">Change Password</Link> */}
      </div>
    );
  }
}

export default FriendListPage;
