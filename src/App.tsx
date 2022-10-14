import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { camera, images, square, triangle } from 'ionicons/icons';
import FeedTab from './pages/FeedTab';
import FileTab from './pages/FileTab';
import { MdViewDay, MdFolderOpen } from 'react-icons/md';
import './App.css';

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

/* Theme variables */
import './theme/variables.css';
import { usePhotoGallery } from './hooks/usePhotoGallery';
import GridTab from './pages/GridTab';
import PostTab from './pages/PostTab';

setupIonicReact();

const App: React.FC = () => {
  const { photos, takePhoto, deletePhoto } = usePhotoGallery();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path='/FeedTab'>
              <FeedTab />
            </Route>
            <Route exact path='/GridTab'>
              <GridTab />
            </Route>
            <Route path='/FileTab'>
              <FileTab />
            </Route>
            <Route exact path='/PostTab/:id'>
              <PostTab />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='tab1' href='/FeedTab'>
              {/* Put home icon here */}
              <MdFolderOpen />
            </IonTabButton>
            <IonTabButton tab='tab2' href='/GridTab'>
              <MdViewDay />
            </IonTabButton>
            <IonTabButton tab='tab3' href='/FileTab'>
              <MdFolderOpen />
            </IonTabButton>
            <IonTabButton tab='tab4' onClick={() => takePhoto()}>
              <IonIcon icon={camera}></IonIcon>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
