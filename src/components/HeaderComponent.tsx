import React, { useContext } from 'react';
import { IonBackButton, IonButton, IonButtons, IonHeader, IonIcon, IonNav, IonTitle, IonToolbar, NavContext, useIonRouter } from '@ionic/react';
import { personCircle, personCircleOutline } from 'ionicons/icons';

type Props = {
  headerName: string,
}

const HeaderComponent = (props: Props) => {
    const {headerName} = props;
    const ionRouter = useIonRouter();

    const {routeInfo} = ionRouter;

  return (
    <IonHeader collapse='fade'>
        <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton 
                defaultHref={
                  routeInfo && 
                  routeInfo.routeDirection === 'forward' ?
                  routeInfo.lastPathname : 
                  undefined
                } 
                text={routeInfo.lastPathname?.slice(1)}
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