const hamburger = document.querySelector('#humberger');
const navmenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function(){
    humberger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixelnav = header.offsetTop;

    if(window.pageYOffset > fixelnav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

const skill = document.querySelector('#Skill');
const skills = document.querySelector('#Skills');
skill.addEventListener('click', function(){
    skills.classList.toggle('hidden');
    view.classList.add('hidden');
    edu.classList.add('hidden');
});

const experience = document.querySelector('#experience');
const view = document.querySelector('#experiences');
experience.addEventListener('click',function(){
    view.classList.remove('hidden');
    skills.classList.add('hidden');
    edu.classList.add('hidden');
});

const education = document.querySelector('#education');
const edu = document.querySelector('#Educations');

education.addEventListener('click', function(){
    edu.classList.remove('hidden');
    skills.classList.add('hidden');
    view.classList.add('hidden');
});

const progres= document.querySelectorAll('.progres-bar');
setTimeout(() => {
    for(let i = 0; i<progres.length ; i++){
        progres[i].style.opacity = 1;
        progres[i].style.width = progres[i].getAttribute('data-done') + '%';
    }
},700);
const checkbox = document.querySelector('#checkbox');
const checkbox2 = document.querySelector('#checkbox2');
const ball = document.querySelector('.boll');
const html = document.querySelector('html');
checkbox.addEventListener('click', function(){
    if (checkbox.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
    
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
