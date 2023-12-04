//close button
const close =document.createElement('button');
close.textContent='close';
close.style.color='blue';
//check out btn
const out =document.createElement('button');
out.textContent='checkout';
out.style.color='blue';
out.setAttribute('class','hide');
// varables
        var count = document.getElementById("count");
        var value=0;
        var regSpatlo = document.getElementById("bb");  
        var bullSpatlo = document.getElementById("bs");  
        var burgerSpatlo = document.getElementById("burger");  
        var counter =1;
        var cardCont = document.getElementById("cardC");
        var cardView = document.getElementById("cardview");
        var spatloReg =17;
        var spatloBul =22;
        var spatloBur =21;
        var Cc = 1;
        var Cc1 = 1;
        var Cc2 = 1;
        var btnPressed = false;
        var btn1Pressed = false;
        var btn2Pressed = false;
        var shown =false;
        var selectedItem=0;
        var total1=0;
        var total2=0;
        var total3=0;
        var combinedTotal=0;
        
        // cart click event
        function alertFun(){
            var result = value + counter;
            cardView.classList.remove('hide');
            shown=true;
            if(shown){
                cardCont.appendChild(close);
                cardCont.append(out);
                if(selectedItem>0){
                out.classList.remove('hide');
                }
                if(selectedItem==0){
                    out.classList.add('hide');
                }
                count.innerHTML = result;
                
                    //checkoutButton();
                
                
            }
        }
        //check out button
        

        // close buttom
        close.addEventListener('click',function(){
            cardView.classList.add('hide');
            count.innerHTML=value;
            if(value==0){
                count.classList.add('hide');

            }
            
        })
        
        
// regSpatlo add
regSpatlo.addEventListener('click', function () {
    if (!btnPressed) {
        selectedItem++;
        var result = value + counter;
        count.classList.remove('hide');
      
        console.log("click");
        value++;
        count.innerHTML = result;
       
        const text = document.createTextNode("Regular spatlo");
        const para = document.createElement('p');
        const para2 = document.createElement('p');
        const sp = document.createElement('span');
        const inp= document.createElement('input');
        const btn1= document.createElement('input');
        const btn2= document.createElement('input');
        console.log(shown);
        sp.appendChild(btn1);
        sp.appendChild(inp);
        sp.appendChild(btn2);
        btn1.setAttribute('value','-');
        btn1.setAttribute('id','counterbtns');
        btn1.setAttribute('type','button');
        btn1.setAttribute('onclick','dec()');
        inp.setAttribute('type','text');
        inp.style.width='30px';
        inp.style.textAlign='center';
        inp.setAttribute('value',Cc);
        inp.setAttribute('id','numDis');
        btn2.setAttribute('value','+');
        btn2.setAttribute('id','counterbtns');
        btn2.setAttribute('type','button');
        btn2.setAttribute('onclick','inc()');
       
        para.setAttribute('id','Citem');
        const image = document.createElement('img');
        image.src = "spa.jpeg";
        image.style.width = '40px';
        image.style.marginRight = '30px';
        para.appendChild(image);
        para2.appendChild(text);
        para.appendChild(para2);
        para.appendChild(sp);
        addDeleteButton(para);
        cardCont.appendChild(para);
        //cardCont.after(out,para);
        if(shown){
        alertFun();
        }
        combinedTotal+=spatloReg;
    out.textContent='Checkout R'+combinedTotal;
        btnPressed =true;
        
        
       
    } else {
        alert('Product already added');
    }
});

