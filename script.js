// Menu Toggle
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('header nav');
  toggle.addEventListener('click',()=>nav.classList.toggle('open'));

  // Smooth scroll for buttons (if internal links used)
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const href=btn.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Carousel
  let index=0;
  const slide=document.querySelector('.carousel-slide');
  const imgs=document.querySelectorAll('.carousel-slide img');
  const total=imgs.length;
  document.querySelector('.next').addEventListener('click',()=>{ index=(index+1)%total; slide.style.transform=`translateX(-${index*100}%)`; });
  document.querySelector('.prev').addEventListener('click',()=>{ index=(index-1+total)%total; slide.style.transform=`translateX(-${index*100}%)`; });
});