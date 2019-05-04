const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/slide', async (ctx, next) => {
  await ctx.render('slide', {
    title: 'Hello Koa 2!'
  })
})

router.get('/click', async (ctx, next) => {
  await ctx.render('click', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
