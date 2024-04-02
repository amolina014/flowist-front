import { css } from 'styled-components'


const breakpoints = {
	xs: '400px',
	sm: '600px',
	md: '900px',
	lg: '1280px',
	xl: '1440px',
	xxl: '1920px',
}

export const media = {
	xs: (...args) => css`
    @media screen and (max-width: ${breakpoints.xs}) {
      ${css(...args)};
    }
  `,
	sm: (...args) => css`
    @media screen and (max-width: ${breakpoints.sm}) {
      ${css(...args)};
    }
  `,
	md: (...args) => css`
    @media screen and (max-width: ${breakpoints.md}) {
      ${css(...args)};
    }
  `,
	lg: (...args) => css`
    @media screen and (max-width: ${breakpoints.lg}) {
      ${css(...args)};
    }
  `,
	xl: (...args) => css`
    @media screen and (max-width: ${breakpoints.xl}) {
      ${css(...args)};
    }
  `,
	xxl: (...args) => css`
    @media screen and (max-width: ${breakpoints.xxl}) {
      ${css(...args)};
    }
  `,
}