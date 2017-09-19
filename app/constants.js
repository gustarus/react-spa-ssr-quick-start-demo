const IS_UNDER_NODE = process && process.versions && process.versions.node;
const env = IS_UNDER_NODE ? process.env : window.__ENV__;

const DEFAULT_ENV = 'development';
const NODE_ENV = env.NODE_ENV || DEFAULT_ENV;
const HARD_ENV = env.HARD_ENV || DEFAULT_ENV;

const IS_DEVELOPMENT = env.NODE_ENV === 'development';
const IS_PRODUCTION = env.NODE_ENV === 'production';

export {
  IS_UNDER_NODE,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  DEFAULT_ENV,
  NODE_ENV,
  HARD_ENV,
};
