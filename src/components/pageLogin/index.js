import React from "react";
import styled from "styled-components";
import { Form, Icon, Input, Button } from "antd";

const SetPageLogin = props => {
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields(async (err, values) => {
    //   if (!err) {
    //     this.setState({ setLoad: true });
    //     // console.log('Received values of form: ', values)
    //     let fetchData = await axios.post("/api/login", values).catch(e => {
    //       return { data: { status: 404, message: e } };
    //     });
    //     if (fetchData.data.status === 200) {
    //       document.cookie = await `token=${fetchData.data.token}`;
    //       this.setState({ loginSuccess: true, setLoad: false });
    //     } else {
    //       if (fetchData.data.message === "password fail") {
    //         alert("รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบ");
    //         this.setState({ setLoad: false });
    //       } else if (fetchData.data.message === "Not Active") {
    //         alert("รหัสนี้ยังไม่ได้รับการ Active กรุณาติดต่อเจ้าหน้าที่");
    //         this.setState({ setLoad: false });
    //       } else if (fetchData.data.message === "username not database") {
    //         alert("ไม่พบ username นี้ในระบบ");
    //         this.setState({ setLoad: false });
    //       } else {
    //         alert("ไม่สามารถเข้าสู่ระบบได้ กรุณาแจ้งเจ้าหน้าที่");
    //         this.setState({ setLoad: false });
    //       }
    //     }
    //   } else {
    //     alert("กรุณากรอก Username และ Password ให้ครบ");
    //     this.setState({ setLoad: false });
    //   }
    // });
  };
  return (
    <Container>
      <BoxLogin>
        <Form onSubmit={handleSubmit}>
          <BoxHeader>
            <img
              src={
                "http://www.iconarchive.com/download/i2391/aha-soft/security/secrecy.ico"
              }
              alt="logo"
            />
            <br />
            Please log on to continue.
          </BoxHeader>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {/* <RememberBox>
            <Link to={`/forgetpass`}>ลืมรหัสผ่าน</Link>
          </RememberBox> */}

            <Button
              type="primary"
              htmlType="submit"
              // loading={setLoad}
              style={{ width: "100%" }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </BoxLogin>
    </Container>
  );
};

const PageLogin = Form.create({ name: "login" })(SetPageLogin);

export default PageLogin;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: black;
`;
const BoxHeader = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 50%;
  }
  color: white;
`;
const BoxLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    min-width: 500px;
    padding: 2rem 5rem 2rem 5rem;
    border: 2px solid #85c1e9;
    background: black;

    border-radius: 25px;
  }
`;
