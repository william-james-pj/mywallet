import {
  css,
  CSSObject,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';
import { breakpointsUp, breakpointsDown } from './breakpoints';

export const respondToUp = Object.keys(breakpointsUp).reduce(
  (
    accumulator: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    },
    label,
  ) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpointsUp[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {},
);

export const respondToDown = Object.keys(breakpointsDown).reduce(
  (
    accumulator: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    },
    label,
  ) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpointsDown[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {},
);
