function randomselect(array) {
    return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
    // Select theme
    console.log(parts.Themes[0]);
    var theme = document.getElementById("theme");
    theme.innerHTML = randomselect(parts.Themes);

    // Select wildcard
    // Loop through 3 numbers
    for (var i = 0; i < 3; i++) {
        var wildcard = randomselect(parts.WildCards);
        var wildcardname = document.getElementById("wildcard" + i + "_name");
        var wildcarddescription = document.getElementById("wildcard" + i + "_description");

        wildcardname.innerHTML = wildcard.name;
        wildcarddescription.innerHTML = wildcard.description;
    }
}
