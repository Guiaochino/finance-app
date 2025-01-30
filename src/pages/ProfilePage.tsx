import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonLabel, IonRow } from '@ionic/react'
import { createOutline } from 'ionicons/icons'

import './profile-page.css'

type Props = {}

const ProfilePage = (props: Props) => {
  return (
    <>
        <HeaderComponent headerName='' />
        <IonContent>
            <IonCard>
              <IonCardContent className='ion-text-center'>
                <IonButton size='small' fill='clear' color='medium' className='edit-button'>
                  <IonIcon slot='icon-only' icon={createOutline} />
                </IonButton>
                <IonGrid>
                  <IonRow className='ion-justify-content-center'>
                    <IonCol size='auto'>
                      <IonAvatar>
                        <IonImg src='https://ionicframework.com/docs/img/demos/avatar.svg' alt='default-profile' />
                      </IonAvatar>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonLabel>Profile Name</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
        </IonContent>
    </>
  )
}

export default ProfilePage