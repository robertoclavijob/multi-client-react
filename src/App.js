import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to McDonald's</h1>

        <section>
          <h2>Special Promotion</h2>
          <p className="promotion-text">
            Enjoy a delicious Big Mac today!
          </p>
          <p>API Key: 1234567890abcdef</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p className="contact-text">Call us at 1-800-MCD-HELP for support.</p>
        </section>

        <section>
          <h2>Today's Special</h2>
          <p className="special-text">Get 2 for $5 on Chicken Nuggets!</p>
        </section>
      </header>
    </div>
  );
}

export default App;
