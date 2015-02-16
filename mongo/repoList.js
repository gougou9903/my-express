module.exports = function(app) {
    
    app.get('/list/repo', function(req, res) {

        // get the business collection
        var repos = app.db.get('repos')

        // compose a query to look up docs whose 'categories' field contains the word 'Doctors'
        var q = {
            // 'categories': {
            //     $in: ['Doctors']
            // }
        }

        // execute the query to find those matched limiting to 20
        repos.find(q, {
            limit: 20
        }, function(err, repo) {

            res.render('listRepo.jade', {
                repos: repo
            })
        })

    })
}