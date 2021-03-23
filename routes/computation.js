var express = require('express');
var router = express.Router();
var calculate;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    calculate=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(calculate == 0)
      calculate=Math.random()
    res.write('Math.tan applied to '+calculate+" is "+Math.tan(calculate)+"\n");
    res.write('Math.acosh applied to '+calculate+" is "+Math.acosh(calculate)+"\n");
    res.end('Math.sqrt applied to '+calculate+" is "+Math.sqrt(calculate));
 });

module.exports = router;