function Rating(starRating) {

    

    var i;
    for (i = 1; i <= starRating; i+=1) {
        var element = document.getElementById("rating" + i);
        element.classList.add("checked");  
    }
}
