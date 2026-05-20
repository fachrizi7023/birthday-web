"use client";

import React from "react";

export default function Story() {
  return (
    <>
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <div className="story">

        <section className="slide hero">

          <img
            src="/foto1.jpg"
            alt="Birthday"
            className="heroImage"
          />

          <div className="darkOverlay"></div>

          <div className="overlayText">
            <div className="reveal show">
              Happy
              <br />
              Birthday
            </div>

            <div className="reveal show delay1 yearText">
              sweet seventeen
            </div>
          </div>

        </section>

        <section className="slide split">

          <div className="leftPane">

            <h2 className="revealUp show">
              A Little Story
            </h2>

            <p className="revealUp show delay1">
              Another year older, another year more beautiful.
              Thank you for existing and making this world feel softer.
              I hope this year brings you happiness, peace,
              and every little thing you deserve.
            </p>

          </div>

          <div className="rightPane">

            <img
              src="/foto2.jpg"
              alt="Memory"
              className="revealImg show"
            />

          </div>

        </section>

        <section className="slide final">

          <div className="finalWrap show">

            <h2>One More Thing...</h2>

            <p>
              I made something special for you.
            </p>

            <a
              href="https://drive.google.com/file/d/1xI-U7Y-UaDzqUD4OilSDnJr15MrLGZDs/view?usp=sharing"
              target="_blank"
            >
              <button className="videoBtn">
                Play Video
              </button>
            </a>

          </div>

        </section>

      </div>
    </>
  );
}