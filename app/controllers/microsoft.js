const cv = require('cognitive-services');

function Microsoft(){
  const cg =  cv.computerVision({
      API_KEY : '5752214efb794fd994d9ed90c1ec18d3'
  });
  this.cognitive = function(res,req){
    var parameters = {
      visualFeature : 'Categories'
    };

    var body = {};

    cg.analyzeImage({
            parameters,
            body
        })
        .then((response) => {
            console.log('Got response', response);
        })
        .catch((err) => {
            console.error('Encountered error making request:', err);
        });
  };
  this.analyze = function(req,res){
      const textAnalytics = cv.textAnalytics({
        API_KEY: '74f56f5e3fc6468f8064bb28fe902728'
    })
    const parameters = {};
    const body = {
      "language": "en",
      "id": "1",
      "text": req.body.text
    }

    textAnalytics.sentiment({
        parameters,
        body
    })
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            console.error('Encountered error making request:', err);
        });
    };
}

module.exports = new Microsoft();
