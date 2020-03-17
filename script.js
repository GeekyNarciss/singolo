//header
function changeHeaderColor(item) {
    anchors.forEach(item => item.style.color = "#fff");
    item.style.color = "#f06c64";
  }
  
  function scrollToAnchor(item, index) {
    if (index == 0) {
      window.scrollTo(0, 0);
    } 
    else if (index == 1) {
      window.scrollTo(0, 600);
    } 
    else if (index == 2) {
      window.scrollTo(0, 1100);
    }
    else if (index == 3) {
      window.scrollTo(0, 1967);
    }
    else if (index == 4) {
      window.scrollTo(0, 2703);
    }
    changeHeaderColor(item);
  }
  
  let anchors = document.querySelectorAll("nav > a");
  anchors[0].style.color = "#f06c64";
  anchors.forEach((item, index) => item.addEventListener("click", () => scrollToAnchor(item, index)));


//slider
function click_on_chev(){
    if(slider_1){
        iphones.style = 'background: url(assets/slider-2.png);height: 513px;'
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

function chlick_on_iphone(){
    let style_for_screen = 'background: #000';
    let this_iphone = Array.from(this.getElementsByClassName('screen-iphone'))[0];
    if(this_iphone.style.length){
        this_iphone.style = '';
    }else{
        this_iphone.style = style_for_screen;
    }
}

let iphones = Array.from(document.getElementsByClassName('iphones'))[0];
let slider = Array.from(document.getElementsByClassName('slider'))[0];
let iphone = Array.from(document.getElementsByClassName('iphone'));
iphone.forEach(elem => elem.onclick = chlick_on_iphone)

let slider_1 = true;


//portfolio
function changeTabColor(item) {
  if (item.disabled) return;
  tabs.forEach(item => {
    item.disabled = false;
    item.style.color = "#767e9e";
    item.style.borderColor = "#666d89";
  });

  item.style.color = "#c5c5c5";
  item.style.borderColor= "#c5c5c5";
  item.disabled = true; 

  images.forEach((item, index) => {
    let current =  index - temp <= 0 ? index - temp + 12 : index - temp;
    item.src = `assets/image_${current}.svg`
    item.alt = `image_${current}`;
    if (item.style.borderWidth == "5px") {
      item.style.borderWidth = "0px";
      item.style.left = "0px";
      item.style.top = "0px";
    }
  });
  temp ++;
  if (temp == 12) temp = 0;
}

function changeImageBorder(item) {
  if (item.style.borderWidth != "5px") {
    images.forEach(item => {
      item.style.borderWidth = "0px";
      item.style.left = "0px";
      item.style.top = "0px";
    });
    
    if (item.style.borderColor != "#F06C64") {
    item.style.border = "5px solid #F06C64";
    item.style.left = "-5px";
    item.style.top = "-5px";
    }
  }
  else {
    item.style.borderWidth = "0px";
    item.style.left = "0px";
    item.style.top = "0px";
  }
}

let tabs = document.querySelectorAll("#portfolio > div > ul > li");
let temp = 0; 
tabs[0].style.color = "#c5c5c5";
tabs[0].style.borderColor = "#c5c5c5";
tabs.forEach(item => item.addEventListener("click", () => changeTabColor(item)));
let images = document.querySelectorAll("#portfolio > div > div > img");
images.forEach(item => {
  item.style.position = "relative";
  item.addEventListener("click", () => changeImageBorder(item))
});
