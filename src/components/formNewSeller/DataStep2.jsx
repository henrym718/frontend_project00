import { useState } from 'react';
import { Form, Button, Input, Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { dataRegisterSellerStore } from '../../store/dataRegisterSeller';

const DataStep2 = ({ next, previus }) => {
    ////////////////////////////////////////////////////////////////////////////////////////////////
    /**estados para el avatar */
    const [openModal, setOpenModal] = useState(false);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    /**funciones del estado para manejar el avatar y el nickname */
    const {
        dataRegisterSeller,
        addDataRegisterSeller,
        avatarTemporary,
        addAvatarTemporary,
        removeAvatarTemporary,
    } = dataRegisterSellerStore();

    ////////////////////////////////////////////////////////////////////////////////////////////////
    /** funcion que recoge la data de los inputs */
    const onFinish = (value) => {
        if (!dataRegisterSeller.avatar) {
            return message.error('Avatar requerido ');
        }
        addDataRegisterSeller(value);
        next();
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////
    /** antes de subir la imagen se verifica que sea una imagen tipo jpeg o png */
    const beforeUpload = (file) => {
        const typeImage = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!typeImage) {
            message.error('Seleccione imágenes en formato JPEG o PNG');
            return Upload.LIST_IGNORE;
        }
        return false;
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////
    /** maneja los cambios de la imagen ya sea que se suba o se eimine */
    const onChange = async ({ fileList }) => {
        addDataRegisterSeller({ avatar: fileList[0]?.originFileObj });

        if (fileList.length > 0) {
            addAvatarTemporary({
                uid: fileList[0].uid,
                name: fileList[0].name,
                status: 'done',
                url: await base64(fileList[0].originFileObj),
            });
        } else {
            removeAvatarTemporary();
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////
    /** manejo de la imagen para previsualizar en modal */
    const onPreview = (file) => {
        setOpenModal((prev) => !prev);
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////
    /**creamos una imagen en base  */
    const base64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="h-[600px]">
            <div className="pt-10">
                <h2 className="text-3xl"> Información Extra </h2>
                <br />
                <p> Añade un avatar y un nickName para que puedan identificarte mejor</p>
            </div>
            <div className="py-10 ">
                <Form
                    onFinish={onFinish}
                    name="DataStep2"
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 10, offset: 4 }}
                    initialValues={{
                        displayName: dataRegisterSeller.displayName,
                    }}
                >
                    <Form.Item label="Avatar">
                        <Upload
                            listType="picture-circle"
                            beforeUpload={beforeUpload}
                            onPreview={onPreview}
                            onChange={onChange}
                            accept=".jpg, .png"
                            maxCount={1}
                            fileList={avatarTemporary.url ? [avatarTemporary] : []}
                        >
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Cargar</div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        name="displayName"
                        label="displayName"
                        rules={[{ required: true, message: 'campo requerido' }]}
                    >
                        <Input className="h-9 w-65" />
                    </Form.Item>
                    <div className="flex py-40">
                        <Button className="mr-10 w-[100px]" htmlType="submit">
                            Siguiente
                        </Button>
                        <Button className="w-[100px]" onClick={previus}>
                            Atras
                        </Button>
                    </div>
                </Form>
            </div>
            <Modal open={openModal} onCancel={onPreview} footer={null}>
                <img src={avatarTemporary.url} />
            </Modal>
        </div>
    );
};

export default DataStep2;
