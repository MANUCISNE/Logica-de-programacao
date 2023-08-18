import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  /* Required CSS leaflet */
  .leaflet-container {
    width: 100%;
    height: 100%;
  }

  /* Chart Legend to cursor pointer */
  .recharts-legend-wrapper .recharts-default-legend .recharts-legend-item {
    cursor: pointer;
  }
`
