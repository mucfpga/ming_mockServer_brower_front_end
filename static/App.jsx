const { Layout , Menu } = antd;
const { Content, Sider } = Layout;
const {HashRouter  , Route, Link } = ReactRouterDOM;

const InterFacemanagerDesc=()=>{
    return(<div>
        <MingForm style={{ background: '#fff', padding: 0}} />
    </div>);
}

class App extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        return (
            <HashRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        {/*<img src="baidu.png"/>*/}
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="/A"><Icon type="api" theme="twoTone" />接口管理</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/B"><Icon type="file-text" theme="twoTone"/>日志管理</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <a href="dbManager.html"><Icon type="database" theme="twoTone"/>数据库管理</a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route exact path="/A" component={InterFaceManager} />
                                <Route path="/A_1" component={InterFacemanagerDesc} />
                                <Route path="/B" component={LogManager} />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
}