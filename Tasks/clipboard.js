$bp().next();

$bp().playByIndex(index);

$bp().currentIndex

$bp().playlistLength

$bp().duration()

$bp().currentTime(int)

$bp().on('timeupdate', function () {
    
    console.log("Time update: " + data);
});




console.log("mark | floor: " + Math.floor($bp().currentTime()) + " / Float: " + $bp().currentTime());
console.log("mark | ceil: " + Math.ceil($bp().currentTime()) + " / Float: " + $bp().currentTime());
console.log("mark | round: " + Math.round($bp().currentTime()) + " / Float: " + $bp().currentTime());
console.log("mark | trunc: " + Math.trunc($bp().currentTime()) + " / Float: " + $bp().currentTime());



Brid.players.Brid_70406149.config.Plugin