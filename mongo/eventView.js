module.exports = function(app) {

    app.get('/view/event/:id', function(req, res) {
        //console.log(req)
        // get the business collection
        var business = app.db.get('events')

         var q = {
            'id': req.params.id            
        }

        var events = business.findOne(q, function(err, item) {

            res.render('viewEvent.jade', {
                events: item
            })
        })

    })
}
