import React from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';
import { POST_DETAILS } from '../constants/routes';

const CardPost = (props) => {
    const { title, body } = props;
    const { push: navigate } = useHistory();

    const handleDatils = () => {
        navigate(POST_DETAILS, props);
    }
    return (
        <div className="card" onClick={handleDatils}>
            <Card title={title} bordered={false}>
                <p>{body}</p>
            </Card>
    </div>
    )
};

export default CardPost;