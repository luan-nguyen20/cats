//func to play sound 
//and add effects when key is pressed
function playSound(e){
    //use template literals (``) to have embedded expression
    //(e.keyCode in this case).
    //Get the keyCode of the keydown event (which key was pressed),
    //then use that key code as value for data-key,
    //then use audio[data-key value] to get the associated audio file
    //and store it in 'audio'.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //same as above but get the associated
    //div instead (for transition effects)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //if the pressed key has no associated audio,
    //stop the func.
    if(!audio) return;

    //add the class 'playing' to change the css style
    //for a transition effect.
    key.classList.add('playing');

    //reset time for audio files in case key
    //is pressed repeatedly.
    audio.currentTime = 0;
    //play audio.
    audio.play();
}

//listen to the keydown event, 
//then call playSound func.
window.addEventListener('keydown', playSound);

//get all elements with class 'key',
//convert to an array and stored in 'keys'
const keys = Array.from(document.querySelectorAll('.key'));

//func to remove the transition effect by
//removing the class 'playing'
function removeTransition(e){
    //e has multiple transitionend event
    //(for borders, boxes shadow, transform...),
    //we just need the longest one (we picked transform).
    //so we'll skip it if its property name 
    //is not 'transform'
    if(e.propertyName !== 'transform') return;
    
    //console.log(this);
    //'this' is whatever got called against it.
    //in this case addEventListener got called,
    //and 'key' got called against it, so
    //this = key.
    //Remove the class 'playing' to 
    //reverse the transition effects.
    this.classList.remove('playing');
}

//for each key, add event listener to listen
//for 'transitionend' event, then call the
//'removeTransition' func.
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

function playSoundOnClick(e){
    //console.log(e.target.id);
    let audio, key;
   
    if(e.target.id === 'Ayu'){
        audio = document.querySelector(`audio[data-key="65"]`);
        key = document.querySelector(`div[data-key="65"]`);
    }
    else if(e.target.id === 'Sayoko'){
        audio = document.querySelector(`audio[data-key="83"]`);
        key = document.querySelector(`div[data-key="83"]`);
    }
    else if(e.target.id === 'Daisuke'){
        audio = document.querySelector(`audio[data-key="68"]`);
        key = document.querySelector(`div[data-key="68"]`);
    }
    else{
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

//onclick event handlers for cat pics
const catPics = Array.from(document.querySelectorAll('.catImg'));
catPics.forEach(catImg => catImg.addEventListener('click',playSoundOnClick));
