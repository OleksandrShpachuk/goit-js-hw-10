const e=document.querySelector("select.breed-select"),t=document.querySelector("p.loader"),n=document.querySelector("p.error"),o=document.querySelector(".cat-info");function r(n){n.forEach((t=>{const n=new Option(t.name,t.id);e.appendChild(n)})),e.style.display="block",t.style.display="none"}function s(e){o.innerHTML=`\n    <img src="${e[0].url}">\n    <div class="text-info">\n      <h1>${e[0].breeds[0].name}</h1>\n      <p>${e[0].breeds[0].description}</p>\n      <p>Temperament: ${e[0].breeds[0].temperament}</p>\n    </div>\n  `}e.style.display="none",t.textContent="",document.addEventListener("DOMContentLoaded",(()=>{e.addEventListener("change",(()=>{const r=e.value;var d;t.style.display="block",t.textContent="",n.style.display="none",o.innerHTML="",(d=r,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${d}&api_key=live_NYSQ97dpXdNj8KnITSUndJejdwmeeetmqp6SDHXmOrZWwqnhvtygmsC43NFQwpcJ`).then((e=>e.json()))).then(s).catch((e=>{console.error("Error fetching cat:",e),n.style.display="block",n.textContent="Oops! Something went wrong! Try reloading the page!"})).finally((()=>{t.style.display="none"}))})),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_NYSQ97dpXdNj8KnITSUndJejdwmeeetmqp6SDHXmOrZWwqnhvtygmsC43NFQwpcJ").then((e=>e.json())).then(r).catch((e=>{console.error("Error fetching breeds:",e),n.style.display="block",n.textContent="Oops! Something went wrong! Try reloading the page!",t.style.display="none"}))}));
//# sourceMappingURL=index.d6accf06.js.map