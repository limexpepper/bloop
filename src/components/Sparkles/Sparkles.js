import React from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion'; // Assuming this module exists and is required for the code to work
import useRandomInterval from './useRandomInterval'; // Assuming this module exists and is required for the code to work
import range from './range';
import random from './random';
import Sparkle from './Sparkle';
import styled, { keyframes } from 'styled-components'; // Assuming styled-components is installed and used for styling

const DEFAULT_COLOR = '#FFC700';

const generateSparkle = color => {
  // ... (rest of the code)
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
    },
  };
  return sparkle;
};

const Sparkles = ({ animateSparkles, color = DEFAULT_COLOR, children, ...delegated }) => {
    console.log("animate sparkles in Sparkles: " + animateSparkles)
  // ... (rest of the code)
  const [sparkles, setSparkles] = React.useState(() => {
    return range(3).map(() => generateSparkle(color));
  });

  const prefersReducedMotion = usePrefersReducedMotion();
  useRandomInterval(
    () => {
        if (animateSparkles) {
            const sparkle = generateSparkle(color);
            const now = Date.now();
            const nextSparkles = sparkles.filter(sp => {
                const delta = now - sp.createdAt;
                return delta < 750;
            });
            nextSparkles.push(sparkle);
            setSparkles(nextSparkles);
        }
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );
  return (
    <Wrapper {...delegated}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;
// const SparkleWrapper = styled.span`
//   position: absolute;
//   display: block;
//   @media (prefers-reduced-motion: no-preference) {
//     animation: ${comeInOut} 700ms forwards;
//   }
// `;
// const SparkleSvg = styled.svg`
//   display: block;
//   @media (prefers-reduced-motion: no-preference) {
//     animation: ${spin} 1000ms linear;
//   }
// `;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;

export default Sparkles;
