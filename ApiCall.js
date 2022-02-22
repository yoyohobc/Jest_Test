function sum(a, b) {
    return a + b;
  }
function minus(a, b) {
    return a - b;
  }
async function activation(account, gameRankId) {
  var axios = require('axios');
  const config = {
    method: 'get',
    url: 'http://gate.trexttd.com/crs/api/activity/gameRankReCord/activation?account='+account+'&gameRankId='+gameRankId+'&type=1',
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
  var resp = await axios(config);
  return resp.data
}
module.exports = {sum,minus,activation};