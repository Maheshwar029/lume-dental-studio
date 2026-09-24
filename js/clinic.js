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
     card.classList.add("is-selected"); updateSchedule(card);
   });
 });
});
function updateSchedule(card){
 const band=document.querySelector(".clinic-schedule"); if(!band||!card)return;
 const isGurgaon=card.dataset.location.includes("gurugram");
 const label=band.querySelector(".schedule-copy label");
 const title=band.querySelector(".schedule-panel-head span");
 const rows=[...band.querySelectorAll(".schedule-row b")];
 const address=band.querySelector(".schedule-copy>p");
 const directions=band.querySelector(".schedule-location-link");
 if(isGurgaon){label.textContent="GURUGRAM · GOLF COURSE ROAD";title.textContent="Gurugram";address.textContent="Sector 54, Golf Course Road, Gurugram, Haryana. Visit the clinic, call the care team or request an appointment online.";directions.href="https://maps.google.com/?q=Golf+Course+Road+Gurugram";}
 else{label.textContent="GREATER KAILASH II · NEW DELHI";title.textContent="Greater Kailash II";address.textContent="Visit the clinic, call the care team or request an appointment online. Our team can help with treatment questions before your visit.";directions.href="https://maps.google.com/?q=Greater+Kailash+II+New+Delhi";}
 rows.forEach(r=>r.textContent="9:00 AM – 8:00 PM");
}
