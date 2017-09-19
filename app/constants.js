const DEFAULT_ENV = 'development';
const NODE_ENV = process.env.NODE_ENV || DEFAULT_ENV;
const HARD_ENV = process.env.HARD_ENV || DEFAULT_ENV;

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  DEFAULT_ENV,
  NODE_ENV,
  HARD_ENV,
};

