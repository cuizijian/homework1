import styles from './index.less';
import { MicroApp } from 'umi';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function IndexPage(props) {

  const handleChange = value => {
    if(value.key === "2"){
      props.history.push('/app2');
    }else{
      props.history.push('/');
    }
  }
  return (
    <div className={styles.title} style={{width: '100%', height: '100%',padding: '40px'}}>
      <Tabs defaultActiveKey="1" onChange={handleChange} style={{ height: '100%', borderRight: 0 }}>
        <TabPane tab="组件1" key="1">
          <MicroApp name="child" />
        </TabPane>
        <TabPane tab="组件2" key="2">
          <MicroApp name="child1" />
        </TabPane>
      </Tabs>
    </div>
  );
}
