import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonRow, IonNote, IonLabel } from '@ionic/react'
import React from 'react'

type Props = {
    userInformation: any[]
}

const ProfileInformationComponent = ({userInformation}: Props) => {
  return (
    <IonCard>
        <IonCardHeader translucent>
        <IonCardTitle>Personal Information</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        <IonList>
            {userInformation.map((data) => (
            <IonItem lines='full'>
                <div>
                <IonRow>
                    <IonNote color='medium'>{data[0].toUpperCase()}</IonNote>
                </IonRow>
                <IonRow>
                    <IonLabel>{data[1]}</IonLabel>
                </IonRow>
                </div>
            </IonItem>
            ))}
        </IonList>
        </IonCardContent>
    </IonCard>
  )
}

export default ProfileInformationComponent