import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import { IonButton, IonContent, IonFooter, IonNav, IonNavLink } from '@ionic/react';
import ProfilePage from './ProfilePage';

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
      <HeaderComponent headerName='Dashboard' />
      <IonContent>
        Dashboard
      </IonContent>
    </>
  )
}

export default DashboardPage;