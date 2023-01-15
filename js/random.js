
listBocks = [["1Mose",50],["2Mose",40],["3Mose",27],["4Mose",36],
    ["5Mose",34],["Josua",24],["Richter",21],["Ruth",4],
    ["1Samuel",31],["2Samuel",24],["1Könige",22],["2Könige",25],
    ["1Chronik",29],["2Chronik",36],["Esra",10],
    ["Nehemia",13],["Esther",9],["Hiob",42],["Psalme",150],["Sprüche",31],["Prediger",12],["HohesLied",8],
    ["Jesaja",66],["Jeremia",52],["Klagelieder",5],["Hesekiel",48],["Daniel",12],["Hosea",14],
    ["Joel",4],["Amos",9],["Obadja,",1],["Jona",4],["Micha",7],["Nahum",3],["Habakuk",3],["Zevanja",3],
    ["Haggai",2],["Sacharja",14],["Maleachi",3],["Matthäus",28],["Markus",16],["Lukas",24],["Johannes",21],
    ["Apostelgeschichte",28],["Römer",16],["1Korinther",16],["2Korinther",13],["Galater",6],["Epheser",6],
    ["Philipper",4],["Kolosser",4],["1Tessalonicher",5],["2Tessalochnicher",3],["1Timotheus",6],["2Timotheus",4],
    ["Titus",3],["Philemon",1],["Hebräer",13],["Jakobus",5],["1Petrus",5],["2Petrus",3],["1Johannes",5],
    ["2Johannes",1],["3Johannes",1],["Judas",1],["Offenbarung",22]];

shuffle(listBocks)

console.log(listBocks)

listBocksT=[["1Mose",10],["2Mose",20]]

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

shuffle(listBocksT)

var temp =getRandomInt(1,listBocksT[0][1])

console.log(temp)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("outtest").innerText=listBocks[0]+"/"+temp


//document.getElementById("out").innerText=listBocks[0]+"/"