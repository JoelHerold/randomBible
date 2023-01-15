
listBocks = ["1Mose","2Mose","3Mose","4Mose","5Mose","Josua","Richter","Ruth","1Samuel","2Samuel","1Könige","2Könige","1Chronik","2Chronik","Esra","" +
"Nehemia","Esther","Hiob","Psalme","Sprüche","Prediger","HohesLied","Jesaja","Jeremia","Klagelieder","Hesekiel","Daniel","Hosea",
"Joel","Amos","Obadja","Jona","Micha","Nahum","Habakuk","Zevanja","Haggai","Sacharja","Maleachi","Matthäus","Markus","Lukas","Johannes","Apostelgeschichte","" +
    "Römer","1Korinther","2Korinther","Galater","Epheser","Philipper","Kolosser","1Tessalonicher","2Tessalochnicher","1Timotheus","2Timotheus","Titus",
"Philemon","Hebräer","Jakobus","1Petrus","2Petrus","1Johannes","2Johannes","3Johannes","Judas","Offenbarung"];

shuffle(listBocks)

console.log(listBocks)



/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


listBocks.s

document.getElementById("out").innerText=listBocks[0]