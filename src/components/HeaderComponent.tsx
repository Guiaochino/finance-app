import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

type Props = {headerName: string}

const HeaderComponent = (props: Props) => {
    const {headerName} = props;
  return (
    <IonHeader>
        <IonToolbar>
            <IonTitle>
                {headerName}
            </IonTitle>
        </IonToolbar>
    </IonHeader>
  )
}

export default HeaderComponent