import React ,{ activeKey } from "react";
import s from "./style.module.less";
import {TabBar} from 'zarm'
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; 
import CustomIcon from "@/components/CustomIcon";
// 原生js函数编程
const NavBar = ({showNav}) => {
    const [activeKey, setActiveKey] = React.useState('/')
    const navigateTo = useNavigate();

    const changeTab = (key) => {
        setActiveKey(key)
        navigateTo(key)
    }

    return (
        <TabBar className={s.tab} visible={showNav} activeKey={activeKey} onChange={changeTab}>
            <TabBar.Item itemKey="/" title="账单" icon={<CustomIcon type="zhangdan" />}/>
            <TabBar.Item itemKey="/data" title="统计" icon={<CustomIcon type="tongji" />}/>
            <TabBar.Item itemKey="/user" title="我的" icon={<CustomIcon type="wode" />}/>
        </TabBar>
    )

}

NavBar.propTypes = {
    showNav: PropTypes.bool
}

export default NavBar;