window.onload = function(){
    var element = document.getElementById('alcoveLogo');
    element.style.opacity = 0.2;
}


window.onload = function(){
    var elements = document.getElementsByClassName('servicesBtn');

    for(var i = 0; i < elements.length; i ++) {
        if(i % 2 == 0){
            elements[i].style.color = 'rgb(0, 106, 255)';
        }
    }
}


window.onload = function(){
    var elements = document.getElementsByTagName('h2');
    for(var i = 0; i < elements.length; i ++){
        elements[i].style.borderColor = 'rgb(255,0,0)';
        elements[i].style.borderWidth = '2px';
        elements[i].style.borderStyle = 'solid';
        elements[i].style.backgroundColor = 'rgb(255,0,0,0.2)';
    }
}


$(function() {
    // All jQuery code goes here
    var element = document.querySelector(".navigation > li:nth-child(3) > a");
    element[i].style.color = 'rgb(255,0,0)';
})

$(function() {
    // All jQuery code goes here
    var elements = document.querySelectorAll(".navigation > li:nth-child(even) > a");
    for(var i = 0; i < elements.length; i ++)
        elements[i].style.color = 'rgb(255, 0, 0)';
})

$(function() {
    // All jQuery code goes here
    $('#alcoveLogo').css('opacity', 0.4);
    $('.servicesBtn').css('color', '#fff');
})