const e={month:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},t=document.querySelector(".js-form"),n=document.querySelector(".js-date-descr"),a=n.querySelector(".js-day"),o=n.querySelector(".js-date"),r=n.querySelector(".js-month"),s=n.querySelector(".js-year");let d=0;const l=t=>{const n=new Date(t),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()+d);return d+=1,{day:e.days[a.getDay()],date:a.getDate(),month:e.month[a.getMonth()],year:a.getFullYear()}},y=e=>{a.textContent=e.day,o.textContent=e.date,r.textContent=e.month,s.textContent=e.year+" рік"};t.addEventListener("submit",(e=>{e.preventDefault();const{value:t}=e.target.elements.date,n=l(t);y(n),setInterval((()=>{const e=l(t);y(e)}),2e3)}));
//# sourceMappingURL=index.a9817f46.js.map