import noUiSlider from 'nouislider';


let slider = document.getElementById('slider');
let age = document.getElementById('age');
let ageInput = document.getElementById('ageInput');
let res = document.getElementById('res'); 
let dataSpan =document.getElementById('dataSpan');




noUiSlider.create(slider, {
    start: 10000,
    connect: 'lower',
    range: {
        'min': 1000,
        'max': 100000
    }
});

let numberInput = document.querySelector('.numberInput');
let money=numberInput.value;
let ageV=ageInput.value;

let res2;
let percent;


slider.noUiSlider.on('update', function(value, handl){
    money=Math.round(value);
    
    percent=Math.round(value*0.8/12);
    res2=Math.ceil( (percent*ageV) + Number(value) );

    res.innerHTML=res2;
})


noUiSlider.create(age, {
    start: 5,
    connect: 'lower',
    range: {
        'min': 1,
        'max': 365
    }
});
age.noUiSlider.on('update', function(value, handl){
    ageInput.value=Math.round(value);
    ageV=ageInput.value;
    let ms = new Date().getTime() + (86400000*ageV);
    let tomorrow = new Date(ms);
    let getDate=tomorrow.getDate();
    let getMonth=tomorrow.getMonth()+1;
    let getFullYear=tomorrow.getFullYear();
    dataSpan.innerHTML=getDate + '.' + getMonth + '.' + getFullYear;
    res.innerHTML=money*ageV;
    console.log(res2*ageV+money)
})
