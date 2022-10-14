import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import './GridTab.css';

const GridTab = () => {
  const mockData = [
    { id: 1, description: 'sdfsjpf1', imageUrl: '/assets/icon/icon.png' },
    { id: 2, description: 'sdadad', imageUrl: '/assets/icon/icon.png' },
    { id: 3, description: 'czxczc', imageUrl: '/assets/icon/icon.png' },
    {
      id: 4,
      description: 'cvbcvb',
      imageUrl: '/assets/icon/icon.png',
    },
    { id: 5, description: 'dfdg', imageUrl: '/assets/icon/icon.png' },
    {
      id: 6,
      description: 'sdfsjry425gpf1',
      imageUrl: '/assets/icon/icon.png',
    },
    { id: 7, description: 'sdfsjpf1', imageUrl: '/assets/icon/icon.png' },
    { id: 8, description: 'sdadad', imageUrl: '/assets/icon/icon.png' },
    { id: 9, description: 'czxczc', imageUrl: '/assets/icon/icon.png' },
    {
      id: 10,
      description: 'cvbcvb',
      imageUrl: '/assets/icon/icon.png',
    },
    { id: 11, description: 'dfdg', imageUrl: '/assets/icon/icon.png' },
    {
      id: 12,
      description: 'sdfsjry425gpf1',
      imageUrl: '/assets/icon/icon.png',
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {mockData.map((post) => (
              <IonCol key={post.id} className='post'>
                <img src={post.imageUrl} alt={post.description} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default GridTab;
