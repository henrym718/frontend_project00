import { Button, Form, Input, Select, Radio } from 'antd';
import { dataRegisterSellerStore } from '../../store/dataRegisterSeller';

const RegisterForm = ({ next }) => {
    const { addDataRegisterSeller, dataRegisterSeller } = dataRegisterSellerStore();

    // Función que maneja el envío del formulario
    const handleSubmit = (values) => {
        // Persistir la data del formulario excepto la imagen en el estado con Zustand
        addDataRegisterSeller(values);
        next();
    };

    return (
        <div className="h-[600px]">
            <div className="pt-10">
                <h2 className="text-3xl"> Información Personal</h2>
                <p className="pt-5">
                    Cuéntanos un poco sobre ti. Esta información aparecerá en tu perfil público,{' '}
                    <br />
                    para que los posibles compradores puedan conocerte mejor.
                </p>
            </div>

            <div className="py-10 ">
                <Form
                    name="basic"
                    onFinish={handleSubmit}
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 10, offset: 4 }}
                    initialValues={{
                        firstName: dataRegisterSeller?.firstName,
                        lastName: dataRegisterSeller?.lastName,
                        gender: dataRegisterSeller?.gender,
                        city: dataRegisterSeller?.city,
                        aboutMe: dataRegisterSeller?.aboutMe,
                    }}
                >
                    {/* Campo de nombre */}
                    <Form.Item
                        label="Nombres"
                        name="firstName"
                        rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
                    >
                        <Input className="h-9" />
                    </Form.Item>
                    {/* Campo de apellido */}
                    <Form.Item
                        label="Apellidos"
                        name="lastName"
                        rules={[{ required: true, message: 'Por favor ingrese su apellido' }]}
                    >
                        <Input className="h-9 " />
                    </Form.Item>

                    {/* Campo de género */}
                    <Form.Item
                        name="gender"
                        label="Género"
                        rules={[{ required: true, message: 'Por favor seleccione su género' }]}
                    >
                        <Radio.Group>
                            <Radio value="male">Masculino</Radio>
                            <Radio value="female">Femenino</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {/* Botón de envío */}
                    <Button htmlType="submit">Siguiente</Button>
                </Form>
            </div>
        </div>
    );
};

export default RegisterForm;
