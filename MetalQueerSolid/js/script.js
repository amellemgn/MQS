// var pageNumber = 0;
window.onload = function() {
  var blueImage = document.getElementById("blueimage");
  var c;
  var firstLinkOption = "Pending connection...Pending connection...Connection established.";
  var firstLinkOptionTwo = "Hey, Naked Bear. ";
  var firstLinkArray = [firstLinkOption, firstLinkOptionTwo];
  var secondLinkOption = "Come on, who do you think could get this frequency? I know all about you.";
  var secondLinkOptionTwo = "> e#$Analyzing sender data@#E… FQN scan 10% complete.$%#$# > r##Analyzing sender datar3#@…. FQN scan 18% complete.o§";
  var secondLinkOptionThree = "Reveal yourself! > Analyzing sender data….FQN scan 32% complete.";
  var secondLinkOptionFour = "Ah, you know. That’s no fun. The thing is, I know all about you Naked Bear. You’ve got quite the reputation. Where to start….Naked Bear, killing machine extraordinaire. Million dollar merc. Give him a week and he'll set the whole country on fire. SHARKTOOTH defect. Not a Russian, not an American. Works for no man but himself. Heh. You're a wanted man, Naked Bear.> Analyzing sender data… FQN scan 68% complete….";
  var thirdLinkOption = "this is thirdLink this is thirdLink";
  var thirdLinkOption2 = "this is thirdLink this is thirdLinkferreofnreeorgnel";
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

  dialogOptions.push(new DialogueOptions("Who is this?", "How Did u get this frequency?", firstLinkOption, firstLinkOptionTwo, "BIG DADDY", "???????"));
  dialogOptions.push(new DialogueOptions("......", "Who are you?", secondLinkOption, secondLinkOptionTwo, "?????????", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("YEs", "No ", thirdLinkOption, thirdLinkOption2, "??????", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("Second4", "Third4", fourthLinkOption, "NAKED BEAR", "BIG DADDY"));
  dialogOptions.push(new DialogueOptions("Second5", "Third5", fifthLinkOption, "BIG DADDY", "NAKED BEAR"));
  dialogOptions.push(new DialogueOptions("Second6", "Third6", sixthLinkOption, "BIG DADDY", "NAKED BEAR"));


  function choseLink() {
    removeObjects();
    addFirstUserObjects();
    addTypedObjects();
    addSecondUserObjects();


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
            document.getElementById("profilePicture").src = "assets/images/BigDaddyGif.gif";
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
        addFirstLinkObjects();
        addSecondLinkObjects();
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


  function addFirstUserObjects() {

    var para = document.createElement("div"); // Create a <div> element
    para.textContent = dialogOptions[clicks].username1;
    para.setAttribute("id", "userPara1"); // Insert text
    document.getElementById("textingBox").appendChild(para); // Append <div> to <div> with id="myDIV"

  }

  function addSecondUserObjects() {
    var para1 = document.createElement("div");
    para1.textContent = dialogOptions[clicks].username2;
    para1.setAttribute("id", "userPara2");
    document.getElementById("textingBox").appendChild(para1);
  }

  function addTypedObjects() {
    var para2 = document.createElement("div");
    //  para2.textContent = dialogOptions[clicks].textBoxText;;
    para2.setAttribute("id", "typed");
    document.getElementById("textingBox").appendChild(para2);
  }

  function addFirstLinkObjects() {
    var para3 = document.createElement("div");
    para3.textContent = dialogOptions[clicks].firstLinkOption;
    para3.setAttribute("id", "linkOne");
    document.getElementById("links").appendChild(para3);

    document.getElementById("linkOne").addEventListener("click", choseLink);

  }

  function addSecondLinkObjects() {
    var para4 = document.createElement("div");
    para4.textContent = dialogOptions[clicks].secondLinkOption;
    para4.setAttribute("id", "linkTwo");
    document.getElementById("links").appendChild(para4);

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
