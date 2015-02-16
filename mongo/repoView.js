module.exports = function(app) {

    app.get('/view/repo/:id', function(req, res) {

        // get the business collection
        var repos = app.db.get('repos')
        
         var q = {
             'id': parseInt(req.params.id)
        }

        var repo = repos.findOne(q, function(err, item) {
            console.log(item)
            res.render('viewRepo.jade', {
                repo: item
            })
        })

    })
}