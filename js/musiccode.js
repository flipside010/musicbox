const cNote = document.getElementById('cAudio');
const dNote = document.getElementById('dAudio');
const eNote = document.getElementById('eAudio');
const fNote = document.getElementById('fAudio');
const gNote = document.getElementById('gAudio');
const aNote = document.getElementById('aAudio');
const bNote = document.getElementById('bAudio');

$('#c').mousedown(function(){
    cNote.currentTime = 0;
    cNote.play();
});
$('#d').mousedown(function(){
    dNote.currentTime = 0;
    dNote.play();
});
$('#e').mousedown(function(){
    eNote.currentTime = 0;
    eNote.play();
});
$('#f').mousedown(function(){
    fNote.currentTime = 0;
    fNote.play();
});
$('#g').mousedown(function(){
    gNote.currentTime = 0;
    gNote.play();
});
$('#a').mousedown(function(){
    aNote.currentTime = 0;
    aNote.play();
});
$('#b').mousedown(function(){
    bNote.currentTime = 0;
    bNote.play();
});
