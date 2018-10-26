module.exports = ( app, repository) =>{
   
    app.get('/movies',(req,res,next)=>{
        repository.getAllMovies((err,movies) => {
            if(err) return next(err)
            res.json(movies)
        })
    })

    
    app.get('/movies/premieres',(req,res,next)=>{
        repository.getMoviesPremieres((err,movies) => {
            if(err) return next(err)
            res.json(movies)
        })
    })

    app.get('/movies/:id',(req,res,next)=>{
        var id = req.params.id
        repository.getMovieById(id,(err,movie) => {
            if(err) return next(err)
            res.json(movie)
        })
    })

}