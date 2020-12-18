import { Card } from "antd";
import { ShareAltOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import illustrator from './illustrator.svg';
import isometric from './isometric.svg';
import vsgang from './vsgang.svg';

const { Meta } = Card;

const MainPage = () => {
    return (
        <>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={
                    <img src={isometric} alt="isometric" />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <ShareAltOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={
                    <img
                        src={illustrator}
                        alt='Isometric Art'
                        style={{ width: 30, height: 30 }}
                    />}
                title="Isometric projects"
                description="This is the description of the illustrator projects..."
                />
            </Card>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={
                    <img src={vsgang} alt="VS Gang" />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <ShareAltOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={
                    <img
                        src={illustrator}
                        alt='VS Gang Art'
                        style={{ width: 30, height: 30 }}
                    />}
                title="VS Gang projects"
                description="This is the description of the illustrator projects..."
                />
            </Card>
        </>
    )
}

MainPage.propTypes = {};

export default MainPage;