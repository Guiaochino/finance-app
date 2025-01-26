import React from 'react'
import HeaderComponent from '../components/HeaderComponent';
import { IonContent } from '@ionic/react';

type Props = {}

const ExpensePage = (props: Props) => {
  return (
    <>
      <HeaderComponent headerName='Expense' />
      <IonContent>
        Expense
      </IonContent>
    </>
  )
}

export default ExpensePage;