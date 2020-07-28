function Question1(){
    var question1 = createElement("h2","What is your goal in your life ?");
    question1.position(width/2+180,100);
    var answerBar1 = createInput("enter your answer here");
    answerBar1.position(width/2+225,170);
    var submit1 = createButton("submit answer");
    submit1.position(width/2+250,220);

    submit1.mousePressed(()=>{
        var answer1 = answerBar1.value();
        arr.push(answer1);
        question1.hide();
        answerBar1.hide();
        submit1.hide();
        Question2();      
    })
    
}

function Question2(){
    var question2 = createElement("h2","What is your hobby ?");
    question2.position(width/2+180,100);
    var answerBar2 = createInput("enter your answer here");
    answerBar2.position(width/2+225,170);
    var submit2 = createButton("submit answer");
    submit2.position(width/2+250,220);

    submit2.mousePressed(()=>{
        var answer2 = answerBar2.value();
        arr.push(answer2);
        question2.hide();
        answerBar2.hide();
        submit2.hide();
        Question3();
    });
    
}

function Question3(){
    var question3 = createElement("h2","Which telecom operator do you prefer the most ?");
    question3.position(width/2+95,100);
    var option31 = createButton("Jio");
    option31.position(width/2+200,200);
    var option32 = createButton("Vodafone");
    option32.position(width/2+200,250);
    var option33 = createButton("Airtel");
    option33.position(width/2+200,300);
    var option34 = createButton("BSNL");
    option34.position(width/2+200,350);

    option31.mousePressed(()=>{
        arr.push("Jio");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option32.mousePressed(()=>{
        arr.push("Vodafone");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option33.mousePressed(()=>{
        arr.push("Airtel");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option34.mousePressed(()=>{
        arr.push("BSNL");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

} 

function Question4(){
    var question4 = createElement("h2","Which operation system do you like the most ?");
    question4.position(width/2+105,100);
    var option41 = createButton("Windows 7 Professional");
    option41.position(width/2+200,200);
    var option42 = createButton("Windows XP");
    option42.position(width/2+200,250);
    var option43 = createButton("Windows 10");
    option43.position(width/2+200,300);
    var option44 = createButton("Windows 8");
    option44.position(width/2+200,350);

    option41.mousePressed(()=>{
        arr.push("Windows 7 Professional");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option42.mousePressed(()=>{
        arr.push("Windows XP");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option43.mousePressed(()=>{
        arr.push("Windows 10");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option44.mousePressed(()=>{
        arr.push("Windows 8");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });
}

function Question5(){
    var question5 = createElement("h2","Which smartphone brand do you like the most ?");
    question5.position(width/2+98,100);
    var option51 = createButton("Samsung");
    option51.position(width/2+150,200);
    var option52 = createButton("Oppo");
    option52.position(width/2+150,250);
    var option53 = createButton("Vivo");
    option53.position(width/2+150,300);
    var option54 = createButton("Apple");
    option54.position(width/2+150,350);
    var option55 = createButton("Xiaomi");
    option55.position(width/2+150,400);

    var option56 = createButton("Motorola");
    option56.position(width/2+350,200);
    var option57 = createButton("Lenovo");
    option57.position(width/2+350,250);
    var option58 = createButton("One plus");
    option58.position(width/2+350,300);
    var option59 = createButton("Realme");
    option59.position(width/2+350,350);
    var option510 = createButton("Asus");
    option510.position(width/2+350,400);



    option51.mousePressed(()=>{
        arr.push("Samsung");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option52.mousePressed(()=>{
        arr.push("Oppo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option53.mousePressed(()=>{
        arr.push("Vivo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option54.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option55.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option56.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option57.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option58.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option59.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });

    option510.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        endQuestion();
    });
}

function endQuestion(){
    var feedBackDir = createElement("h1","Please enter your feedback below");
    feedBackDir.position(width/2+100,100);
    var feedBack = createInput();
    feedBack.position(500,200);

    endButton = createButton("End the survey");
    endButton.position(540,250);

    endButton.mousePressed(()=>{
      var feedBackAnswer = feedBack.value();
      arr.push(feedBackAnswer);
      name = nameBar.value();
      emailID = emailIDBar.value();
  
      voterCount+=1;
      updateCount(voterCount);
  
      voterRef = "voters/voter" + voterCount;
      DB.ref(voterRef).set({
        name:name,
        emailID:emailID,
        vote:vote
      });
      feedBackDir.hide();
      feedBack.hide();
      endButton.hide();
      var thank = createElement("h1","Thank you for attending my survey")
      thank.position(350,100);
    });  
  
}

