// Selector
const image = document.getElementById('bmi-image'); // Image preview
const bmi = document.querySelector('.bmi-form'); // data from BMI
const result = document.querySelector('.bmi-result'); // Result BMI

bmi.addEventListener('submit', (event) => {
    // prevent page refresh
    event.preventDefault();

    // get value
    let weight = parseFloat(document.getElementById("weightInput").value);
    let height = parseFloat(document.getElementById("heightInput").value);
  
    // Calculate BMI and make it 2 decimals
    let BMI= (+weight/( (+height/100) **2 )).toFixed(2);
    let state ='';
    // console.log(height)
    // console.log(weight)
    // console.log(BMI);

    if(BMI<18.50){
        state = `Your BMI = ${BMI}: Under Weight!`;
        result.innerHTML = `${state}`;
        image.src = "./img/hero-img-pomSmall.png";
    }
    else if(BMI>=18.50 && BMI<25){
        state = `Your BMI = ${BMI}: Normal Weight`;
        result.innerHTML = `${state}`;
    }
    else if(BMI=>25 && BMI<30){
        state = `Your BMI = ${BMI}: Over Weight`;
        result.innerHTML = `${state}`;
        image.src = "./img/hero-img-overSmall.png";
    }
    else if(BMI=>30 && BMI<40){
        state = `Your BMI = ${BMI}: Obesity`;
    }
    else if (BMI>=40){
        state = `Your BMI = ${BMI}: Morbid Obesity`;
    }

    bmi.reset();
    return parseFloat(BMI).toFixed(2) + ' ' +state;
})

// function BMIcal(){
    
//     let weight = parseFloat(document.getElementById("weight").value);
//     let height = parseFloat(document.getElementById("height").value);
  
//     let BMI= (weight/((height/100)**2)).toFixed(2);
//     let state ='';

//     if(BMI<18.50){
//         state = 'Under Weight';
//         image.src = './img/hero-img-pom';
//     }
//     else if(BMI>=18.50 && BMI<25){
//         state = 'Normal Weight';
//     }
//     else if(BMI=>25 && BMI<30){
//         state = 'Over Weight';
//     }
//     else if(BMI=>30 && BMI<40){
//         state = 'Obesity';
//     }
//     else if (BMI>=40){
//         state = 'Morbid Obesity';
//     }

//     return parseFloat(BMI).toFixed(2) + ' ' +state;
// }