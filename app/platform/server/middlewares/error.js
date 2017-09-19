import {IS_DEVELOPMENT} from '@core/constants';

export default async function(ctx, next) {
  if (IS_DEVELOPMENT) {
    try {
      await next(); // next is now a function
    } catch (error) {
      ctx.status = error.status || 500;
      ctx.body = {
        message: error.message,
        stack: error.stack,
        line: error.line
      };
    }
  } else {
    await next();
  }
}