// bull Spatlo add
bullSpatlo.addEventListener('click', function () {
    if (!btn1Pressed) {
        selectedItem++;
        var result = value + counter;
        count.classList.remove('hide');
        console.log("click");
        value++;
        count.innerHTML = result;   
        const text = document.createTextNode("Bull spatlo");
        const para = document.createElement('p');
        const para2 = document.createElement('p');
        const sp = document.createElement('span');
        const inp= document.createElement('input');
        const btn1= document.createElement('input');
        const btn2= document.createElement('input');
        console.log(shown);
        sp.appendChild(btn1);
        sp.appendChild(inp);
        sp.appendChild(btn2);
        btn1.setAttribute('value','-');
        btn1.setAttribute('id','counterbtns');
        btn1.setAttribute('type','button');
        btn1.setAttribute('onclick','dec1()');
        inp.setAttribute('type','text');
        inp.style.width='30px';
        inp.style.textAlign='center';
        inp.setAttribute('value',Cc1);

        inp.setAttribute('id','numDis2');
        btn2.setAttribute('value','+');
        btn2.setAttribute('id','counterbtns');
        btn2.setAttribute('type','button');
        btn2.setAttribute('onclick','inc1()');
       
        para.setAttribute('id','Citem');
        const image = document.createElement('img');
        image.src = "bull.jpeg";
        image.style.width = '40px';
        image.style.marginRight = '30px';
        para.appendChild(image);
        para2.appendChild(text);
        para.appendChild(para2);
        para.appendChild(sp);
        addDeleteButton2(para);
        cardCont.appendChild(para);
       // cardCont.after(out,para);
       if(shown){
        alertFun();
        }
        combinedTotal+=spatloBul;
        out.textContent='Checkout R'+combinedTotal;

        btn1Pressed = true;
       
    } else {
        alert('Product already added');
    }

});

//burger Spatlo add
burgerSpatlo.addEventListener('click', function () {
    if (!btn2Pressed) {
        selectedItem++;
        var result = value + counter;
        count.classList.remove('hide');
        console.log("click");
        value++;
        count.innerHTML = result;
        const text = document.createTextNode("Burger spatlo");
        const para = document.createElement('p');
        const para2 = document.createElement('p');
        const sp = document.createElement('span');
        const inp= document.createElement('input');
        const btn1= document.createElement('input');
        const btn2= document.createElement('input');
        console.log(shown);
        sp.appendChild(btn1);
        sp.appendChild(inp);
        sp.appendChild(btn2);
        btn1.setAttribute('value','-');
        btn1.setAttribute('id','counterbtns');
        btn1.setAttribute('type','button');
        btn1.setAttribute('onclick','dec2()');
        inp.setAttribute('type','text');
        inp.style.width='30px';
        inp.style.textAlign='center';
        inp.setAttribute('value',Cc2);
        inp.setAttribute('id','numDis3');
        btn2.setAttribute('value','+');
        btn2.setAttribute('id','counterbtns');
        btn2.setAttribute('type','button');
        btn2.setAttribute('onclick','inc2()');
       
        para.setAttribute('id','Citem');
        const image = document.createElement('img');
        image.src = "burger.jpeg";
        image.style.width = '40px';
        image.style.marginRight = '30px';
        para.appendChild(image);
        para2.appendChild(text);
        para.appendChild(para2);
        para.appendChild(sp);
        addDeleteButton3(para);
        cardCont.appendChild(para);
       // cardCont.after(out,para);
       if(shown){
        alertFun();
        }
        combinedTotal+=spatloBur;
        out.textContent='Checkout R'+combinedTotal;
        btn2Pressed = true;
       
    } else {
        alert('Product already added');
    }

});

//increase order for RegSpatlo

function inc() {
    Cc++;
    updateNumDis1();
    console.log("click");
    
}
function updateNumDis1() {
    let numberDisplay1 = document.getElementById('numDis');
  
    if (numberDisplay1) {
        numberDisplay1.value = Cc;
        var finalprice = Cc*spatloReg;
            total1 =finalprice;
    updateTotal();
   
    } else {
        console.error("Element with id 'numDis' not found.");
    }
}


//increase order for bullSpatlo
function inc1() {
    Cc1++;
    updateNumDis2();
    console.log("click");
}

function updateNumDis2() {
    let numberDisplay2 = document.getElementById('numDis2');
    if (numberDisplay2) {
        numberDisplay2.value = Cc1;
        var finalprice = Cc1*spatloBul;
            total2 =finalprice;
        updateTotal();
       
    } else {
        console.error("Element with id 'numDis' not found.");
    }
}

//increase order for BurgerSpatlo
function inc2() {
    Cc2++;
    updateNumDis3();
    console.log("click");
}

