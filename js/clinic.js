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
 const address=band.querySelector(".schedule-details a:nth-child(1) b");
 const phone=band.querySelector(".schedule-details a:nth-child(2) b");
 const email=band.querySelector(".schedule-details a:nth-child(3) b");
 const directions=band.querySelector(".schedule-location-link");
 const map= document.querySelector(".clinic-map-wide iframe");
 const overlay=band.nextElementSibling?.querySelector(".map-wide-overlay");
 if(isGurgaon){
   label.textContent="FIND US · GURUGRAM";
   address.innerHTML="Sector 54, Golf Course Road<br>Gurugram, Haryana";
   phone.textContent="+91 11 4000 1234";
   email.textContent="care@lumedentalcare.in";
   directions.href="https://maps.google.com/?q=Golf+Course+Road+Gurugram";
   if(map) map.src="https://www.google.com/maps?q=Golf+Course+Road+Gurugram&output=embed";
   if(overlay){overlay.querySelector("b").textContent="LUMÉ Dental Care · Gurugram";overlay.querySelector("small").textContent="Sector 54, Golf Course Road, Gurugram";overlay.querySelector("a").href=directions.href;}
 }else{
   label.textContent="FIND US";
   address.innerHTML="F-12, Greater Kailash II<br>New Delhi, 110048";
   phone.textContent="+91 11 4000 1234";
   email.textContent="care@lumedentalcare.in";
   directions.href="https://maps.google.com/?q=Greater+Kailash+II+New+Delhi";
   if(map) map.src="https://www.google.com/maps?q=Greater+Kailash+II+New+Delhi&output=embed";
   if(overlay){overlay.querySelector("b").textContent="LUMÉ Dental Care · GK II";overlay.querySelector("small").textContent="F-12, Greater Kailash II, New Delhi 110048";overlay.querySelector("a").href=directions.href;}
 }
}