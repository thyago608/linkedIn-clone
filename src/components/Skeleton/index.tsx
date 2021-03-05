import styled from "styled-components";

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #fefefe 50%,
    #e7edf1 100%
  );

  /* X    Y*/
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  /* A animação faz o efeito de 'onda' */
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  /* Quando essa DIV tiver a classe 'white' */
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`;
