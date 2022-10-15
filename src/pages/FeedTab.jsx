import {
  IonButton,
  IonContent,
  IonImg,
  IonPage,
  withIonLifeCycle,
  useIonViewWillEnter,
} from '@ionic/react';
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase-config';
import getPosts from '../services/getPosts';
import './FeedTab.css';

const FeedTab = React.forwardRef(() => {
  const [posts, setPosts] = useState([]);

  useIonViewWillEnter(() => {
    fetchData();
  });

  const fetchData = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  const handleDelete = (e) => {
    const id = e.target.id;
    deletePostById(id);
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const deletePostById = async (id) => {
    const postRef = doc(db, 'posts', id);
    await deleteDoc(postRef);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        {posts.lenth < 1 && <p>You don't have any posts yet.</p>}
        {posts.map((post) => (
          <div key={post.id} className='post'>
            <IonImg src={post.imageUrl} alt={post.description} />
            <p>{post.description}</p>
            <p>Longtitude: {post.geolocation._long}</p>
            <p>Latitude: {post.geolocation._lat}</p>
            <div>
              <IonButton routerLink={`/UpdatePostTab/${post.id}`}>
                Edit
              </IonButton>
              <IonButton id={post.id} onClick={(e) => handleDelete(e)}>
                Delete
              </IonButton>
            </div>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
});

export default withIonLifeCycle(FeedTab);
