import{S as c,i as u}from"./assets/vendor-0fc460d7.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const d=document.querySelector(".list");function m(r){const l=r.hits.map(e=>`<li class="gallery-item" >
    <a href= ${e.largeImageURL}>
	<img
			class = "gallery-image"  
			src = "${e.webformatURL}"  
			alt = "${e.tags}"
    />
	</a>
    <ul class = "gallery-alt">
        <li class="gallery-alt-photo">Likes <p>${e.likes}</p></li>
        <li class="gallery-alt-photo">Views <p>${e.views}</p></li>
        <li class="gallery-alt-photo">Comments <p>${e.comments}</p></li>
        <li class="gallery-alt-photo">Downloads <p>${e.downloads}</p></li>
    </ul>
</li>`).join("");d.insertAdjacentHTML("beforeend",l),new c(".gallery-item a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}).refresh()}const n=document.querySelector(".input"),p="search-word";let f=JSON.parse(localStorage.getItem(p))||{};n.value=f.search||"";function g(){const r=document.querySelector(".loader");r.style.display="inline-block";const l=new URLSearchParams({key:"43777991-fc34414997ff3024de4420c7b",q:n.value,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});fetch(`https://pixabay.com/api/?${l}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{e.totalHits===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",icon:"",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B",messageColor:"white",close:!1}):m(e),r.style.display="none"}).catch(e=>console.log(e))}const s=document.querySelector(".input");s.addEventListener("input",r=>{r.target.style.border="1px solid #4E75FF"});s.addEventListener("blur",r=>{r.target.style.border="1px solid #808080"});const y=document.querySelector(".form"),h=document.querySelector(".list");y.addEventListener("submit",r=>{r.preventDefault(),s.value.trim()!==""&&(g(),h.innerHTML="",s.value="")});
//# sourceMappingURL=commonHelpers.js.map
