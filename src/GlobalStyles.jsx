// GlobalStyles.jsx

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  h1 {
    font-size: 3.5rem;
    font-weight: bold; /* Adjust as needed */
    /* Additional styles */
    @media (max-width: 768px) {
      font-size: 2.5rem; /* Adjust as needed */
    }
  }

  h2 {
    font-size: 2rem; /* Adjust as needed */
    font-weight: bold; /* Adjust as needed */
    /* Additional styles */
  }
  h3 {
    font-size: 1.19rem; /* Adjust as needed */
    font-weight: semibold; /* Adjust as needed */
    /* Additional styles */
  }
`;

export default GlobalStyles;
