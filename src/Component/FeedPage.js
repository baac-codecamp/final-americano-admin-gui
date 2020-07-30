import React from 'react';
import HeaderPage from './Header';
import ListLink from "./ListLink";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
// import SiderDemo from './nav';
class FeedPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { Content } = Layout;
        return (
            
            <Layout className="layout">
                <HeaderPage />
                
                <ListLink/>
            </Layout>
        );
    }
}

export default FeedPage;
