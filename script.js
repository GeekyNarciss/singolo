//header
window.addEventListener('scroll', onScroll);
window.onload = onScroll;

function onScroll(){
    let currentPosition = window.scrollY;
    let heder_size = document.querySelector('header').offsetHeight;
    let divs = document.querySelectorAll('body>div');
    let navigation = document.querySelectorAll('#header-n>a');

    divs.forEach((el)=>{
        if(el.offsetTop - heder_size  <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition){
            navigation.forEach((a)=>{
                a.classList.remove('active_nav');
                if(a.getAttribute('href').substring(1) === el.getAttribute('id')){
                    a.classList.add('active_nav');   
}
            })
        }
    });

}

let bg_menu_open = false;
let bg_botton = document.querySelector("body > header > div.container > div")
let bg_menu = document.querySelector("body > header > div.menu-bg")

bg_botton.addEventListener('click', (event)=>{
    if(bg_menu_open){
        bg_botton.classList.remove('burger-button-open');
        bg_menu.classList.remove('menu-bg-open');
    }else{
        bg_botton.classList.add('burger-button-open');
        bg_menu.classList.add('menu-bg-open');
    }
    bg_menu_open = !bg_menu_open;
});

document.querySelector("body > header > div.menu-bg").addEventListener('click', (event) => {
    if(bg_menu_open){
        bg_botton.classList.remove('burger-button-open');
        bg_menu.classList.remove('menu-bg-open');
        bg_menu_open = !bg_menu_open;
    }
});


//slider
function clickOnChev(){
    if(slider_1){
        iphones.style = 'background: url(assets/slider-2.png);height: 513px;;background-repeat: no-repeat;'
        iphone.forEach(elem => elem.style = 'display: none');
        slider.style = 'background-color: #648bf0; border-bottom: 6px solid #74b9ff';
        slider_1 = false
    }else{
        iphones.style = '';
        iphone.forEach(elem => elem.style = '');
        slider.style = '';
        slider_1 = true;
    }
}

function clickOnIphone(){
    let style_for_screen = 'background: #000';
    let this_iphone = Array.from(this.getElementsByClassName('iphone-screen'))[0];
    if(this_iphone.style.length){
        this_iphone.style = '';
    }else{
        this_iphone.style = style_for_screen;
    }
}

let iphones = Array.from(document.getElementsByClassName('iphones'))[0];
let slider = Array.from(document.getElementsByClassName('slider'))[0];
let iphone = Array.from(document.getElementsByClassName('iphone'));
iphone.forEach(elem => elem.onclick = clickOnIphone)

let slider_1 = true;


//portfolio
function changeTabColor(item) {
  if (item.disabled) return;
  tabs.forEach(item => {
    item.disabled = false;
    item.style.color = '#767e9e';
    item.style.borderColor = '#666d89';
  });

  item.style.color = '#c5c5c5';
  item.style.borderColor= '#c5c5c5';
  item.disabled = true; 

  images.forEach((item, index) => {
    let current =  index - temp <= 0 ? index - temp + 12 : index - temp;
    item.src = `assets/image_${current}.svg`
    item.alt = `image_${current}`;
    if (item.style.borderWidth == '5px') {
      item.style.borderWidth = '0px';
      item.style.left = '0px';
      item.style.top = '0px';
    }
  });
  temp ++;
  if (temp == 12) temp = 0;
}

function changeImageBorder(item) {
  if (item.style.borderWidth != '5px') {
    images.forEach(item => {
      item.style.borderWidth = '0px';
      item.style.left = '0px';
      item.style.top = '0px';
    });
    
    if (item.style.borderColor != '#F06C64') {
    item.style.border = '5px solid #F06C64';
    item.style.left = '-5px';
    item.style.top = '-5px';
    }
  }
  else {
    item.style.borderWidth = '0px';
    item.style.left = '0px';
    item.style.top = '0px';
  }
}

let tabs = document.querySelectorAll('#portfolio > div > ul > li');
let temp = 0; 
tabs[0].style.color = '#c5c5c5';
tabs[0].style.borderColor = '#c5c5c5';
tabs.forEach(item => item.addEventListener('click', () => changeTabColor(item)));
let images = document.querySelectorAll('#portfolio > div > div > img');
images.forEach(item => {
  item.style.position = 'relative';
  item.addEventListener('click', () => changeImageBorder(item));
});


//get-a-quote
const FORM = document.getElementById('form-elem');
const FORMSUBJECT = document.querySelector('.input-subject');
const FORMDESC = document.querySelector('.input-desc');
const MODAL = document.querySelector('.modal-overlay');

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    MODAL.hidden = false;

    if (!FORMSUBJECT.value) MODAL.querySelector('.modal p:nth-child(2)').insertAdjacentHTML('beforeend', '<span id = "theme-in-modal">Без темы</span>');
    else {
        MODAL.querySelector('.modal p:nth-child(2)').insertAdjacentHTML('beforeend', `<span id = "theme-in-modal"><strong>Тема: </strong>${FORMSUBJECT.value}</span>`);
    }

    if (!FORMDESC.value) MODAL.querySelector('.modal p:nth-child(3)').insertAdjacentHTML('beforeend', '<span id = "desc-in-modal">Без описания</span>');
    else {
        MODAL.querySelector('.modal p:nth-child(3)').insertAdjacentHTML('beforeend', `<span id = "desc-in-modal"><strong>Описание: </strong>${FORMDESC.value}</span>`);
    }
});

const OKBTN = document.getElementById('ok-btn');

OKBTN.addEventListener('click', function(event) {
    MODAL.hidden = true;
    MODAL.querySelector('#theme-in-modal').remove();
    MODAL.querySelector('#desc-in-modal').remove();
    FORM.reset();
})
