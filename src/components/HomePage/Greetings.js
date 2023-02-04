import React, { useRef, useState } from 'react';

const Greetings = () => {
  const [hidden, setHidden] = useState(false);
  const animationEnd = useRef(null);

  const handleAnimationEnd = () => {
    setHidden(true);
  };

  return (
    <div
      ref={animationEnd}
      onAnimationEnd={handleAnimationEnd}
      style={{ visibility: hidden ? 'hidden' : 'visible' }}
      className="animation"
    >
      <div className="greetings">
        <h1 className="fw-bold">
          <span>
            Hello
            &#128400;
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Greetings;
