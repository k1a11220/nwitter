import firebase from "firebase/app"; //firebase 불러오기
import "firebase/auth"; //firebase 인증 불러오기
import "firebase/firestore"; //firebase 저장소(텍스트) 불러오기
import "firebase/storage"; //firebase 저장소(이미지) 불러오기

const firebaseConfig = {
  //.env파일 만든후 불러오기 env는 gitignore에 추가
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
