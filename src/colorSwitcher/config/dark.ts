import { extend } from '../utils';
import base from './base';
import chroma from "chroma-js";

export default extend(base, {
    primary: chroma(base.primary).darken(2.6).hex(),
    secondary: chroma(base.secondary).darken(2.6).hex(),
    positive: chroma(base.positive).darken(2.6).hex(),
    negative: chroma(base.negative).darken(2.6).hex(),
    customone: chroma(base.customone).darken(2.6).hex(),
    customtwo: chroma(base.customtwo).darken(2.6).hex(),
    customthree: chroma(base.customthree).darken(2.6).hex(),
});