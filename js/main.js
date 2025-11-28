'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const link = document.querySelectorAll('.links');

  open.addEventListener('click',()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click',()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  link.forEach(link =>{
    link.addEventListener('click',()=>{
      overlay.classList.remove('show');
    open.classList.remove('hide');
    });
  });

  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const ul = document.querySelector('.pic');
  const slides = ul.children;
  let currentIndex = 0;
  const dots = [];
  
  function moveSlides(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function updateButtons(){
    prev.classList.remove('button-hidden');
    next.classList.remove('button-hidden');

    if(currentIndex === 0){
      prev.classList.add('button-hidden');
    };
    if(currentIndex === slides.length -1){
      next.classList.add('button-hidden');
    };
  }

  function setupDots(){
    for(let i = 0; i < slides.length; i++){
      const button = document.createElement('button')
      button.addEventListener('click',()=>{
        currentIndex = i;
        updatedots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.buttons').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updatedots(){
    dots.forEach(dot =>{
          dot.classList.remove('current');
        })
        dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click',()=>{
    currentIndex ++ ;
    updateButtons();
    updatedots();
    moveSlides();
  });
  prev.addEventListener('click',()=>{
    currentIndex -- ;
    updateButtons();
    updatedots();
    moveSlides();
  });
  
}