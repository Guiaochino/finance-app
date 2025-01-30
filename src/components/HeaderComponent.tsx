import React, { useContext } from 'react';
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonNav, IonTitle, IonToolbar, NavContext, useIonRouter } from '@ionic/react';
import { personCircle, personCircleOutline } from 'ionicons/icons';

type Props = {
  headerName: string,
}

const HeaderComponent = (props: Props) => {
    const {headerName} = props;
    const ionRouter = useIonRouter();

  return (
    <IonHeader collapse='fade'>
        <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton 
                defaultHref={
                  ionRouter.routeInfo && 
                  ionRouter.routeInfo.routeDirection === 'forward' ?
                  ionRouter.routeInfo.lastPathname : 
                  undefined
                } 
                text={'BACK'}
              />
            </IonButtons>
          <IonTitle>
            {headerName}
          </IonTitle>
          <IonButtons collapse slot='end'>
            <IonButton onClick={() => ionRouter.push('/profile', 'forward')}>
              <IonIcon slot='icon-only' icon={personCircleOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
    </IonHeader>
  )
}

export default HeaderComponent