import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';

interface Props {
  description: string;
  imageUrl: string;
}

const PostTab = ({ description, imageUrl }: Props) => {
  //   let { id } = useParams();

  //   useEffect(() => {}, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <img src={imageUrl} alt={description} />
        <div>{description}</div>
      </IonContent>
    </IonPage>
  );
};

export default PostTab;
