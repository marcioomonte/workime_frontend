import React from 'react';
import { Button, Card, Form, Input } from 'antd';
import { LoginContainer } from './styles';

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
            <LoginContainer>
                <Card style={{ width: '35%' }} title="Welcome to Workime">
                    <Form
                        style={{ display: 'flex', flexDirection: 'column' }}
                        onSubmit={login}
                    >
                        <Form.Item label="Username">
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        message: 'Required field.',
                                        required: true,
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="Password">
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        message: 'Required field.',
                                        required: true,
                                    },
                                ],
                            })(<Input type="password" />)}
                        </Form.Item>

                        <Button
                            htmlType="submit"
                            type="primary"
                            style={{ alignSelf: 'center' }}
                        >
                            Send
                        </Button>
                    </Form>
                </Card>
            </LoginContainer>
        </>
    );
};

export default Form.create({ name: 'login-form' })(Login);
