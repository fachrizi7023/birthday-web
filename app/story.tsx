"use client";

import React, { useEffect, useRef, useState } from "react";

/* =========================
   SCROLL ACTIVE HOOK
========================= */
function useScrollActive<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, active };
}

export default function Story() {
  const s1img = useScrollActive<HTMLImageElement>();
  const s1a = useScrollActive<HTMLDivElement>();
  const s1b = useScrollActive<HTMLDivElement>();

  const s2a = useScrollActive<HTMLHeadingElement>();
  const s2b = useScrollActive<HTMLParagraphElement>();
  const s2c = useScrollActive<HTMLImageElement>();

  const finalText = useScrollActive<HTMLDivElement>();

  const [showVideo, setShowVideo] = useState(false);
  const [videoFade, setVideoFade] = useState(false);

  const openVideo = () => {
    setShowVideo(true);

    setTimeout(() => {
      setVideoFade(true);
    }, 50);
  };

  const closeVideo = () => {
    setVideoFade(false);

    setTimeout(() => {
      setShowVideo(false);
    }, 300);
  };

  return (
    <>
      {/* MUSIC */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <div className="story">

        {/* =========================
            HERO
        ========================= */}
        <section className="slide hero">

          <img
            ref={s1img.ref}
            src="/foto1.jpg"
            alt="Birthday"
            className={`heroImage ${s1img.active ? "show" : ""}`}
          />

          <div className="darkOverlay"></div>

          <div className="overlayText">

            <div
              ref={s1a.ref}
              className={`reveal ${s1a.active ? "show" : ""}`}
            >
              Happy
              <br />
              Birthday
            </div>

            <div
              ref={s1b.ref}
              className={`reveal delay1 yearText ${s1b.active ? "show" : ""}`}
            >
              sweet seventeen
            </div>

          </div>

        </section>

        {/* =========================
            SLIDE 2
        ========================= */}
        <section className="slide split">

          <div className="leftPane">

            <h2
              ref={s2a.ref}
              className={`revealUp ${s2a.active ? "show" : ""}`}
            >
              A Little Story
            </h2>

            <p
              ref={s2b.ref}
              className={`revealUp delay1 ${s2b.active ? "show" : ""}`}
            >
              Another year older, another year more beautiful.
              Thank you for existing and making this world feel softer.
              I hope this year brings you happiness, peace,
              and every little thing you deserve.
            </p>

          </div>

          <div className="rightPane">

            <img
              ref={s2c.ref}
              src="/foto2.jpg"
              alt="Memory"
              className={`revealImg ${s2c.active ? "show" : ""}`}
            />

          </div>

        </section>

        {/* =========================
            FINAL
        ========================= */}
        <section className="slide final">

          <div
            ref={finalText.ref}
            className={`finalWrap ${finalText.active ? "show" : ""}`}
          >

            <h2>One More Thing...</h2>

            <p>
              I made something special for you.
            </p>

            <button className="videoBtn" onClick={openVideo}>
              Play Video
            </button>

          </div>

        </section>

      </div>

      {/* =========================
          VIDEO MODAL
      ========================= */}
      {showVideo && (
        <div
          className={`videoModal ${videoFade ? "show" : ""}`}
          onClick={closeVideo}
        >
          <video autoPlay controls>
            <source
              src="https://drive.google.com/uc?export=download&id=1xI-U7Y-UaDzqUD4OilSDnJr15MrLGZDs"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
}