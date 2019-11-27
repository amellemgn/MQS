// var pageNumber = 0;
window.onload = function() {
  var blueImage = document.getElementById("blueimage");
  var c;
  var firstLinkOption = "this is firstLink this is firstLink ";
  var secondLinkOption = "this is secondLink this is secondLink ";
  var thirdLinkOption = "this is thirdLink this is thirdLink";
  var fourthLinkOption = "this is fourthLink this is fourthLink";
  var fifthLinkOption = "this is fifthLink this is fifthLink";
  var sixthLinkOption = "this is sixthLink this is sixthLink";
  let clicks = 0;
  var dialogOptions = [];
  var speed = 40;

  var alert = new Audio("assets/sounds/alert.mp3");

  function playAudio() {
    alert.play();
  }

  dialogOptions.push(new DialogueOptions("test", "Second", "Third", firstLinkOption, "???????", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("test2", "Second2", "Third2", secondLinkOption, "?????????", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("test3", "Second3", "Third3", thirdLinkOption, "??????", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("test4", "Second4", "Third4", fourthLinkOption, "NAKED BEAR", "BIG DADDY"));
  dialogOptions.push(new DialogueOptions("test5", "Second5", "Third5", fifthLinkOption, "BIG DADDY", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("test6", "Second6", "Third6", sixthLinkOption, "BIG DADDY", "NAKED BEAR"));


  function choseLink() {
    removeObjects();
    addObjects();
    typeWriter(dialogOptions[clicks]);
    //let typed = new Typed('#typed', dialogOptions[clicks].options);

    /*document.getElementById("userPara1").textContent = dialogOptions[clicks].username1;
    document.getElementById("userPara2").textContent = dialogOptions[clicks].username2;
    document.getElementById("changeText").textContent = dialogOptions[clicks].textBoxText;
    document.getElementById("updateFirstLink").textContent = dialogOptions[clicks].firstLinkOption;
    document.getElementById("updateSecondLink").textContent = dialogOptions[clicks].secondLinkOption;*/
    clicks++;

    //console.log("clicks");
  }

  function typeWriter(e) {
    //  console.log(e.i);
    if (e.i < e.textBoxText.length) {
      document.getElementById("typed").innerHTML += e.textBoxText.charAt(e.i);
      //console.log(e.textBoxText.charAt(e.i));
      e.i++;
      setTimeout(function() {
          // && e.textBoxText=== dialogOptions[clicks].thirdLinkOption
          //  console.log(e.textBoxText);
          //console.log(e);
          if (e.i == e.textBoxText.length && e.textBoxText === thirdLinkOption) {
            console.log("should display blue image");
            document.getElementById("blueimage").style.display = "inline";
          }
          if (e.i == e.textBoxText.length && e.textBoxText === secondLinkOption) {
            console.log("should play sound");
            playAudio();
          }
          if (e.i == e.textBoxText.length && e.textBoxText === secondLinkOption) {
            console.log("change profile pic");
            document.getElementById("profilePicture").src="assets/images/BigDaddyGif.gif";
          }
          if (e.i == e.textBoxText.length && e.textBoxText === sixthLinkOption) {
            console.log("end game");
            window.location.assign("endscreen.html");
          }
          typeWriter(e);
        },
        e.speed);

      if (e.i == e.textBoxText.length) {
        console.log("test");
        addLinkObjects();
      }
    }
  }

  function removeObjects() {
    var myobj = document.getElementById("userPara1");
    myobj.remove();
    var myobj1 = document.getElementById("userPara2");
    myobj1.remove();
    var myobj2 = document.getElementById("typed");
    myobj2.remove();
    var myobj3 = document.getElementById("linkOne");
    myobj3.remove();
    var myobj4 = document.getElementById("linkTwo");
    myobj4.remove();
  }

  function addObjects() {
    var para = document.createElement("div"); // Create a <div> element
    para.textContent = dialogOptions[clicks].username1;
    para.setAttribute("id", "userPara1"); // Insert text
    document.getElementById("textingBox").appendChild(para); // Append <div> to <div> with id="myDIV"

    var para1 = document.createElement("div");
    para1.textContent = dialogOptions[clicks].username2;
    para1.setAttribute("id", "userPara2");
    document.getElementById("textingBox").appendChild(para1);

    var para2 = document.createElement("div");
    para2.textContent = dialogOptions[clicks].textBoxText;;
    para2.setAttribute("id", "typed");
    document.getElementById("textingBox").appendChild(para2);
  }

  function addLinkObjects() {
    var para3 = document.createElement("div");
    para3.textContent = dialogOptions[clicks].firstLinkOption;
    para3.setAttribute("id", "linkOne");
    document.getElementById("links").appendChild(para3);

    var para4 = document.createElement("div");
    para4.textContent = dialogOptions[clicks].secondLinkOption;
    para4.setAttribute("id", "linkTwo");
    document.getElementById("links").appendChild(para4);

    document.getElementById("linkOne").addEventListener("click", choseLink);
    document.getElementById("linkTwo").addEventListener("click", choseLink);
  }

  function mousePressed() {
    if (document.getElementById("blueimage").style.display = "inline") {
      document.getElementById("blueimage").style.display = "none";
    }
  }

  document.getElementById("linkOne").addEventListener("click", choseLink);
  document.getElementById("linkTwo").addEventListener("click", choseLink);
  document.getElementById("blueimage").addEventListener("click", mousePressed);
}
