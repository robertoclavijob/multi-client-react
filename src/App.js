import React from 'react';
import messages from './config/messages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{messages.app.welcome}</h1>

        <section>
          <h2>{messages.promotion.title}</h2>
          <p className="promotion-text">{messages.promotion.text}</p>
          <p>{messages.promotion.apiKey}</p>
        </section>

        <section>
          <h2>{messages.contact.title}</h2>
          <p className="contact-text">{messages.contact.text}</p>
        </section>

        <section>
          <h2>{messages.special.title}</h2>
          <p className="special-text">{messages.special.text}</p>
        </section>
      </header>
    </div>
  );
}

export default App;
