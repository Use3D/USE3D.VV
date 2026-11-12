(()=>{
  const header=document.getElementById('header');
  const pageProgress=document.getElementById('pageProgress');
  const menuButton=document.getElementById('menuButton');
  const nav=document.getElementById('nav');

  let raf=false;
  function onScroll(){
    if(raf)return;
    raf=true;
    requestAnimationFrame(()=>{
      const max=document.documentElement.scrollHeight-innerHeight;
      if(pageProgress)pageProgress.style.width=(max>0?scrollY/max*100:0)+'%';
      if(header)header.classList.toggle('scrolled',scrollY>20);
      raf=false;
    });
  }
  addEventListener('scroll',onScroll,{passive:true});
  onScroll();

  if(menuButton&&nav){
    function syncDrawerPos(){
      if(!header)return;
      const top=Math.max(0,Math.round(header.getBoundingClientRect().bottom));
      nav.style.top=top+'px';
      nav.style.height=`calc(100svh - ${top}px)`;
    }
    menuButton.addEventListener('click',()=>{
      syncDrawerPos();
      const open=nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded',String(open));
      menuButton.textContent=open?'×':'☰';
      document.body.classList.toggle('locked',open);
    });
    addEventListener('resize',()=>{if(nav.classList.contains('open'))syncDrawerPos()});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded','false');
      menuButton.textContent='☰';
      document.body.classList.remove('locked');
    }));
    addEventListener('keydown',e=>{
      if(e.key==='Escape'&&nav.classList.contains('open')){
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded','false');
        menuButton.textContent='☰';
        document.body.classList.remove('locked');
        menuButton.focus();
      }
    });
  }

  const tocLinks=[...document.querySelectorAll('.toc-list a')];
  const sections=tocLinks
    .map(link=>document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if('IntersectionObserver' in window&&sections.length){
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const id='#'+entry.target.id;
          tocLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===id));
        }
      });
    },{rootMargin:'-20% 0px -65% 0px',threshold:0});
    sections.forEach(sec=>obs.observe(sec));
  }
})();
