import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import { IonContent, IonFooter } from '@ionic/react';

type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <>
      <HeaderComponent headerName='Dashboard' />
      <IonContent>
        Dashboard
      </IonContent>
      <IonFooter />
    </>
  )
}

export default DashboardPage;