function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o),o("8FnLx");var a=o("tgDFu");var s={recipesListContainer:document.querySelector(".fav-list"),categoriesContainer:document.querySelector(".fav-categories"),noFavoritesMessage:document.querySelector(".fav-empty"),paginationElement:document.getElementById("pagination"),allButton:document.querySelector(".common-btn"),categoriesList:document.querySelector(".fav-categories"),renderedRecipesBox:document.getElementById("fav-rendered-card"),heroImage:document.querySelector(".fav-hero")};function r(e){const t=localStorage.getItem(e);return JSON.parse(t)}function c(){return window.innerWidth<768?9:12}function l(e,t){const n={};for(let i=0;i<e.length;i+=t){n[Math.floor(i/t)+1]=e.slice(i,i+t)}return n}var d=o("fT9c6"),u=o("fb9GJ");var p=function(t,n,i,o){const a={totalItems:n*i,itemsPerPage:n,visiblePages:window.innerWidth<768?2:3,page:t,centerAlign:!1,omitMiddlePages:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn pag-page">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}} move-button"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} prev-button"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button"><span class="tui-ico-ellip">...</span></a>'}};new(e(u))("pagination",a).on("afterMove",(({page:e})=>{o(e)}))},g=(d=o("fT9c6"),o("gjiCh"));function f(e=1){(0,g.showLoader)();const t=r("favoriteRecipes");if(s.allButton.style.display=t&&t.length?"block":"none",!t||0===t.length)return s.noFavoritesMessage.classList.remove("visually-hidden"),s.allButton.classList.add("visually-hidden"),void(window.innerWidth<768&&s.heroImage.classList.add("visually-hidden"));const n=c(),i=l(t,n),o=Object.keys(i).length;s.paginationElement.style.display=o>1?"block":"none",p(e,n,o,f);const a=i[e].map((({title:e,description:t,preview:n,rating:i,id:o,category:a})=>(0,d.renderingFavRec)(e,t,n,i,o,a))).join("");s.recipesListContainer.innerHTML=a,s.noFavoritesMessage.classList.add("visually-hidden"),(0,g.hideLoader)()}g=o("gjiCh");let m="";g=o("gjiCh");function v(e){return`<button class="fav-button">${e}</button>`}function y(e){(0,g.showLoader)();const t=e.closest("div.recipe-item").dataset.category,n=r("favoriteRecipes"),i=n.find((e=>e.category===t)),o=[...refs.categoriesContainer.children].find((e=>e.textContent===t));!i&&o?o.remove():i&&!o&&refs.categoriesContainer.insertAdjacentHTML("beforeend",v(t)),refs.allButton.style.display=n&&n.length?"block":"none",(0,g.hideLoader)()}g=o("gjiCh");new(0,a.default);function h(){(0,g.showLoader)();const e=function(){const e=localStorage.getItem("favoriteRecipes"),t=JSON.parse(e);if(!t||0===t.length)return"";return t.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t)).reduce(((e,t)=>e+v(t)),"")}(),t=r("favoriteRecipes");s.recipesListContainer.innerHTML="",s.categoriesContainer.innerHTML=t&&t.length?`<button class="fav-button common-btn is-active" name="main-cat-btn">All categories</button>${e}`:"",f(),(0,g.hideLoader)()}function L(e){const t=e.dataset.info,n=(JSON.parse(localStorage.getItem("favoriteRecipes"))||[]).filter((e=>e.id!==t));localStorage.setItem("favoriteRecipes",JSON.stringify(n)),h()}window.addEventListener("load",(function(){const e=document.querySelectorAll(".menu-nav-links");e[0].classList.contains("header-accent")&&(e[0].classList.remove("header-accent"),e.length>1&&e[1].classList.add("header-accent"))})),document.addEventListener("click",(function(e){e.target.closest(".heart-btn")&&function(e){const t=e.target;L(t),t.classList.remove("active")}(e)})),s.renderedRecipesBox.addEventListener("click",(function({target:e}){if(!e.closest("button"))return;const t=e.closest("button");"favoriteRecipes"===t.name&&(L(t),y(e))})),s.categoriesList.addEventListener("click",(function(e){if((0,g.showLoader)(),e.target.classList.contains("is-active"))return;let t,n=[];s.recipesListContainer.innerHTML="",e!==Number(e)&&"BUTTON"===e.target.nodeName&&(!function({target:e}){const t=document.querySelector(".is-active");t?t.classList.remove("is-active"):s.allButton.classList.add("is-active"),e.classList.add("is-active")}(e),m="main-cat-btn"===e.target.name?"":e.target.textContent);const i=localStorage.getItem("favoriteRecipes");if(n=JSON.parse(i),!n||0===n.length)return void(s.categoriesContainer.style.display="none");if(!m)return void f();t=[...n.filter((e=>e.category===m))];let o=1;Number(e)===e&&(o=e);const a=c(),r=l(t,a),u=Object.keys(r).length;s.paginationElement.style.display=u>1?"block":"none",p(o,a,u,f);const v=r[o].reduce(((e,{title:t,description:n,preview:i,rating:o,id:a,category:s})=>e+(0,d.renderingFavRec)(t,n,i,o,a,s)),"");s.recipesListContainer.innerHTML=v,(0,g.hideLoader)()})),document.addEventListener("DOMContentLoaded",h),o("a1JXa");const b=document.querySelector(".scroll-to-top"),w=document.querySelector(".fav-list");let S=window.pageYOffset;b.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"}),b.style.display="none"})),window.addEventListener("scroll",(function(){const e=window.innerHeight,t=w.offsetHeight,n=window.scrollY;b.style.display=n<=S||n+e>=t?"block":"none",(0===n||n>S)&&(b.style.display="none"),S=n}));var C=o("2shzp");let k;const E=document.querySelector(".backdrop-recipes"),q=document.querySelector(".modal-close-btn"),x=document.querySelector(".modal-recipes");function M(){x&&(x.classList.remove("is-hidden"),E.classList.remove("is-hidden"),document.addEventListener("keydown",O),x.addEventListener("click",(e=>{e.stopPropagation()})),E.removeEventListener("click",R),E.addEventListener("click",R),H(k))}function R(){if(x){document.querySelector(".recipes-iframe-video").src="",x.classList.add("is-hidden"),document.removeEventListener("keydown",O),E.removeEventListener("click",R),E.classList.add("is-hidden")}}function O(e){"Escape"===e.key&&R()}async function T(e){const t=`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`;try{const e=(await C.default.get(t)).data;return function(e){const t=document.querySelector(".recipes-iframe-video");t.src="";const n=function(e){const t=/(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/)([\w-]+)/i,n=e.match(t);return n&&n[1]?n[1]:""}(e.youtube);t.src=`https://www.youtube.com/embed/${n}`}(e),r=e,document.querySelector(".recipes-title").textContent=r.title,s=e,document.querySelector(".recipes-description").textContent=s.instructions,a=e,document.querySelector(".recipes-cooking-time").textContent=a.time,o=e,document.querySelector(".ratinng-value").textContent=o.rating,i=e,document.querySelector(".recipes-hashtags-list").innerHTML=i.tags.map((e=>`<li class="recipes-hashtags-item">#${e}</li>`)).join(""),n=e,document.querySelector(".recipes-components-list").innerHTML=n.ingredients.map((({measure:e,name:t})=>`\n    <li class="recipes-components-item">\n      <p class="recipes-components-item_name">${t}</p>\n      <p class="recipes-components-item_quantity">${e}</p>\n    </li>\n  `)).join(""),function(e){const t=parseFloat(e.rating),n=document.querySelectorAll(".modal-rating-star-icon");for(let e=0;e<n.length;e++)e<t?n[e].classList.add("active"):n[e].classList.remove("active")}(e),e}catch(e){console.log(e)}var n,i,o,a,s,r}function N(){return JSON.parse(localStorage.getItem("favoriteRecipes"))||[]}function I(e){localStorage.setItem("favoriteRecipes",JSON.stringify(e))}q.addEventListener("click",R),document.addEventListener("keydown",O),E.addEventListener("click",(e=>{e.target===x||x.contains(e.target)||R()})),E.addEventListener("click",(e=>{e.target===E&&R()})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".image-container"),t=document.querySelector(".popular-list");e.addEventListener("click",(async e=>{const t=e.target.closest(".rec-btn-open");if(!t)return;const n=t.dataset.id;try{const e=await T(n);e&&(k=e,H(k),M())}catch(e){console.log(e)}})),t&&t.addEventListener("click",(async e=>{const t=e.target.closest(".popular-list-item");if(!t)return;const n=t.dataset.id;try{const e=await T(n);e&&(k=e,H(k),M())}catch(e){console.log(e)}}))}));const B=document.querySelector(".btn-add-favorite");function j(e){return N().some((t=>t.id===e._id))}function H(e){const t=j(e);B.textContent=t?"Remove from favorite":"Add to favorite"}B.addEventListener("click",(()=>{var e;j(k)?(e=k,I(N().filter((t=>t.id!==e._id))),h(),B.textContent="Add to favorite"):(!function(e){const t=N(),{_id:n,title:i,category:o,rating:a,preview:s,description:r}=e,c={id:n,title:i,category:o,rating:a,preview:s,description:r};j(e)?(I(t.filter((e=>e.id!==n))),B.textContent="Add to favorite"):(t.push(c),B.textContent="Remove from favorite");I(t)}(k),B.textContent="Remove from favorite")})),o("eRvZ4"),o("lJ5oQ");
//# sourceMappingURL=favorites.5fcf9f08.js.map
