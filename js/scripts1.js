document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('#mainSlider');
    console.log(slider);
    var prevBtn = slider.querySelector('.main-slider-prev');
    console.log(prevBtn);
    var nextBtn = slider.querySelector('.main-slider-next');
    console.log(nextBtn);
    var slideList = slider.querySelectorAll('.main-slider-slide');
    console.log(slideList);
    var currentSlide = 0;

    //na wszeli wypadek nadaje pierwszemu slidowi klasę active
    slideList[currentSlide].classList.add('active')

    nextBtn.addEventListener('click', function(){
        //console.log('działa');
        //zabieram aktualnemu slajdowi klase active.
        slideList[currentSlide].classList.remove('active');
        //zwiekszam numer wyswietlanego slajdu o 1 
        currentSlide++;
        //warunek zeby działało w petli
        if (currentSlide > slideList.length - 1) {
            currentSlide = 0;
        }
        //dodaje do nowego slajdu klase active, zeby był widoczny na strtonie
        slideList[currentSlide].classList.add('active');
       
    })

    prevBtn.addEventListener('click', function(){
        //console.log('działa2');
        slideList[currentSlide].classList.remove('active');
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slideList.length - 1;
        }
        slideList[currentSlide].classList.add('active');
    })


});


document.addEventListener('DOMContentLoaded', function(){

    var boxList = document.querySelectorAll('.info-box');
    console.log(boxList);

    //var txtBox = document.querySelectorAll('.info-box-cnt');
    //console.log(txtBox);

    for (var i=0; i<boxList.length; i++) {
        //var txtBox = boxList[i].getElementsByClassName('info-box-cnt');
        
        boxList[i].addEventListener('mouseover', function(){
            //console.log(this);
            var txtBox = this.firstElementChild.nextElementSibling;
            //console.log(txtBox);
            //txtBox.style.display = 'none';
            txtBox.classList.add('isHidden');
            
            
        })
        boxList[i].addEventListener('mouseout', function(){
            var txtBox = this.firstElementChild.nextElementSibling;
            //txtBox.style.display = 'block';
            txtBox.classList.remove('isHidden');
        })
    }
    
});


