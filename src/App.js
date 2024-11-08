import React from 'react';
import messages from './config/messages';
import firebaseConfig from './config/firebaseConfig';
import './config/styles';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>{messages.app.welcome}</h1>

        <section>
          <h2>{messages.promotion.title}</h2>
          <p className="promotion-text">{messages.promotion.text}</p>
        </section>

        <section>
          <h2>{messages.contact.title}</h2>
          <p className="contact-text">{messages.contact.text}</p>
        </section>

        <section>
          <h2>{messages.special.title}</h2>
          <p className="special-text">{messages.special.text}</p>
        </section>

        <section>
          <h2>Firebase Configuration</h2>
          <ul>
            <li><strong>API Key:</strong> {firebaseConfig.apiKey}</li>
            <li><strong>Project ID:</strong> {firebaseConfig.projectId}</li>
            <li><strong>Database URL:</strong> {firebaseConfig.databaseURL}</li>
            <li><strong>Storage Bucket:</strong> {firebaseConfig.storageBucket}</li>
            <li><strong>Sender ID:</strong> {firebaseConfig.messagingSenderId}</li>
            <li><strong>App ID:</strong> {firebaseConfig.appId}</li>
            <li><strong>Measurement ID:</strong> {firebaseConfig.measurementId}</li>
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
