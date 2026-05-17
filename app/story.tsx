"use client";

import { useEffect, useRef, useState } from "react";

/* =========================
   SCROLL ACTIVE HOOK
========================= */
function useScrollActive() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return { ref, active };
}

export default function Story() {
  const s1img = useScrollActive();
  const s1a = useScrollActive();
  const s1b = useScrollActive();

  const s2a = useScrollActive();
  const s2b = useScrollActive();
  const s2c = useScrollActive();

  const finalText = useScrollActive();

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
        <source src="/music.mp3" />
      </audio>

      <div className="story">

        {/* =========================
            HERO
        ========================= */}
        <section className="slide hero">

          <img
            ref={s1img.ref}
            src="/foto1.jpg"
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
            <source src="/video.mp4" />
          </video>
        </div>
      )}
    </>
  );
}