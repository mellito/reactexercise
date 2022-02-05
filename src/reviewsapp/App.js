import React from "react";
import Review from "./Review";

const app = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>out reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default app;
