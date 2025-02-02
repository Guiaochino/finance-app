import { IonCard, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonAvatar, IonImg, IonLabel } from '@ionic/react'
import { createOutline } from 'ionicons/icons'
import React from 'react'

type Props = {
    userImg: string,
    userName: string
}

const ProfileHeaderCardComponent = ({userImg, userName}: Props) => {
  return (
    <IonCard>
        <IonCardContent className='ion-text-center'>
        <IonButton size='small' fill='clear' color='medium' className='edit-button'>
            <IonIcon slot='icon-only' icon={createOutline} />
        </IonButton>
        <IonGrid>
            <IonRow className='ion-justify-content-center'>
            <IonCol size='auto'>
                <IonAvatar>
                <IonImg src={userImg} alt='default-profile' />
                </IonAvatar>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonLabel>{ userName }</IonLabel>
            </IonCol>
            </IonRow>
        </IonGrid>
        </IonCardContent>
    </IonCard>
  )
}

export default ProfileHeaderCardComponent