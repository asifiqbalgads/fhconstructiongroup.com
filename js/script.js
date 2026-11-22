const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu')}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.addEventListener('click',event=>{if(event.target.closest('a')) closeMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu()});
window.addEventListener('resize',()=>{if(window.innerWidth>900) closeMenu()});
document.querySelector('#year').textContent = new Date().getFullYear();
