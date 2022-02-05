import React, { useState } from "react";
import SingleQuestion from "./Question";
import data from "./data";

const App = () => {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and andwers loging</h3>

        <section className="info">
          {question.map((data) => (
            <SingleQuestion key={data.id} {...data} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
