var friends = require('../data/friends.js');

module.exports = function(app) {
  app.get('/api/friends', function(req,res) {
    res.json(friends);
  });

  app.post('/api/survey', function(req,res) {
      var userScores = req.body.scores; //this is the user scores in an array
      var difference = [] //store array of values

      //loop through the friends array and compare user vals
      for(i=0; i<friends.length; i++) {
        var friendScore = friends[i].scores;
        var comparisonArray = [];

        for(j=0; j<userScores.length; j++) {
            var userScore = userScores[j];
            var comparison = Math.abs(friendScore - userScore);
            comparisonArray.push(comparison);
        }

        //sum each value in the comparison array and push the total to the varianceArray
        var summed = eval(comparisonArray.join('+'));
        difference.push(summed);
      }

      console.log("difference: " + difference);
      var bestMatch = difference.indexOf(Math.min.apply(null, varianceArray));
      console.log("bestMatch: " + bestMatch);

      res.json(bestMatch);

  });
}
