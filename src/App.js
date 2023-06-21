import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {TodoCreateForm} from './ui-components'
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
         <button onClick={signOut}>Sign out</button>
       <TodoCreateForm />
     
    </>
  );
  
}

export default withAuthenticator(App);