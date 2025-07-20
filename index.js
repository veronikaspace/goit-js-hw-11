import{a as f,S as g,i as c}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="23963114-6d0d5d874ae460d9125bacd21";function b(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(y,{params:r}).then(function(i){return i.data})}let v=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(s,r){const i=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:u,comments:m,downloads:p})=>`
        <li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img src="${a}" alt="${t}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="image-info-item"><span><b>Likes</b></span><span>${n}</span></div>
            <div class="image-info-item"><span><b>Views</b></span><span>${u}</span></div>
            <div class="image-info-item"><span><b>Comments</b></span><span>${m}</span></div>
            <div class="image-info-item"><span><b>Downloads</b></span><span>${p}</span></div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",i),v.refresh()}function S(s){s.innerHTML=""}const l=document.querySelector(".form"),d=document.querySelector(".gallery"),o=document.querySelector(".loader");l.addEventListener("submit",function(s){s.preventDefault();const r=l.elements["search-text"].value.trim();r&&(S(d),o.classList.remove("is-hidden"),b(r).then(function(i){if(i.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}o.classList.add("is-hidden"),L(i.hits,d)}).catch(function(){o.classList.add("is-hidden"),c.error({message:"Error!",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
