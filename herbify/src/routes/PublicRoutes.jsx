
import  Footer   from '../Components/common/Footer/Footer';
import   Header  from '../Components/common/Header/Header';
import React, { Fragment } from 'react';
import { Outlet } from 'react-router';
const PublicRoutes = () => {
  return (
    <Fragment>
    <Header />
    <Outlet />
    <Footer />
  </Fragment>
  )
}

export default PublicRoutes