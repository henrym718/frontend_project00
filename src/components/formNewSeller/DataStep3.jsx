import { Form, Button, Select } from 'antd';
import { dataRegisterSellerStore } from '../../store/dataRegisterSeller';

const DataStep3 = ({ next, previus }) => {
    const { dataRegisterSeller, addDataRegisterSeller } = dataRegisterSellerStore();

    const onFinish = (values) => {
        addDataRegisterSeller(values);
        next();
    };

    return (
        <div className="h-[600px]">
            <div className="pt-10">
                <h2 className="text-3xl">Titulo</h2>
                <p className="pt-5">Parrafo</p>
            </div>
            <div className="py-10 h-[600px]">
                <Form
                    name="Step3"
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 10, offset: 4 }}
                    onFinish={onFinish}
                    initialValues={{ city: dataRegisterSeller.city }}
                >
                    <Form.Item
                        name="city"
                        label="Ubicacion"
                        rules={[{ required: true, message: 'Campo requerido' }]}
                    >
                        <Select placeholder="Escoja una opcion ">
                            <Select.Option value="El Triunfo">El Triunfo</Select.Option>
                            <Select.Option value="La Troncal">La Troncal</Select.Option>
                        </Select>
                    </Form.Item>
                    <div className="flex py-40">
                        <Button className="mr-10 w-[100px]" htmlType="submit">
                            Siguiente
                        </Button>
                        <Button className=" w-[100px]" onClick={previus}>
                            Atras
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default DataStep3;
