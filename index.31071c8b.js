!function(){var e="live_NYSQ97dpXdNj8KnITSUndJejdwmeeetmqp6SDHXmOrZWwqnhvtygmsC43NFQwpcJ";var n=document.querySelector("select.breed-select"),t=document.querySelector("p.loader"),o=document.querySelector("p.error"),c=document.querySelector(".cat-info");function a(e){e.forEach((function(e){var t=new Option(e.name,e.id);n.appendChild(t)})),n.style.display="block",t.style.display="none"}function r(e){c.innerHTML='\n    <img src="'.concat(e[0].url,'">\n    <div class="text-info">\n      <h1>').concat(e[0].breeds[0].name,"</h1>\n      <p>").concat(e[0].breeds[0].description,"</p>\n      <p>Temperament: ").concat(e[0].breeds[0].temperament,"</p>\n    </div>\n  ")}n.style.display="none",t.textContent="Loading data, please wait...",document.addEventListener("DOMContentLoaded",(function(){n.addEventListener("change",(function(){var a,i=n.value;t.style.display="block",t.textContent="Loading data, please wait...",o.style.display="none",c.innerHTML="",(a=i,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(a,"&api_key=").concat(e)).then((function(e){return e.json()}))).then(r).catch((function(e){console.error("Error fetching cat:",e),o.style.display="block",o.textContent="Oops! Something went wrong! Try reloading the page!"})).finally((function(){t.style.display="none"}))})),fetch("https://api.thecatapi.com/v1/breeds?api_key=".concat(e)).then((function(e){return e.json()})).then(a).catch((function(e){console.error("Error fetching breeds:",e),o.style.display="block",o.textContent="Oops! Something went wrong! Try reloading the page!",t.style.display="none"}))}))}();
//# sourceMappingURL=index.31071c8b.js.map
