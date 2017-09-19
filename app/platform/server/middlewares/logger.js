export default async function(ctx, next) {
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    try {
      console.log(`${ctx.method}: ${ctx.originalUrl}`); // eslint-disable-line no-console
      await next(); // next is now a function
    } catch (err) {
      let error = {message: err.message, stack: err.stack, line: err.line};
      console.error(error); // eslint-disable-line no-console
      ctx.body = error;
      ctx.status = err.status || 500;
    }
  } else {
    await next();
  }
}
