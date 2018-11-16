var words = ["Taken", "The", "Grey", "Commuter", "2", "3", "Rob", "Roy", "Gangs", "Of", "New", "York", "Cold",
    "Pursuit", "Run", "All", "Night", "Non-Stop", "Unknown"];

function generate() {
    var title = [];
    var length = randomIntFromInterval(1, 4);

    while (title.length < length) {
        var rnd = randomIntFromInterval(0, words.length - 1);
        var word = words[rnd];

        if (title.length == 0) {
            title.push(words[rnd]);
        }
        else if (!title.includes(word)) {
            title.push(words[rnd]);
        }
    }

    var titleString = "";
    for (let i = 0; i < title.length; i++) {
        titleString += " " + title[i];
    }

    return titleString;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
