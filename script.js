var typed = new Typed('#element', {
    strings: ['This side Rohit Singh And this is my project for the HTML DEVELOPER....'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

// Image Slider

  var img = ['img/b4.jpg',
              'img/b11.jpg',
              'img/b12.jpg',
              'img/b13.jpg',
              'img/b14.jpg'];
   const firstImg = 0;
   const lastImg = img.length;
   let currentImg = 0;

   // next button

   const next = document.getElementById('next');
   next.addEventListener('click',()=> {
      const image = document.getElementById('image');
      currentImg++;
      if(currentImg >= lastImg){
        currentImg = 0;
      }
      image.src = img[currentImg]
      document.getElementById('info').innerHTML = (currentImg + 1) +'/5'

   })

   // prev button

   const prev = document.getElementById('prev');
   prev.addEventListener('click', () =>{
    const image = document.getElementById('image')
    currentImg--;
    if(currentImg < firstImg){
         currentImg = 4
    }
    image.src= img[currentImg];
    document.getElementById('info').innerHTML = (currentImg +1) + '/5'
   })

