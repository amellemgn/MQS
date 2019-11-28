// var pageNumber = 0;
window.onload = function() {
  var blueImage = document.getElementById("blueimage");
  var c;
  var option1 = "Frequency: 132.4 \n Unknown sender.\n Accept message?";
  var option2 = "Pending connection... \nPending connection...\n Connection established. \n \n \n ??????? \n  Naked Bear... Hey.";
  var option3 = "Really? Come on, who do you think could get this frequency? \n \n> Analyzing sender data... scan 10% complete. \n > Analyzing sender data... scan 18% complete.";
  var option4 = "You’re no fun. \n \n > Analyzing sender data… scan 32% complete. \n \n The thing is, Naked Bear, you’ve got quite the reputation. Million dollar merc with the billion dollar bounty. UNIT_0 defect. Stabbed ‘em all in the back, the Russians, the Americans... too many times not to be working on his own… What can I say Naked Bear… you’re a wanted man.\n \n > Analyzing sender data…scan 68% complete….";
  var option5 = "The question you should be asking instead is….. what can I do for you? \n ;) \n\n > Analyzing sender data... scan 81% complete…. \n\n  NAKED BEAR: \n Why are you contacting me?\n\n > Analyzing sender data...scan 91% complete….\n > Potential match found. Running secondary scans. \n\n ???????: \n  I’ve heard so much about you, Naked Bear. Guess the curiosity got me too hot under the collar. I just had to talk to the man in question.";
  var option6 = "Heh.\n \n > Frequency scan complete. \n\n > Match Found: BIG DADDY";
  var option7 = "That’s right. Come to daddy. See Bear, you’ve got something I want, and I’ve got something you need. \n\n NAKED BEAR: \n Rumours have been swirling about you too, you know. How you also just recently betrayed UNIT_0 and the US armed forces… ";
  // var option8 = "C’mon, ask me nicely. “Please, Big Daddy?";
  // var option9 = "That’s what I thought. Remember the last time we met? \n\n NAKED BEAR \nHow could I not. \n\n BIG DADDY \n\n ";
  // var option10 = "sure know how to...";
  // var option11 = "makes us men....";
  // var option12 = "make me alive...";
  var option13 = "I used to think that I was doing to protect those who couldn’t defend themselves. The weak, the helpless…. Big fucking man pumped full of nanotech… I’d wake up with a week of missing memories and a blood of a thousand villagers on my hands. \n\nNAKED BEAR\nThe first couple of years in UNIT_0, they congratulate you. They promote you, put you on a pedestal. Clap you on the back, the only winners in war are the people. \n\nBIG DADDY \nAnd are they? How many people you killed in this war Bear? How many civilians? Just wanted to help mankind. Turns out the ones getting used was us, hm?testtesttesttest";
  // var option14 = "communism";
  // var option15 = "how can i trust";
  var option16 = "I told you, we're not so different you and I. I need you to help me stop Maximum Padernus. For Maximum Padernus and UNIT_0, N0_FUTURE is the advent of warfare. An ultimate, never-ending civilian war. Here, I'll send you the documents. If NO_FUTURE were to be implanted...";
  var option17 = "Maximum Padernus would have access to the brains of half the global population. Over four billion people turned into mindless drones. It won't be easy to bring him down, but the alternative is unacceptable.";
  var option18 = "";

  let clicks = 0;
  var dialogOptions = [];
  var speed = 160;

  var alert = new Audio("assets/sounds/alert.mp3");

  function playAudio() {
    alert.play();
  }

  dialogOptions.push(new DialogueOptions("Yes", "", option1, "", ""));
  dialogOptions.push(new DialogueOptions("Yes", "", option2, "", ""));
  dialogOptions.push(new DialogueOptions("Who is this? ", "How did you get this frequency?", option3, "???????:", ""));
  dialogOptions.push(new DialogueOptions("Reveal yourself, fool.", "Why are you contacting me?", option4, "???????", ""));
  dialogOptions.push(new DialogueOptions("......", "Who are you? ", option5, "??????:", ""));
  dialogOptions.push(new DialogueOptions("......", "Who are you?", option6, "??????:", ""));
  dialogOptions.push(new DialogueOptions("!!!", "Hrngh… Big Daddy!", option7, "BIG DADDY:", ""));
  // dialogOptions.push(new DialogueOptions("Hard to trust a guy like that.", "So what do you want from me?", option8, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("Hard to trust a guy like that.", "So what do you want from me?", option13, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("Worst thing the Nano Therapy Project did to me was remove my capacity to get drunk.", "Only time I feel alive is when I cheat death on the battlefield. [skip]", option16, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("This would be the end of civilization as we know it.", "This would mean the end, for soldiers like us.", option17, "BIG DADDY:", ""));



  function choseLink() {
    removeObjects();
    addFirstUserObjects();
    addTypedObjects();
    // addTyped2Objects();

    typeWriter(dialogOptions[clicks]);
    clicks++;

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
          if (e.i == e.textBoxText.length && e.textBoxText === option7) {
            console.log("should display blue image");
            document.getElementById("blueimage").style.display = "inline";
          }
          if (e.i == e.textBoxText.length && e.textBoxText === option16) {
            console.log("should display red image");
            document.getElementById("redimage").style.display = "inline";
          }
          if (e.i == e.textBoxText.length && e.textBoxText === option2 || e.textBoxText === option6 ) {
            console.log("should play sound");
            playAudio();
          }
          if (e.i == e.textBoxText.length && e.textBoxText === option6) {
            console.log("change profile pic");
            document.getElementById("profilePicture").src = "assets/images/BigDaddyGif.gif";
            changeUsername();
          }
          if (e.i == e.textBoxText.length && e.textBoxText === option17) {
            console.log("end game");
            window.location.assign("endscreen.html");
          }
          typeWriter(e);
        },
        e.speed);

      if (e.i == e.textBoxText.length) {
        console.log("test");
        addSecondUserObjects();
        addFirstLinkObjects();
        addSecondLinkObjects();
        // typeWriter2(dialogOptions[clicks]);
        // console.log("called typeWriter2");
      }
    }
  }

  // function typeWriter2(a) {
  //   //  console.log(e.i);
  //   if (a.i < a.textBoxText2.length) {
  //     document.getElementById("typed2").innerHTML += a.textBoxText2.charAt(a.i);
  //     //console.log(e.textBoxText.charAt(e.i));
  //     a.i++;
  //     setTimeout(function() {
  //         typeWriter(a);
  //       },
  //       a.speed);
  //     if (a.i == a.textBoxText2.length) {
  //       console.log("time to add link objects");
  //       addFirstLinkObjects();
  //       addSecondLinkObjects();
  //     }
  //   }
  // }

  function changeUsername(){
  var myobj6 = document.getElementById("pictureuser1");
  myobj6.remove();

  var para6 = document.createElement("div");
  para6.textContent = dialogOptions[clicks].username1;
  para6.setAttribute("id", "pictureuser1");
  document.getElementById("profilePicture1").appendChild(para6);
  }

  function removeObjects() {
    var myobj = document.getElementById("userPara1");
    myobj.remove();
    var myobj1 = document.getElementById("userPara2");
    myobj1.remove();
    var myobj2 = document.getElementById("typed");
    myobj2.remove();

    // var myobj5 = document.getElementById("typed2");
    // myobj5.remove();
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

  // function addTyped2Objects() {
  //   console.log("called addyped 2objects");
  //   var para5 = document.createElement("div");
  //   //  para2.textContent = dialogOptions[clicks].textBoxText;;
  //   para5.setAttribute("id", "typed2");
  //   document.getElementById("textingBox").appendChild(para5);
  // }

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
    if (document.getElementById("redimage").style.display = "inline") {
      document.getElementById("redimage").style.display = "none";
    }
  }
// INVENTORY BAKE IMAGES

  document.getElementById("linkOne").addEventListener("click", choseLink);
  document.getElementById("linkTwo").addEventListener("click", choseLink);
  document.getElementById("blueimage").addEventListener("click", mousePressed);
  document.getElementById("redimage").addEventListener("click", mousePressed);
}
