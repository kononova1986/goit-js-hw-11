import{S as u,i as n}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function d(r){const s=new URLSearchParams({key:"43777991-fc34414997ff3024de4420c7b",image_type:"photo",q:r,orientation:"horizontal",safesearch:"true",per_page:9});return fetch(`https://pixabay.com/api/?${s}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}const m=document.querySelector(".list");let p=new u(".gallery-item a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function f(r){const s=r.hits.map(e=>`<li class="gallery-item" >
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
</li>`).join("");m.insertAdjacentHTML("beforeend",s),p.refresh()}const i=document.querySelector(".input");i.addEventListener("input",r=>{r.target.style.border="1px solid #4E75FF"});i.addEventListener("blur",r=>{r.target.style.border="1px solid #808080"});i.addEventListener("input",r=>{i.value=r.target.value});const g=document.querySelector(".form"),c=document.querySelector(".list");g.addEventListener("submit",r=>{if(r.preventDefault(),i.value.trim()==="")return n.error({message:"Sorry, there are no images matching your search query. Please try again!",icon:"",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B",messageColor:"white",close:!1,timeout:2e3}),c.innerHTML="";const s=document.querySelector(".loader");s.style.display="inline-block",d(i.value).then(e=>{e.totalHits===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",icon:"",backgroundColor:"#EF4040",position:"topRight",progressBarColor:"#B51B1B",messageColor:"white",close:!1,timeout:2e3}):f(e),s.style.display="none"}).catch(e=>console.log(e)),c.innerHTML="",i.value=""});
//# sourceMappingURL=commonHelpers.js.map
