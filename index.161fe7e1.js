!function(){var e={month:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]},t=document.querySelector(".js-form"),n=document.querySelector(".js-date-descr"),a=n.querySelector(".js-day"),r=n.querySelector(".js-date"),o=n.querySelector(".js-month"),u=n.querySelector(".js-year"),d=0,y=function(t){var n=new Date(t),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()+d);return d+=1,{day:e.days[a.getDay()],date:a.getDate(),month:e.month[a.getMonth()],year:a.getFullYear()}},c=function(e){a.textContent=e.day,r.textContent=e.date,o.textContent=e.month,u.textContent=e.year+" рік"};t.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.date.value,n=y(t);c(n),setInterval((function(){var e=y(t);c(e)}),2e3)}))}();
//# sourceMappingURL=index.161fe7e1.js.map
