import{a as c,S as d,i as u}from"./assets/vendor-CqoLp5UU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const f="58300342-7e7ce977dcf59cdf4d1fb4838",m="https://pixabay.com/api";function h(o){return c.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(o,s){const i=o.map(e=>`<li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
          </a>
          <ul class="img-info">
            <li><h2>Likes</h2>
            <p>${e.likes}</p></li>
            <li><h2>Views</h2>
            <p>${e.views}</p></li>
            <li><h2>Comments</h2>
            <p>${e.comments}</p></li>
            <li><h2>Downloads</h2>
            <p>${e.downloads}</p></li>
          </ul>
        </li>`).join("");s.insertAdjacentHTML("beforeend",i),p.refresh()}function g(o){o.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){document.querySelector(".loader").classList.add("is-hidden")}const a=document.querySelector(".form"),l=document.querySelector(".gallery");a.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(a).get("search-text").trim();i&&(g(l),L(),h(i).then(e=>{if(e.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits,l)}).catch(e=>{console.error(e)}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
