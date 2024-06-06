import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import TabPane from 'antd/es/tabs/TabPane';
import AdminAbout from './AdminAbout';
import Logout from '../Logout';
// import { useAppSelector } from '../../app/hooks';

function AdminPages() {
  // const portfolioData = useAppSelector((state) => state.app);
  // console.log(portfolioData);
  return (
    <div>
      <div className="mx-auto max-w-[800px] text-center">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
        </Tabs>
        <Logout />
      </div>
    </div>
  );
}

export default AdminPages;
