document.addEventListener("DOMContentLoaded",()=>{
 const cards=[...document.querySelectorAll(".clinic-location")];
 const input=document.querySelector("#clinicSearch");
 const empty=document.querySelector("#noClinics");
 const filter=()=>{
   const q=(input?.value||"").trim().toLowerCase();
   let visible=0;
   cards.forEach(card=>{
     const match=!q||card.dataset.location.includes(q);
     card.hidden=!match;
     if(match) visible++;
   });
   if(empty) empty.classList.toggle("show",visible===0);
 };
 input?.addEventListener("input",filter);
 cards.forEach(card=>{
   card.addEventListener("click",e=>{
     if(e.target.closest("a,button,input")) return;
     cards.forEach(c=>c.classList.remove("is-selected"));
     card.classList.add("is-selected");
   });
 });
});