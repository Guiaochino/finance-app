import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonItem,
  IonLabel,
  IonNav,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, card, ellipse, home, pricetag, settings, square, triangle, wallet } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import DashboardPage from './pages/DashboardPage';
import ExpensePage from './pages/ExpensePage';
import IncomePage from './pages/IncomePage';
import AccountsPage from './pages/AccountsPage';

import './app.css'
import ProfilePage from './pages/ProfilePage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/expense" component={ExpensePage} />
          <Route exact path="/income" component={IncomePage} />
          <Route exact path="/accounts" component={AccountsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="dashboard" href="/dashboard">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton tab="expense" href="/expense">
            <IonIcon aria-hidden="true" icon={pricetag} />
            <IonLabel>Expense</IonLabel>
          </IonTabButton>
          <IonTabButton tab="income" href="/income">
            <IonIcon aria-hidden="true" icon={wallet} />
            <IonLabel>Income</IonLabel>
          </IonTabButton>
          <IonTabButton tab="accounts" href="/accounts">
            <IonIcon aria-hidden="true" icon={card} />
            <IonLabel>Accounts</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

      <IonFab slot='fixed' horizontal='end' vertical='bottom'>
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side='top'>
            <IonFabButton title='Expense'>
              <IonIcon icon={pricetag} />
            </IonFabButton>

            <IonFabButton title='Income'>
              <IonIcon icon={wallet} />
            </IonFabButton>

            <IonFabButton title='Account'>
              <IonIcon icon={card} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
    </IonReactRouter>
  </IonApp>
);

export default App;
