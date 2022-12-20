    'use strict'

    // const swiper = new Swiper('.swiper_01', {
    //     direction: 'horizontal',
    //     loop: true,  //무한스크롤//

    //     slidesPerView: 2.5,
    //     spaceBetween: 150,
    //     freeMode: true,
        
    //      autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
      
    // });

    // new Swiper('.swiper_02', {
    //   direction: 'horizontal',
    //   loop: true,  //무한스크롤//

    //   slidesPerView: 2,
    //   freeMode: true,
    //   autoplay: {
    //       delay: 2500,
    //       disableOnInteraction: false,
    //   },
    
    // });

    // new Swiper('.swiper_03', {
    //   direction: 'horizontal',
    //   loop: true,  //무한스크롤//

    //   slidesPerView: 1,
    //   freeMode: true,
    //   autoplay: {
    //       delay: 2000,
    //       disableOnInteraction: false,
    //   },
    
    // });


    // //상단버튼//
    // const topBtn = document.querySelector(".gototop");
    //   topBtn.onclick = () => {
    //   window.scrollTo({ top: 0, behavior: "smooth" });  
    //   };

    // //하단버튼//
    // const $bottomBtn = document.querySelector(".gotodown");

    //   $bottomBtn.onclick = () => {
    //   window.scrollTo({ top: document.body.scrollHeight-1000, behavior: "smooth" });
    // };

    // //필터 드롭다운//
    // function dp_menu_02(){
    //   let click = document.getElementById("drop-content_sort");
    //   if(click.style.display === "none"){
    //       click.style.display = "block";
    //       document.getElementById(this.id + '-toggle').textContent = '+';
    //   }else{
    //       click.style.display = "none";
    //       document.getElementById(this.id + '-toggle').textContent = '-';
    //   }
    // }
    // items.forEach(item => item.addEventListener('click', dp_menu_02));

    // function dp_menu_01(){
    //   let click01 = document.getElementById("drop-content_filter");
    //   if(click01.style.display === "none"){
    //       click01.style.display = "block";

    //   }else{
    //       click01.style.display = "none";

    //   }
    // }

    const $container = document.querySelector('#grid_container')

    const url = 'product.json'
    fetch('product.json')
    .then(res => res.json())
    .then(makeDisplay)

    const url2 = 'cartalog.json'
    fetch(url2)
    .then(res=>res.json())
    .then(catalog)

    function catalog(item) {
      item.forEach(element=>{
        product_2(element)
      })
    }

    function product_2(item){
      const $div_2=document.createElement('div')
      $div_2.classList.add('catalog')
      $div_2.innerHTML=`
      <a href="">
          <div class="catalog_img">
              <img src="img/catalog/catalog.png" alt="">
          </div>
          <div class="catalog_text">
              <p>MORE</p>
              <p>LIGHTING</p>
              <p>CATALOG</p>
          </div>
      </a>
      `
    }

    function makeDisplay(item){
      // console.log(item);
        item.forEach((element,index) => {
        product(element,index)
      });
    }
    
    function product(item,index){

      const $div=document.createElement('div')
      $div.classList.add('item')

      var image_clss ='image'
      var img_picture = 'img_picture'
      var img_overEffect = 'img_overEffect'

      if(index===2||index===7){
        $div.classList.add('big_grid_0')
        img_picture='img_picture_bg'
        image_clss='image_bg'
        img_overEffect = 'img_overEffect_bg'
      }

      

      $div.innerHTML=`
      <a href="${item.href}">
      <div class="${image_clss}">
          <img src="${item.img_picture}" alt="01" class="${img_picture}">
          <img src="${item.img_overEffect}" alt="01_hover" class="${img_overEffect}">
      </div>
      <div class="product">
          <div class="designer_name">${item.designer_name}</div>
          <div class="product_name">${item.product_name}</div>
          <div class="price">${item.price}</div>
      </div>
      </a>
      `
      // console.log($div);
      $container.append($div)

    }
  
    const click = document.querySelector(".filter_container");
    const $button = click.querySelectorAll('button')
    const $filter = click.querySelector('#drop-content_filter')
    const $sort = click.querySelector('#drop-content_sort')
    const $li=click.querySelectorAll('li')
    console.log($li);
    
    $button.forEach((item,index)=>{
      item.addEventListener('click',e=>{
        $li.forEach((item2,index2)=>{
          item2.style.display="block"
          console.log(item2);
        })
      })
    })
    
