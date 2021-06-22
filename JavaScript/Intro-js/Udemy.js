function calBMI (weight, height) {
    var getHeight = height*height;
    var results = Math.floor(weight / getHeight);
    return results;
}

var n = Math.random();

