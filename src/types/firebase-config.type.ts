/**
 * @category Firebase
 *
 * @description
 * Represents the configuration settings for a Firebase application.
 * 
 * This type defines the necessary parameters to configure and initialize a Firebase application.
 * It includes details for various Firebase services such as Authentication, Firestore, Analytics, and others.
 * 
 * @type {TFirebaseConfig}
 * 
 * @property {string} appId - The unique identifier for the Firebase application.
 * @property {string} apiKey - The API key used for authenticating requests from the app.
 * @property {string} projectId - The globally unique identifier for the Firebase project.
 * @property {string} authDomain - The domain used for Firebase Authentication.
 * @property {string} measurementId - The identifier for Google Analytics for Firebase.
 * @property {string} storageBucket - The Google Cloud Storage bucket for Firebase Storage.
 * @property {string} messagingSenderId - The sender ID for Firebase Cloud Messaging.
 */
export type TFirebaseConfig = {
  appId: string
  apiKey: string
  projectId: string
  authDomain: string
  measurementId: string
  storageBucket: string
  messagingSenderId: string
}