function updateNumDis3() {
    let numberDisplay3 = document.getElementById('numDis3');
    if (numberDisplay3) {
        numberDisplay3.value = Cc2;
        var finalprice = Cc2*spatloBul;
            total3 =finalprice;
        updateTotal();
       
    } else {
        console.error("Element with id 'numDis' not found.");
    }
}

//decrease order for RegSpatlo
function dec() {
    Cc--;
    if (Cc < 1) {
        Cc = 1;
    }
    updateNumDisDel();
    console.log("click");
}

function updateNumDisDel(){
    var numberDisplay = document.getElementById('numDis');
    if (numberDisplay) {
        numberDisplay.value = Cc;
    total1-=spatloReg;
    if(Cc==1){
        total1=17;
    }
    out.textContent='Checkout R'+combinedTotal;
    updateTotal();
  
   
    } 
    else {
        console.error("Element with id 'numDis' not found.");
    }
}
//decrease order for BulSpatlo
function dec1() {
    Cc1--;
    if (Cc1 < 1) {
        Cc1 = 1;
    }
    updateNumDisDel1();
    console.log("click");
}

function updateNumDisDel1(){
    var numberDisplay = document.getElementById('numDis2');
    if (numberDisplay) {
        numberDisplay.value = Cc1;
    total2-=spatloBul;
    if(Cc1==1){
        total2=22;
    }
    out.textContent='Checkout R'+combinedTotal;
    updateTotal();
  
   
    } 
    else {
        console.error("Element with id 'numDis' not found.");
    }
}
//decrease order for BurSpatlo
function dec2() {
    Cc2--;
    if (Cc2 < 1) {
        Cc2 = 1;
    }
    updateNumDisDel2();
    console.log("click");
}

function updateNumDisDel2() {
    var numberDisplay = document.getElementById('numDis3');
   
    if (numberDisplay) {
        numberDisplay.value = Cc2;
        var finalprice = Cc2*spatloBur;
            total3 =finalprice;
            if(Cc2==1){
                total3=21;
            }
            console.log('total price  '+total3);
        out.textContent='Checkout R'+combinedTotal;
          
    updateTotal();
  
   
    } else {
        console.error("Element with id 'numDis' not found.");
    }
}




/////




// update text filed number

 
// update text filed number

// update text filed number





// add a delete button
function addDeleteButton(para) {
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-primary');
    deleteBtn.style.display='block';
    deleteBtn.style.width='100%';
    deleteBtn.innerHTML = 'Delete';
    btnPressed = true;
    deleteBtn.addEventListener('click', function () {
        total1=0;
        Cc=1;
        console.log('total for reg spatlo '+total1);
        updateTotal();
        cardCont.removeChild(para);
        btnPressed=false;
        value--;
        selectedItem--;
        if(combinedTotal==0){
            out.classList.add('hide');
        }
        
       
    });
    para.appendChild(deleteBtn);
}
function addDeleteButton2(para) {
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-primary');
    deleteBtn.style.display='block';
    deleteBtn.style.width='100%';
    deleteBtn.innerHTML = 'Delete';
    btn1Pressed = true;
    deleteBtn.addEventListener('click', function () {
        total2=0;
        Cc1=1;
        cardCont.removeChild(para);
        btn1Pressed=false;
        value--;
        selectedItem--;
        combinedTotal-=total2;
        if(combinedTotal==0){
            out.classList.add('hide');
        }
        updateTotal();
       
    });
    para.appendChild(deleteBtn);
}
function addDeleteButton3(para) {
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-primary');
    deleteBtn.style.display='block';
    deleteBtn.style.width='100%';
    deleteBtn.innerHTML = 'Delete';
    btn2Pressed = true;
    deleteBtn.addEventListener('click', function () {
        cardCont.removeChild(para);
        btn2Pressed=false;
        value--;
        selectedItem--;
        total3=0;
        Cc3=1;
        if(combinedTotal==0){
            out.classList.add('hide');
        }
        updateTotal();
       
    });
    para.appendChild(deleteBtn);
}
function updateTotal(){
combinedTotal = total1+total2+total3;
console.log(combinedTotal);
out.textContent='checkout'+ ' R '+combinedTotal;
}
