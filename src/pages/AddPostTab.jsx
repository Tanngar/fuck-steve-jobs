import { IonContent, IonPage } from '@ionic/react';
import AddPostForm from '../components/AddPostForm';

const AddPostTab = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <AddPostForm />
      </IonContent>
    </IonPage>
  );
};

export default AddPostTab;
