import{a as u,S as f,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="55785111-533dad6ce42ccce20a44aee23";async function p(s){const o="https://pixabay.com/api/",{data:e}=await u.get(o,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});return e}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",w);async function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Please fill in the field!",position:"topRight"});return}h(),b();try{const a=(await p(o)).hits;if(a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(a)}catch(e){console.error("Error fetching images:",e),n.error({title:"Error",message:e.message||"Something went wrong! Please try again later.",position:"topRight"})}finally{L(),d.reset()}}
//# sourceMappingURL=index.js.map
