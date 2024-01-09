import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <Button onClick={() => navigate('/', { replace: true })} type="primary">
                    Back Home
                </Button>
            }
        />
    );
};
export default Unauthorized;
