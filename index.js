import{a as u,S as d,i as n}from"./assets/vendor-CqoLp5UU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const f="58300342-7e7ce977dcf59cdf4d1fb4838",m="https://pixabay.com/api";function h(o){return u.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(o,s){const a=o.map(e=>`<li class="gallery-item">
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
        </li>`).join("");s.insertAdjacentHTML("beforeend",a),p.refresh()}function g(o){o.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function b(){document.querySelector(".loader").classList.add("is-hidden")}const l=document.querySelector(".form"),c=document.querySelector(".gallery");l.addEventListener("submit",o=>{o.preventDefault();const a=new FormData(l).get("search-text").trim();a&&(g(c),L(),h(a).then(e=>{if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(e.hits,c)}).catch(e=>{console.error(e),n.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{b()}))});
//# sourceMappingURL=index.js.map
