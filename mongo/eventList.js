module.exports = function(app) {
    
    app.get('/list/event', function(req, res) {

        // get the business collection
        var business = app.db.get('events')

        // compose a query to look up docs whose 'categories' field contains the word 'Doctors'
        var q = {
            // 'categories': {
            //     $in: ['Restaurants']
            // }
        }

        // execute the query to find those matched limiting to 20
        business.find(q, {
            limit: 30
        }, function(err, eve) {

            res.render('listEvent.jade', {
                events: eve
            })
        })

    })
}
