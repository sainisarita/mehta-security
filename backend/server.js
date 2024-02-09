const createError=require('http-errors');
const express=require('express');
const path=require('path');
const app=express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    next(createError(404))
})



app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // console.log(err,res,next);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'production' ? err : {};
    // render the error page
    // res.status(err.status || 500);
    res.status(500).render('error', { error: err });
    // res.render('error');
  });


  app.listen(3000,()=>{
    console.log("server started") 
})