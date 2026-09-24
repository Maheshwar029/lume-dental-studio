document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll(".about-hero-photo img,.about-experience-photo img").forEach(img=>img.addEventListener("load",()=>img.classList.add("loaded")));
 const items=[...document.querySelectorAll(".journey-steps>div,.experience-grid>div,.values-list>div")];
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in-view")}),{threshold:.15});
 items.forEach(item=>observer.observe(item));
});