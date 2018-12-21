module.exports = () => async (ctx, next) => {
  const userAgent = ctx.req.headers['user-agent'];

  if (/^GoogleHC\/\d+\.\d+$/.test(userAgent)) {
    ctx.status = 200;
    ctx.body = {
      status: 'ok',
    };
  } else {
    await next();
  }
};
