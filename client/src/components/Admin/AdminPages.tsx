import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import TabPane from 'antd/es/tabs/TabPane';
import AdminAbout from './AdminAbout';
import Logout from '../Logout';
import AdminProjects from './AdminProjects';
import AdminExperience from './AdminExperience';

function AdminPages() {
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
          <TabPane tab="Projects" key="3">
            <AdminProjects />
          </TabPane>
          <TabPane tab="Experience" key="4">
            <AdminExperience />
          </TabPane>
        </Tabs>
        <Logout />
      </div>
    </div>
  );
}

export default AdminPages;
