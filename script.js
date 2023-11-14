
// Define the window function onloading 

window.onload = function() {

    // Define the variables 

    let minute = 0;
    let second = 0;
    let tenSecond = '00';

    // Using the queryselector also you use the getElementbyId 

    let startingEndMinute = document.querySelector('#minute');
    let startingEndSecond= document.querySelector('#second');
    
    // Button Define

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    
    // Interval Define for start timer

    let interval;
    const startTimer = () =>{
        tenSecond++;
        if(tenSecond <= 9){
            tenSecond =  '0'  + tenSecond;
        }
        if(tenSecond > 9){
           tenSecond = tenSecond;
        }
        if(tenSecond > 99){
            second++;
            startingEndSecond.innerHTML = '0' + second;
            tenSecond = 0;          
        }
        if(second > 9){
            startingEndSecond.innerHTML = second;
        }
        if(second > 59){
            minute++;
            startingEndMinute.innerHTML = '0' + minute;
            second = '00';
            startingEndSecond.innerHTML = '00';
        }

    };

    startBtn.onclick = () =>{
        clearInterval(interval);
        interval = setInterval(startTimer , 10);
    };

    stopBtn.onclick = () =>{
        clearInterval(interval);     
    }

    resetBtn.onclick = () =>{
        clearInterval(interval);
        tenSecond = '00';
        second = '00';
        minute = '00';
        tenSecond = tenSecond;
        startingEndSecond.innerHTML = second;
        startingEndMinute.innerHTML = minute;
    }
};