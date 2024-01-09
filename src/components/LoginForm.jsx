import { LockOutlined, MailOutlined, LoadingOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd'
import { useLocalStorage } from './../hooks/useLocalStorage'
import { useMutation } from 'react-query'
import { loginUserInterceptor } from '../interceptors/authInterceptor'
import { authLoginAdapterResponse } from '../adapters/authAdapter'
import useAuthContext from './../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ onClose }) => {
    const { setValue } = useLocalStorage('remember', '')
    const { setAuth } = useAuthContext()
    const navigate = useNavigate()

    /* manejo de la respuesta del servidor si es success */
    const onSuccess = (data, values) => {
        values.remember ? setValue(true) : setValue(false)
        const dataAdapter = authLoginAdapterResponse(data)
        setAuth(dataAdapter)
        onClose()
    }

    /* implementacion de react query */
    const { mutate, isLoading, error, isError } = useMutation({
        mutationFn: loginUserInterceptor,
        onSuccess,
    })

    /* Fn que envia la data al servidor por medio de react query */
    const onFinish = (values) => {
        mutate(values)
    }

    /** render del login */
    return (
        <div className="login-container">
            <Form
                className="login-form"
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <div className="login-error">{isError && error?.response?.data?.message}</div>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        {
                            min: 8,
                            message: 'Please input ',
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        loading={isLoading}
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                        {/* {isLoading ? (
                            <LoadingOutlined style={{ fontSize: 24, color: 'white' }} spin />
                        ) : (
                            'Log in'
                        )} */}
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </div>
    )
}
export default LoginForm
