import styled, { css } from 'styled-components'

export const LineChartTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;

  font-size: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`

interface LineChartContainerProps {
  backgroundColor?: string
}

export const LineChartContainer = styled.div<LineChartContainerProps>`
  width: 100%;
  padding: 1.5rem;
  background: ${({ backgroundColor }) =>
    backgroundColor ||
    css`linear-gradient(
      180deg,
      rgba(230, 54, 23, 0.2) 0%,
      rgba(230, 54, 23, 0.2) 0.01%,
      rgba(235, 94, 69, 0.16) 22.92%,
      rgba(229, 127, 109, 0.12) 44.27%,
      rgba(8, 50, 61, 0.08) 69.27%,
      rgba(55, 115, 130, 0.04) 100%
    ),
    rgba(141, 177, 186, 0.1)`};
  border-radius: 4px;
`