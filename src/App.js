import React, { Component, useState } from 'react'

import Header from './components/header/header'
import Main from './components/home-page/main'
import Logos from './components/logos/main'
import Statistic from './components/statistic/main';
import CardMini from './components/card-item/main'
import WrapperItem from './components/card-wrapper/main'
import AboutSEO from './components/about/main'
import StaticNum from './components/static-number/main'
import SpeedComp from './components/speedcomp/main'
import Plans from './components/plans/main'
import Members from './components/members/main'
import Clients from './components/clients-part/main'
import News from './components/news/main'
import Footer from './components/footer/main'
// import ITjobs from './components/IT-jobs/main';


import SidebarMenu from './components/Drawer/index.jsx'
import { ContextProvider } from './context';
// import { Route, Router, Switch } from 'react-router-dom';

export default function App() {

  const [open, setOpen] = useState(false);
  return (
    <>
      <ContextProvider>
        <Header open={open} setOpen={setOpen} />
        <Main />
        <Logos />
        <Statistic />
        {/* <ITjobs /> */}
        <CardMini />
        <WrapperItem />
        <AboutSEO />
        {/* <StaticNum /> */}
        <SpeedComp />
        <Plans />
        <Members />
        {/* <Clients /> */}
        {/* <News /> */}
        <Footer />

        <SidebarMenu open={open} setOpen={setOpen} />
      </ContextProvider>
    </>
  );
}


