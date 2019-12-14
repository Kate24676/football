function Rating(starRating) {

    for (var i = 1; i < 11; i++){
        console.log("rating" + i)
        var element = document.getElementById("rating" + i);
        if (element.classList.contains("checked")){
            element.classList.remove("checked");
        }
    }

    var i;
    for (i = 1; i <= starRating; i+=1) {
        var element = document.getElementById("rating" + i);
        element.classList.add("checked");  
    }
}
