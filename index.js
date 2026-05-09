import{a as d,S as f,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="55785111-533dad6ce42ccce20a44aee23";function m(s){return d.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${t.likes}</p>
          <p><b>Views</b> ${t.views}</p>
          <p><b>Comments</b> ${t.comments}</p>
          <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function y(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.error({message:"Please fill in the field!",position:"topRight"});return}y(),b(),m(o).then(t=>{const i=t.data.hits;if(i.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i)}).catch(t=>{a.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}).finally(()=>{L(),u.reset()})}
//# sourceMappingURL=index.js.map
