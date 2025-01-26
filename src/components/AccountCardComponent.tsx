import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React, { ReactNode } from 'react'

type Props = {
    title: string, 
    amount?: number, 
    description?: string,
    actionButton?: string
}

const AccountCardComponent = ({title, amount = 0, description, actionButton}: Props) => {
  return (
    <IonCard>
        <IonCardHeader>
            <IonCardTitle>{ title }</IonCardTitle>
            <IonCardSubtitle>{ `${amount} Php` }</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>{ description }</IonCardContent>
        {actionButton && (<IonButton fill='clear'>{ actionButton }</IonButton>)}
    </IonCard>
  )
}

export default AccountCardComponent