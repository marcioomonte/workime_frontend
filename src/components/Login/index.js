import React from 'react';
import { Icon, Layout, Button, Card, Form, Input } from 'antd';
import { LoginContainer } from './styles';

const { Footer, Content } = Layout;

const Login = ({ form }) => {
  const { getFieldDecorator, validateFields } = form;

  const login = event => {
    event.preventDefault();
    validateFields((errors, data) => {
      !errors && console.log(JSON.stringify(data, null, 2));
    });
  };

  // TODO: improve layout
  return (
    <>
      <Content>
        <LoginContainer>
          <Card
            bordered={false}
            style={{ width: '35%' }}
            title={<img src="../assets/logo.svg" alt="logo" />}
          >
            <Form
              style={{ display: 'flex', flexDirection: 'column' }}
              onSubmit={login}
            >
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      message: 'Required field.',
                      required: true,
                    },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      message: 'Required field.',
                      required: true,
                    },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>

              <Button
                block
                htmlType="submit"
                type="primary"
                style={{ alignSelf: 'center', width: '100%' }}
              >
                Entrar
              </Button>
              <Button block style={{ width: '100%' }}>
                Cadastrar
              </Button>
            </Form>
          </Card>
        </LoginContainer>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <img
          style={{ width: 'auto', height: '14px' }}
          src="../assets/logo-grey.svg"
          alt=""
        />
        ©2019 Coded by @rfcaio e @marcioomonte
      </Footer>
    </>
  );
};

export default Form.create({ name: 'login-form' })(Login);
