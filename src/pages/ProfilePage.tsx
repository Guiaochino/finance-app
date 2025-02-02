import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonList, IonNote, IonRow, IonText } from '@ionic/react'
import { createOutline } from 'ionicons/icons'

import './profile-page.css'
import ProfileHeaderCardComponent from '../components/profileComponent/ProfileHeaderCardComponent'
import ProfileInformationComponent from '../components/profileComponent/ProfileInformationComponent'

type Props = {}

const ProfilePage = (props: Props) => {
  const dummyData = {
    userImg: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    fullName: 'Profile Fullname',
    userName: 'Profile Username',
    birthDate: new Date(2000, 8, 25).toDateString(),
    email: 'profile.email@email.com',
  }

  return (
    <>
        <HeaderComponent headerName='' />
        <IonContent>
            <ProfileHeaderCardComponent 
              userImg={dummyData.userImg} 
              userName={dummyData.userName} 
            />
            <ProfileInformationComponent 
              userInformation={Object.entries(dummyData).slice(1)}
            />
        </IonContent>
    </>
  )
}

export default ProfilePage