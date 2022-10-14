import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './FeedTab.css';

const FeedTab: React.FC = () => {
  const mockData = [
    {
      id: 1,
      description: 'sdfsjpf1',
      imageUrl: '/assets/icon/icon.png',
    },
    { id: 2, description: 'sdadad', imageUrl: '/assets/icon/icon.png' },
    { id: 3, description: 'czxczc', imageUrl: '/assets/icon/icon.png' },
    {
      id: 4,
      description: 'cvbcvb',
      imageUrl: 'public/assets/icon/favicon.png.svg',
    },
    { id: 5, description: 'dfdg', imageUrl: '/assets/icon/icon.png' },
    {
      id: 6,
      description: 'sdfsjry425gpf1',
      imageUrl: '/assets/icon/icon.png',
    },
  ];

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <IonPage>
      <IonContent fullscreen>
        {mockData.map((post) => (
          <div key={post.id} className='post'>
            <img src={post.imageUrl} alt={post.description} />
            <p>{post.description}</p>
            <div>
              <IonButton routerLink={`/PostTab/${post.id}`}>Edit</IonButton>
              <IonButton onClick={handleDelete}>Delete</IonButton>
            </div>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default FeedTab;
