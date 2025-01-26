import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { IonContent, IonFab, IonFabButton, IonFabList, IonFooter, IonIcon } from '@ionic/react';
import AccountCardComponent from '../components/AccountCardComponent';
import { add, pricetag } from 'ionicons/icons';

type Props = {}

const AccountsPage = (props: Props) => {
  return (
    <>
      <HeaderComponent headerName='Accounts' />
      <IonContent fixedSlotPlacement='before'>
        <AccountCardComponent title='Allowance' actionButton='view details' />
        <AccountCardComponent title='Savings' />
        <AccountCardComponent title='Home' />
      </IonContent>
    </>
  )
}

export default AccountsPage