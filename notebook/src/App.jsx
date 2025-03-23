import React , {useEffect,useState} from 'react';

import {
    Routes,
    Route,
    useLocation,
} from 'react-router-dom';
import routes from '@/router';
import { ConfigProvider, Button } from 'zarm';
// import 'zarm/dist/zarm.css'; // vite-plugin-style-import 插件自动引入
import NavBar from '@/components/NavBar';
import s from './App.module.less'
import { uploadAvatar } from '@/api';

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const needNav = ['/','/data','/user']
  const {pathname} = useLocation()
  // 当url切换为user时，隐藏导航栏
  useEffect(() => {
    // 当前路径
    // 是否在needNav中
    setShowNav(needNav.includes(pathname))
  }, [pathname])

  useEffect(() => {
    (async () => {
      await uploadAvatar();
    })()
  }, [])

    return (
      <ConfigProvider primaryColor={'#007fff'}>
        <div className={s.app}>
          <Routes>
            {
              routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)
            }
          </Routes>
          <NavBar showNav={showNav} />
        </div>
        </ConfigProvider>
    )    
}