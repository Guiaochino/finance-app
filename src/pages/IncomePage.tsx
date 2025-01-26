import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import { IonContent } from '@ionic/react';

type Props = {}

const IncomePage = (props: Props) => {
  return (
    <>
      <HeaderComponent headerName='Income' />
      <IonContent>
        Income
      </IonContent>
    </>
  )
}

export default IncomePage;