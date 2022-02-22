var axios = require('axios');
  var config = {
    method: 'get',
    url: 'http://gate.trexttd.com/crs/api/activity/gameRankReCord/activation?account=86100266&gameRankId=2&type=1',
    headers: { 
      'Connection': 'keep-alive', 
      'Authorization': '', 
      'isAjax': '', 
      'Request-Origion': 'SwaggerBootstrapUi', 
      'Accept': '*/*', 
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36', 
      'X-Requested-With': 'XMLHttpRequest', 
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 
      'sign': 'test_sign_8859', 
      'Referer': 'http://gate.trexttd.com/doc.html', 
      'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7', 
      'Cookie': '_ga=GA1.1.1276506050.1639553493; _ga_DR6HQD5SM3=GS1.1.1641460754.5.0.1641460760.0'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data.code
  })
  .catch(function (error) {
    console.log(error);
    return JSON.stringify(error)
  });