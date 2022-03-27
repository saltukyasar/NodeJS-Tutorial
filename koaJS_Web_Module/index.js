const Koa = require('koa');
const app = new Koa();

const Router=require('koa-router');
const router = new Router();

router.get('/',(ctx)=>{
    ctx.body="<h1>index sayfasi</h1>";
    ctx.status=200;
});

router.get('/about',(ctx)=>{
    ctx.body="<h1>about sayfasi</h1>";
    ctx.status=200;
});
router.get('/contact',(ctx)=>{
    ctx.body="<h1>contact sayfasi</h1>";
    ctx.status=200;
});

router.get('*',(req,res)=>{
    ctx.body="<h1>404 sayfa bulunamadi</h1>";
    ctx.status=404;
});

app.use(router.routes())

// app.get( '/',ctx=>{
//     ctx.status(200).send('Index sayfasi');
// })
// app.use('/hakkimda', (req,res)=>{
//     res.status(200).send('Hakkimda sayfasi');
// })
// app.use('/iletisim', (req,res)=>{
//     res.status(200).send('Iletisim sayfasi');
// })

// app.use('*', (req,res)=>{
//     res.status(404).send('404 sayfa bulunmadi');
// })




const port=3000;
app.listen(port,()=>{
    console.log(`sunucu ${port} calisiyor....`);
});