const apikey = '5321a1c991994578927c38ca30046a6b';

const main =  document.querySelector('main');
window.addEventListener('load', e=> {
    updateNews();
    
    });
    async function updateNews(){
        const res  = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-04-02&sortBy=publishedAt&apiKey=${apikey}`) 
        const json = await res.json();
        
   
       main.innerHTML  =  json.articles.map(createArticle).join('\n');
        
        
    }
    
    function createArticle(article){
     
     
        return `<div class="article">
        <a href="${article.url}">
        <h2> ${article.title} </h2>
        <img src="${article.urlToImage}">
        <p> ${article.description}</p>
        </a>
        </div>`;
    }
    
  /*  use this when need an authorization
    fetch('API_ENDPOINT', OBJECT)  
  .then(function(res) {
    return res.json();
   })
  .then(function(resJson) {
    return resJson;
   });
   
   
    var obj = {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': '',
    'Host': 'api.producthunt.com'
  },
  body: JSON.stringify({
    'client_id': '(API KEY)',
    'client_secret': '(API SECRET)',
    'grant_type': 'client_credentials'
  })
  };
  */