// var pageNumber = 0;
window.onload = function() {
  var blueImage = document.getElementById("blueimage");
  var c;
  var option1 = "Frequency: 132.4 \n Unknown sender.\n Accept message?";
  var option2 = "Pending connection... \nPending connection...\n Connection established. \n \n \n ??????? \n  Naked Bear... Hey.";
  var option3 = "Really? Come on, who do you think could get this frequency? \n \n> Analyzing sender data... scan 10% complete. \n > Analyzing sender data... scan 18% complete.";
  var option4 = "You’re no fun. \n \n > Analyzing sender data… scan 32% complete. \n \n The thing is, Naked Bear, you’ve got quite the reputation. I mean, hard not to have heard of the million dollar merc with the billion dollar bounty. The UNIT_0 defect who’s betrayed the Americans, the Russians, the Chinese - really any and every organisation so many times that hiring him essentially guarantees a begrudgingly explosive, spectacular  internal sabotage. \n \n > Analyzing sender data…scan 68% complete….";
  var option5 = "The question you should be asking instead is….. what can I do for you? \n ;) \n\n > Analyzing sender data... scan 81% complete…. \n\n  NAKED BEAR: \n Why are you contacting me?\n\n > Analyzing sender data...scan 91% complete….\n > Potential match found. Running secondary scans. \n\n ???????: \n  I’ve heard so much about you, Naked Bear.  Guess the curiosity got me too hot under the collar.  I just had to talk to the man in question.";
  var option6 = "Heh.\n \n > Frequency 132.4 identification complete \n\n > Identity:  BIG DADDY. \n\n > Allegiance: United States of America. \n\n > (Reports directly to head of Department of Defense, Maximus Padernus). \n\n > Affiliation: Head of UNIT_0 Spec Ops. \n\n > Status: Active.";
  var option7 = "Heh. You should ask me nicely. \n\n NAKED BEAR: \n .... \n\n BIG DADDY \n Come on, for old time’s sake.  I wanna hear “please Big Daddy”? \n\n NAKED BEAR \n Old time’s sake? \n\n BIG DADDY \n The last time we... met. ";
  var option8 = "Think? I know you’re into this stuff. I can feel it. Especially when we met that time… you remember? \n\n NAKED BEAR \n Yeah. I remember. \n\n BIG DADDY \nWhen we fought on the battleship… The thrill of that fight hasn’t left me. That clash of metal, flesh, and bone.  Reveling in the adrenaline rush. Barely made my way out of that in one piece. Not gonna lie Bear, that was fucking hot. Was it good for you too? [abridged ver dialogue skip! they flirt a lot more, trade nudes] \n If we met again, I don’t know if I’d want to fight you... or fuck you.";
  var option9 = "[abridged ver 2 dialogue skip, they finished sexting and Naked Bear asks Big Daddy why he's been contacted] \n Listen Bear. Can’t you feel it? You and I, we’re the same. There’s something between us, something that we’ve created, and it makes me feel alive. \n\n NAKED BEAR \n Been a while since I felt something like that. If the pain is real, then I’m real. \n\n BIG DADDY\n The pain means that something matters. It cuts through the haze, the deep-rooted, bone-settled numb fatigue. It scratches something you can’t reach from the outside. I deserve the pain, you know. We both do. I usually don’t have someone as fucking pretty as you to deliver it, though.";
  var option10 = "Wondered if you knew. I was, a couple years after you defected. \n\n NAKED BEAR \n Then you know. \n\n BIG DADDY \n Yeah. I don’t remember ever meeting you. I don’t remember anything from the Genome Therapy trials. \n\n NAKED BEAR \n They mess with your head. \n\n BIG DADDY \n Yeah. They doubled down on us after you left,  you know, after the whole clone army incident. They decided they couldn’t afford another rebellion. So they did even more experiments. I don’t remember you, but I don’t remember much from those years at all. Just blank space, and nightmares.";
   var option11 = "How many people have you killed, Naked Bear? Hundreds? Thousands? There’s no future for us either, is there. No past, no future for men like us. \n\n NAKED BEAR \n Listen, I do what I need to do. I survive. I survive. I’m still here. \n\n BIG DADDY  \n We’ve become difficult men to kill, haven’t we. I used to think that I was doing this to protect those who couldn’t protect themselves. Thought I was doing this to serve the country I loved. \n\nNAKED BEAR\n Hm.  \n\n BIG DADDY \n When you start, they congratulate you. Tell you that to create peace, blood is a necessary sacrifice. For the greater good.";
  var option12 = "[skip dialogue re: maximus padernus is a big capitalist arms guy evil bla] The only winners in war are men like him. Sitting on their money in tall glass buildings. We’re not like them, Bear.  But sure, at the beginning, you believe it. Then you wake up with another week of missing memories, the smell of singed flesh in your nostrils, watching the smoke drifting from another Nicaraguan village you set aflame for the greater good. We’re not like them, Bear. I refuse to believe them. \n\n NAKED BEAR \n  Listen, what do you want, Big Daddy? There are easier ways of getting your rocks off then tracking down a merc who choked you out for a few minutes during a mission. \n\n BIG DADDY \n There’s something I need to tell you.";
  var option13 = "I haven’t been honest. \n\n NAKED BEAR \n This whole thing a seduction mission then? Out for my bounty? \n\n BIG DADDY \n No! I apologize… I got carried away. It’s not often I mean a man like you. And believe me, I understand what I’m asking. I’m not asking you to trust me… just hear me out.";
  var option14 = "I’m head of UNIT_0. But my loyalty doesn’t lie with the Americans. My loyalty doesn’t belong to Maximus Padernus. Not anymore. I have a plan, to take down UNIT_0 from the inside. And not just UNIT_0, but to take down the handlers, take down Maxmimus Padernus, everyone related to the Genome Therapy Project and their inhumane experimentations. \n\n NAKED BEAR \nWhy now? \n\n BIG DADDY \n\n If not now… then there won’t be anyone to save from the Genome Therapy Project. Maximum Padernus plans to take the Genome Therapy Project to new heights.  He calls this new advancement NO_FUTURE. ";
   var option15 = "NO_FUTURE isn’t only the advent of human evolution, it’s the advent of warfare. Here I’ll send you the documents. Maximums Padernus has found a way to mass disseminate the Genome Program, and we need to stop him. \n\n NAKED BEAR \n Hrngh. \n\n BIG DADDY \n We’re running out of time. Maximus Padernus wants the satellites out by the end of the month. Bear, if the satellites were implemented, Maximus Padernus would have access to the brains of half of the American population. Millions of people turned into mindless drones.";
  var option16 = "For penance, of course. The damage we’ve caused, we need to pay it back somehow. I’m asking you not only as a man, but also as a fellow soldier. \n\nNAKED BEAR\nFor atonement? Who would be willing to forgive us? I’ve stopped calling myself a soldier long ago. \n\n BIG DADDY \n What are we if not soldiers? We’d be empty, broken shells, with no identities, no pasts, and no futures. Are the livelihoods of millions of Americans a sacrifice you’re willing to make to spare yourself?";
  var option17 = "Now who’s running away. \n\n NAKED BEAR \n I’ve been down this path before. All it leads to is more death, more violence. The world will always have war, but us, can’t we try for peace? The world is a better place without people like us. Haven’t we been through enough for you to justify that to yourself? \n\n BIG DADDY \n What are you saying? \n\nNAKED BEAR \n I’m saying that you’re right. Maybe we’re nothing but empty shells. But what that means is that there’s room -  for everything. I think it’s time for me to open my eyes. Time to look at myself and understand who I am. Time to build an identity. A life. The world will always be at war. It’s up to us to build our own peace.";

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
  dialogOptions.push(new DialogueOptions("Trying to hire me?", "Who are you? ", option5, "??????:", ""));
  dialogOptions.push(new DialogueOptions("......", "Who are you?", option6, "BIG DADDY", ""));
  dialogOptions.push(new DialogueOptions("What do you want?", "Why are you contacting me?", option7, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("What makes you think I'm into that kind of thing?", "Hrngh… ", option8, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("If we met, my hands would be around your neck.", "Then we don't need an 'or' ", option9, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("You were part of the Genome Therapy Project?", "I remember you from UNIT_0", option10, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("Comes back in flashes but you always wake up screaming.", "That's the price we have to pay.", option11, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("Maximus Padernus said  “the only winners in war are the people”", "There are no winners in war. !", option12, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("Don’t fuck with me. What do you want? ", " You’ve been hiding something", option13, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions(" Good, because I don’t  trust you. ", " What do you want?", option14, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("...", "That's true, isn't it. I've heard...rumours.", option15, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("But why are you doing this?", "Why should I help you?", option16, "BIG DADDY:", ""));
  dialogOptions.push(new DialogueOptions("This cycle of pain won’t end unless we leave it, Big Daddy.", "This is what I was made to do. Let’s take down Maximus together", option17, "BIG DADDY:", ""));


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
          if (e.i == e.textBoxText.length && e.textBoxText === option8) {
            console.log("should display blue image");
            document.getElementById("blueimage").style.display = "inline";
          }
          if (e.i == e.textBoxText.length && e.textBoxText === option15) {
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

  document.getElementById("linkOne").addEventListener("click", choseLink);
  document.getElementById("linkTwo").addEventListener("click", choseLink);
  document.getElementById("blueimage").addEventListener("click", mousePressed);
  document.getElementById("redimage").addEventListener("click", mousePressed);
}
