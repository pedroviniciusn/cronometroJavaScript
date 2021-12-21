window.onload = function () {
    
    let seconds = 00;
    let tens = 00;
    let appendTens = document.querySelector('#tens')
    let appendSeconds = document.querySelector('#seconds')
    let buttonStart = document.querySelector('#buttonStart')
    let buttonStop = document.querySelector('#buttonStop')
    let buttonReset = document.querySelector('#buttonReset')
    let Interval

    buttonStart.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }

    buttonStop.onclick = function() {
        clearInterval(Interval)
    }

    buttonReset.onclick = function() {
        clearInterval(Interval)
        tens = '00'
        seconds = '00'
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }

    function startTimer() {
        tens++

        if (tens <= 9){
            appendTens.innerHTML = '0' + tens
        }

        if (tens > 9){
            appendTens.innerHTML = tens
        }

        if (tens > 99) {
            console.log('seconds')
            seconds++
            appendSeconds.innerHTML = '0' + seconds
            tens = 0 
            appendTens.innerHTML = '0' + 0
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
    }
}