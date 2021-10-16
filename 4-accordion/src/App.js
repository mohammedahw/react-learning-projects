import React from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map((person) => {
              return <SingleQuestion key={person.id} info={person.info} title={person.title} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;