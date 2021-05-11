function setText(e,text) {document.getElementById(e).innerHTML = text;}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomChoice(l) {
  return l[Math.floor(Math.random() * l.length)];
}

function generateNumber() {
  return randomRange(1000000,99999999)*randomChoice([1,-1]);
}

function generateUUID() {
  return "[I;"+generateNumber()+","+generateNumber()+","+generateNumber()+","+generateNumber()+"]"
}

function updateHead() {
  var e = document.getElementById("heads");
  var hf = e.value;
  HeadURL = "https://education.minecraft.net/wp-content/uploads/"+hf;
  HeadTexture = '{"textures":{"SKIN":{"url":"'+HeadURL+'"}}}';
  HeadB64 = btoa(HeadTexture);
  HeadCommand = '/give @p player_head{SkullOwner:{Id:'+generateUUID()+',Name:"'+hf+'",Properties:{textures:[{Value:"'+HeadB64+'"}]}}}'
  setText("GeneratedText",HeadCommand);
  document.getElementById("SkinRendererStyle").innerHTML = "#skin-viewer *{ background-image: url('"+HeadURL+"'); }";


}

function init() {
  var x = document.getElementById("heads");
  for (var key in heads) {
    var option = document.createElement("option");
    option.value = key;
    option.text = heads[key];
    x.add(option);
  };
  updateHead();
}
