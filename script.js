                 // navbar
function mynav() {
    let bar=document.querySelector(".bar"),
    links=document.querySelector(".nav-links");
    
    bar.addEventListener("click",() =>{
        links.classList.toggle("display");
        bar.children[0].classList.toggle("toggle1");
        bar.children[1].classList.toggle("toggle2");
        bar.children[2].classList.toggle("toggle3");
    });
}
               /*----end---*/

               //contact
function myform() {
    
    const form=document.getElementById("form");
        const username=document.getElementById("username");
        const phone=document.getElementById("phone");
        const number=document.getElementById("number");
        
        function checkReckquired(inputs){
            inputs.forEach(input=> {
         if (input.value.trim()==="") {
         errorInput(input,`${getName(input)}
         is Required`);
                   }else{
                    successInput(input);
                   }
            });
        }
        //create to the checklength function
        function checklength(input,min,max){
            // if(input.value.trim().length)
            const data=input.value.trim().length;
            if(data<min){
         errorInput(input, `Please enter your ${getName(input)} number.`);
            }
         else{
             successInput(input);
            }
         }
        //get to the feild msg
        function getName(input){
            return input.id;
           // return input.getAttributte("data-name"); //get to the html data attribute
        }
        // create errorinput function
        function errorInput(input,message){
            const formGroup=input.parentElement;
            formGroup.className ="form-group error";
            const p= formGroup.querySelector('p');
            p.innerHTML= message;
        }
        // create successinput function
        function successInput(input){
            const formGroup=input.parentElement;
            formGroup.className ="form-group success";
            const p= formGroup.querySelector('p');
            p.innerHTML= " ";
        }
        // create form Event
        form.addEventListener("submit", function (e) {
            e.preventDefault();
         checkReckquired([username,phone,number]);
         checklength(phone,10);  
            });
        }
                     /*----ene---*/
        //carousel
        
            let slideposition=0;
            const slider=document.querySelectorAll(".slider-item");
            const totalslider=slider.length;
            const btnprev=document.querySelector("#btn-prev");
            const btnnext=document.querySelector("#btn-next");
            
            btnprev.addEventListener('click', function(){
                preview();
            });
            btnnext.addEventListener('click', function(){
                next();
            });
            
            function update(){
                slider.forEach(slide=>{
                slide.classList.remove('active');
                slide.classList.add('hidden');
            });
            
            slider[slideposition].classList.add('active');
            
            dots.forEach(dot=>{
                dot.classList.remove('dot-active');
            });
            
            dots[slideposition].classList.add('dot-active');
            }
            
            function preview(){
               if(slideposition==0){
                slideposition=totalslider-1;
               }
               else{
                slideposition--;
               }
                update();
            }
            function next(){
                if(slideposition==totalslider-1){
                    slideposition=0;
                }
                else{
                    slideposition++;
                }
                update();
            }
            
            const dotcontainer=document.querySelector('.dots');
            slider.forEach(slide=>{
                const dot=document.createElement('div');
                dot.classList.add('dot');
                dotcontainer.appendChild(dot);
            });
            
            const dots=document.querySelectorAll('.dot');
            dots[slideposition].classList.add('dot-active');
            
            dots.forEach((dot,index)=>{
                dot.addEventListener('click',function(){
                    slideposition=index;
                    update();
                });
            });
            
            setInterval(()=>{
                if(slideposition==totalslider-1)
                {
                  slideposition=0;
                }else{
                  slideposition++;
                }
                updatePosition();
              },1000); 





             // gallery-card



function mygallery(){
    let modal=document.createElement('div');
    modal.id='modal';
    document.body.appendChild(modal);
    const images=document.querySelectorAll('.img');
    
    images.forEach(image=>{
        image.addEventListener('click',()=>{
            modal.classList.add('active');
            const img=document.createElement('img');
         img.src=image.src;
        img.id="img";
        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
        }
        modal.append(img);
        });
    });
    modal.addEventListener('click',()=>{
        modal.classList.remove('active');
        
    });}
               /*----end---*/