import { Form, Button, Input, message } from 'antd';
import { dataRegisterSellerStore } from '../../store/dataRegisterSeller';
import useAuthContext from '../../hooks/useAuthContext';

import { useMutation } from 'react-query';
import { createNewSellerInterceptor } from '../../interceptors/registerellerInterceptor';
import { useEffect } from 'react';

const DataStep4 = ({ previus }) => {
    const { auth } = useAuthContext();
    const { dataRegisterSeller, addDataRegisterSeller } = dataRegisterSellerStore();

    const onFinish = (values) => {
        addDataRegisterSeller(values);
    };

    const onSuccess = (data) => {
        console.log(data);
    };

    const onError = (error) => {
        message.error(error.response.data.message);
    };

    const { mutate, isLoading } = useMutation({
        mutationFn: createNewSellerInterceptor,
        onSuccess,
        onError,
    });

    useEffect(() => {
        if (dataRegisterSeller.aboutMe) {
            const formData = new FormData();
            for (const key in dataRegisterSeller) {
                formData.append(key, dataRegisterSeller[key]);
            }

            // Pasar el accessToken como argumento al método mutate
            mutate({ formData, accessToken: auth.accessToken });
        }
    }, [dataRegisterSeller]);

    return (
        <div className="h-[600px]">
            <div className="pt-10">
                <h2 className="text-3xl"> Titulo</h2>
                <p className="pt-5"> Contenido</p>
            </div>
            <div className="py-10">
                <Form
                    name="Step4"
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 10, offset: 4 }}
                    onFinish={onFinish}
                    initialValues={{
                        aboutMe: dataRegisterSeller.aboutMe,
                    }}
                >
                    <Form.Item
                        name="aboutMe"
                        rules={[{ required: true, message: 'Campo requerido' }]}
                        label="Sobre mi"
                    >
                        <Input.TextArea
                            rows={8}
                            showCount
                            minLength={20}
                            maxLength={250}
                            className="w-90"
                        />
                    </Form.Item>
                    <div className="flex py-40">
                        <Button loading={isLoading} className="mr-10 w-[100px]" htmlType="submit">
                            Finalizar
                        </Button>
                        {!isLoading && (
                            <Button className=" w-[100px]" onClick={previus}>
                                Atras
                            </Button>
                        )}
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default DataStep4;
