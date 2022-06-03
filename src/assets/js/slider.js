// window.addEventListener('load',function(e){
//     let vt = 0;
//     const sliders = document.getElementsByClassName('mySlides')
//     sliders[vt].classList.add('mySlides-active')

//     const size = sliders.length
//     function removeActive(){
//         for(let i =0; i < sliders.length; i ++){
//             sliders[i].classList.remove('mySlides-active')
//         }
//     }

//     document.getElementById('btnNext').addEventListener('click',(e)=>{
//         vt++;
        
//         if(vt >=size)
//         {
//             vt = 0;
//         }
//     })
//     removeActive()
//     sliders[vt].classList.add('mySlides-active')
// })

// window.addEventListener('load', function(event){
//     let vt = 0; 
//     const sliders = document.getElementsByClassName('mySlides')
//     sliders[vt].classList.add('mySlides-active')
//     const size =sliders.length
//     function removeActive() {
//       for (let i = 0; i < sliders.length; i++) {
//         sliders[i].classList.remove('mySlides-active')
//       }
//     }

//     document.getElementById('btnNext').addEventListener('click',
//     function(event) {
//       vt++
//       if(vt >= size) {
//         vt =0
//       }
//       removeActive() 
//       sliders[vt].classList.add('myslides-active')
//       }
//     )
//     document.getElementById('btnPrev').addEventListener('click',
//     function(event) {
//       vt--
//       if(vt <= size) {
//         vt = size-1
//       }
//       removeActive() 
//       sliders[vt].classList.add('myslides-active')
//       })
// })

window.addEventListener('load', function(event) {
    let vt = 0;
    const sliders = document.getElementsByClassName('mySlides')
    sliders[vt].classList.add('mySlides-active')
    const size = sliders.length;

    function removeActive() {
        for (let i = 0; i < sliders.length; i++) {
            sliders[i].classList.remove('mySlides-active')
        }
    }
    document.getElementById('btnNext').addEventListener('click', function(event) {
        vt++;
        if (vt >= size) {
            vt = 0
        }
        removeActive();
        sliders[vt].classList.add('mySlides-active')
    })

    this.document.getElementById('btnPrev').addEventListener('click', function(event) {
        vt--;
        if (vt < 0) {
            vt = size - 1
        }
        removeActive()
        sliders[vt].classList.add('mySlides-active')
    })
})