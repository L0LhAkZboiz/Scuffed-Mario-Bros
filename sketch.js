/*                                                                                                             
Najiullah Shah               
ICS3U1
Submitted to Ms. Manoil
Due Date: Jan 31st 2022 AD
Description: CPT
*/
//importing font variables
let myFont;
//questions variables
let q1 = "What does the following code output?";
let q2 = "What does the modulus Function do?";
let q3 = "If I were to assign variable \na_chunky_number to the value of 69, \nand divide it by 4, \nwhat would be the result?";
let q4 = "What would the following code \noutput if a_chunky_variable = 22 \nand number_kool = 37?";
let q5 = "What is the output of the following code?";
//checks if question is asked variable
let question_asked = false;
//array that draws a line on the ground
let line_values_ground = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575];
//array that stores questions
let questions = [q1, q2, q3, q4, q5];
//random generator
let rand;
//makes random integer
let randint;
//draws tnt co-ords
let tntX = 300, tntY = -500;
// creates explosion height and width of final explosion
let explosion_w= 10, explosion_h = 10;
//the base values of mario's x and y, used for ease of movement
let marioX = 125, marioY = 325;
//goomba's x's and y's
let goombaX = 200, goombaY = 325;
let goombaX2 = 200, goombaY2 = 325;
let goombaX3 = 200, goombaY3 = 325;
let goombaX4 = 200, goombaY4 = 325;
let goombaX5 = 200, goombaY5 = 325;
let goombaX6 = 200, goombaY6 = 325;
//bowsers co-ords
let bowserX = 400, bowserY = 305;
//booleans that check if the goombas are dead
let goombaDead = false;
let goombaDead2 = false;
let goombaDead3 = false;
let goombaDead4 = false;
let goombaDead5 = false;
let goombaDead6 = false;
//question block co-ords
let questionX = 100, questionY = 100;
//timer for cool effects on start and instruction screen.
let press_start = 0;
//variable that switches between screens
let screen = "title screen";
let screenSaver;
//timer variable
let timer = 0;
//checks if stage is started
let stage_start = true;
//checks if the goombas are moving in a certain direction
let goomba_right = false;
let goomba_right2 = false;
let goomba_right3 = false;
let goomba_right4 = false;
let goomba_right5 = false;
let goomba_right6 = false;
//checks if question is answered
let answer = false;
//creates canvas size and imports font.
function preload()
{
  myFont = loadFont("SigmarOne-Regular.ttf");
}
function setup()
{
  createCanvas(600, 400)
}
//draw function
function draw()
{
  //start menu screen
  if (screen == "title screen")
  {
    startMenu();
  }
  //instructions screen
  if (screen == "Instructions")
  {
    drawInstruction();
  }
  //"level 1" screen
  if (screen == "1-1-1")
  {
    screen1();
    while (stage_start == true)
    {
      //sets variables
      marioX = 125;
      marioY = 325;
      goombaX = 325;
      stage_start = false;
    }
    // checks if goomba is alive, if alive runs movement code
    if(goombaDead == false)
    {
      if (goomba_right == true)
      {
       goombaX++;     
        if (goombaX + 7 >= 525)
        {
          goomba_right = false;
        }
      }
      if (goomba_right == false)
      {
        goombaX--;       
        if (goombaX - 7 <= 75 )
        {
           goomba_right = true;
        }
      } 
    }    
    //kills goomba
    if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
    {
      goombaDead = true;
    }
    //checks if level is completed
    if(marioX - 12 >= 525)
    {
      screen = "1-1-2";
      stage_start = true;
      goombaDead = false;
    }
    //checks if mario goes wrong way
    if (marioX + 12 <= 75)
    {
      screen = "instant death";
    }
    //checks if goomba kills amrio
    if ((marioX + 12 == goombaX - 7 || marioX - 12 == goombaX + 7) && goombaY == marioY)
    {
      screen = "instant death";
    }
  }
  //stage 2
  if (screen == "1-1-2")
  {
    screen2();
    while (stage_start == true)
    {
      //sets up variables
      marioX = 125;
      marioY = 325;
      goombaX = 325;
      goombaX2 = 425;
      questionX = 300;
      questionY = 250;
      stage_start = false;
    }
    //goomba 1 functionality
    if(goombaDead == false)
    {
    if (goomba_right == true)
    {
     goombaX++;
     if (goombaX + 7 >= 525)
     {
       goomba_right = false;
     }
    }
    if (goomba_right == false)
     {
       goombaX--;
       if (goombaX - 7 <= 75)
       {
         goomba_right = true;
       }
     } 
    }
    
    if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
    {
      goombaDead = true;
    }
    if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
    {
      goombaDead = true;
    }
    //goomba 2 functionality
    if(goombaDead2 == false)
    {
    if (goomba_right2 == false)
    {
     goombaX2++;
     if (goombaX2 + 7 >= 525)
     {
       goomba_right2 = true;
     }
    }
    if (goomba_right2 == true)
     {
       goombaX2--;
       if (goombaX2 - 7 <= 75)
       {
         goomba_right2 = false;
       }
     } 
    }
    //checks if mario hits question block, switches to question screen
    if (answer == false)
    {
      if (marioY - 12 <= questionX && marioX == questionX)
      {
        screenSaver = screen;
        screen = "question screen";
      }
    }
    
    //checks if goombas are dead
    if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
    {
      goombaDead = true;
    }
    if (marioY + 12 <= goombaY2 - 12 && marioX == goombaX2)
    {
      goombaDead2 = true;
    }
    //moves to next level, resets variables
    if(marioX + 12 >= 525)
    {
      screen = "1-1-3";
      stage_start = true;
      goombaDead = false;
      goombaDead2 = false;
      answer = false;
    }
    //checks if mario is walking back to level 1
    if (marioX - 12 <= 75)
    {
      screen = "1-1-1";
    }
    //checks if goombas kill mario
    if ((marioX + 12 == goombaX - 7 || marioX - 12 == goombaX + 7) && marioY == goombaY)
    {
      screen = "instant death";
    }
    if ((marioX + 12 == goombaX2 - 7 || marioX - 12 == goombaX2 + 7) && marioY == goombaY2)
    {
      screen = "instant death";
    }
  }
  //stage 3
  if (screen == "1-1-3")
  {
      screen3();
      while (stage_start == true)
      {
        //sets up variables
        marioX = 125;
        marioY = 325;
        goombaX = 325;
        goombaX2 = 425;
        goombaX3 = 225;
        questionX = 300;
        questionY = 250;
        question_asked = false;
        stage_start = false;
      }
      //goomba 1 functionality
      if(goombaDead == false)
      {
      if (goomba_right == true)
      {
       goombaX++;
       if (goombaX + 7 >= 525)
       {
         goomba_right = false;
       }
      }
      if (goomba_right == false)
       {
         goombaX--;
         if (goombaX - 7 <= 75)
         {
           goomba_right = true;
         }
       } 
      }
      
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      //goomba 2 functionality
      if(goombaDead2 == false)
      {
      if (goomba_right2 == false)
      {
       goombaX2++;
       if (goombaX2 + 7 >= 525)
       {
         goomba_right2 = true;
       }
      }
      if (goomba_right2 == true)
       {
         goombaX2--;
         if (goombaX2 - 7 <= 75)
         {
           goomba_right2 = false;
         }
       } 
      }
      //goomba 3
      if(goombaDead3 == false)
      {
      if (goomba_right3 == false)
      {
       goombaX3 = goombaX3 + 2;
       if (goombaX3 + 7 >= 525)
       {
         goomba_right3 = true;
       }
      }
      if (goomba_right3 == true)
       {
         goombaX3 = goombaX3 - 2;
         if (goombaX3 - 7 <= 75)
         {
           goomba_right3 = false;
         }
       } 
      }
      //checks if mario hits question block, switches to question screen
      if (answer == false)
      {
        if (marioY - 12 <= questionX && marioX == questionX)
        {
          screenSaver = screen;
          screen = "question screen";
        }
      }
      
      //checks if goombas are dead
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY2 - 12 && marioX == goombaX2)
      {
        goombaDead2 = true;
      }
      if (marioY + 12 <= goombaY3 - 12 && marioX == goombaX3)
      {
        goombaDead3 = true;
      }
      //moves to next level, resets variables
      if(marioX + 12 >= 525)
      {
        screen = "1-1-4";
        stage_start = true;
        goombaDead = false;
        goombaDead2 = false;
        goombaDead3 = false;
        answer = false;
      }
      //checks if mario is walking back to level 1
      if (marioX - 12 <= 75)
      {
        screen = "1-1-2";
      }
      //checks if goombas kill mario
      if ((marioX + 12 == goombaX - 7 || marioX - 12 == goombaX + 7) && marioY == goombaY)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX2 - 7 || marioX - 12 == goombaX2 + 7) && marioY == goombaY2)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX3 - 7 || marioX - 12 == goombaX3 + 7) && marioY == goombaY3)
      {
        screen = "instant death";
      }
    }
    //screen 4
    if (screen == "1-1-4")
    {
      screen4();
      while (stage_start == true)
      {
        //sets up variables
        marioX = 125;
        marioY = 325;
        goombaX = 325;
        goombaX2 = 425;
        goombaX3 = 225;
        goombaX4 = 325;
        questionX = 300;
        questionY = 250;
        question_asked = false;
        stage_start = false;
      }
      //goomba 1 functionality
      if(goombaDead == false)
      {
      if (goomba_right == true)
      {
       goombaX++;
       if (goombaX + 7 >= 525)
       {
         goomba_right = false;
       }
      }
      if (goomba_right == false)
       {
         goombaX--;
         if (goombaX - 7 <= 75)
         {
           goomba_right = true;
         }
       } 
      }
      
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      //goomba 2 functionality
      if(goombaDead2 == false)
      {
      if (goomba_right2 == false)
      {
       goombaX2++;
       if (goombaX2 + 7 >= 525)
       {
         goomba_right2 = true;
       }
      }
      if (goomba_right2 == true)
       {
         goombaX2--;
         if (goombaX2 - 7 <= 75)
         {
           goomba_right2 = false;
         }
       } 
      }
      //goomba 3
      if(goombaDead3 == false)
      {
      if (goomba_right3 == false)
      {
       goombaX3 = goombaX3 + 2;
       if (goombaX3 + 7 >= 525)
       {
         goomba_right3 = true;
       }
      }
      if (goomba_right3 == true)
       {
         goombaX3 = goombaX3 - 2;
         if (goombaX3 - 7 <= 75)
         {
           goomba_right3 = false;
         }
       } 
      }
      //goomba 4
      if(goombaDead4 == false)
      {
      if (goomba_right4 == true)
      {
       goombaX4 = goombaX4 - 2;
       if (goombaX4 + 7 <= 75)
       {
         goomba_right4 = false;
       }
      }
      if (goomba_right4 == false)
       {
         goombaX4 = goombaX4 + 2;
         if (goombaX4 - 7 >= 525)
         {
           goomba_right4 = true;
         }
       } 
      }
      //checks if mario hits question block, switches to question screen
      if (answer == false)
      {
        if (marioY - 12 <= questionX && marioX == questionX)
        {
          screenSaver = screen;
          screen = "question screen";
        }
      }
      
      //checks if goombas are dead
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY2 - 12 && marioX == goombaX2)
      {
        goombaDead2 = true;
      }
      if (marioY + 12 <= goombaY3 - 12 && marioX == goombaX3)
      {
        goombaDead3 = true;
      }
      if (marioY + 12 <= goombaY4 - 12 && marioX == goombaX4)
      {
        goombaDead4 = true;
      }
      //moves to next level, resets variables
      if(marioX - 12 >= 525)
      {
        screen = "1-1-5";
        stage_start = true;
        goombaDead = false;
        goombaDead2 = false;
        goombaDead3 = false;
        goombaDead4 = false;
        answer = false;
      }
      //checks if mario is walking back to level 3
      if (marioX + 12 <= 75)
      {
        screen = "1-1-3";
      }
      //checks if goombas kill mario
      if ((marioX + 12 == goombaX - 7 || marioX - 12 == goombaX + 7) && marioY == goombaY)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX2 - 7 || marioX - 12 == goombaX2 + 7) && marioY == goombaY2)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX3 - 7 || marioX - 12 == goombaX3 + 7) && marioY == goombaY3)
      {
        screen = "instant death";
      }
    }
    //screen 5
    if (screen == "1-1-5")
    {
      screen5();
      while (stage_start == true)
      {
        //sets up variables
        marioX = 125;
        marioY = 325;
        goombaX = 325;
        goombaX2 = 425;
        goombaX3 = 225;
        goombaX4 = 375;
        goombaX5 = 400;
        questionX = 300;
        questionY = 250;
        question_asked = false;
        stage_start = false;
      }
      //goomba 1 functionality
      if(goombaDead == false)
      {
      if (goomba_right == true)
      {
       goombaX++;
       if (goombaX + 7 >= 525)
       {
         goomba_right = false;
       }
      }
      if (goomba_right == false)
       {
         goombaX--;
         if (goombaX - 7 <= 75)
         {
           goomba_right = true;
         }
       } 
      }
      
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      //goomba 2 functionality
      if(goombaDead2 == false)
      {
      if (goomba_right2 == false)
      {
       goombaX2++;
       if (goombaX2 + 7 >= 525)
       {
         goomba_right2 = true;
       }
      }
      if (goomba_right2 == true)
       {
         goombaX2--;
         if (goombaX2 - 7 <= 75)
         {
           goomba_right2 = false;
         }
       } 
      }
      //goomba 3
      if(goombaDead3 == false)
      {
      if (goomba_right3 == false)
      {
       goombaX3 = goombaX3 + 2;
       if (goombaX3 + 7 >= 525)
       {
         goomba_right3 = true;
       }
      }
      if (goomba_right3 == true)
       {
         goombaX3 = goombaX3 - 2;
         if (goombaX3 - 7 <= 75)
         {
           goomba_right3 = false;
         }
       } 
      }
      //goomba 4
      if(goombaDead4 == false)
      {
      if (goomba_right4 == true)
      {
       goombaX4 = goombaX4 - 2;
       if (goombaX4 + 7 <= 75)
       {
         goomba_right4 = false;
       }
      }
      if (goomba_right4 == false)
       {
         goombaX4 = goombaX4 + 2;
         if (goombaX4 - 7 >= 525)
         {
           goomba_right4 = true;
         }
       } 
      }
      //goomba 5
      if(goombaDead5 == false)
      {
      if (goomba_right5 == true)
      {
       goombaX5 = goombaX5 - 3;
       if (goombaX5 + 7 <= 75)
       {
         goomba_right5 = false;
       }
      }
      if (goomba_right5 == false)
       {
         goombaX5 = goombaX5 + 3;
         if (goombaX5 - 7 >= 525)
         {
           goomba_right5 = true;
         }
       } 
      }
      //checks if mario hits question block, switches to question screen
      if (answer == false)
      {
        if (marioY - 12 <= questionX && marioX == questionX)
        {
          screenSaver = screen;
          screen = "question screen";
        }
      }
      
      //checks if goombas are dead
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY2 - 12 && marioX == goombaX2)
      {
        goombaDead2 = true;
      }
      if (marioY + 12 <= goombaY3 - 12 && marioX == goombaX3)
      {
        goombaDead3 = true;
      }
      if (marioY + 12 <= goombaY4 - 12 && marioX == goombaX4)
      {
        goombaDead4 = true;
      }
      if (marioY + 12 <= goombaY5 - 12 && marioX == goombaX5)
      {
        goombaDead5 = true;
      }
      //moves to next level, resets variables
      if(marioX - 12 >= 525)
      {
        screen = "1-1-6";
        stage_start = true;
        goombaDead = false;
        goombaDead2 = false;
        goombaDead3 = false;
        goombaDead4 = false;
        answer = false;
      }
      //checks if mario is walking back to level 3
      if (marioX - 12 <= 75)
      {
        screen = "1-1-4";
      }
      //checks if goombas kill mario
      if ((marioX + 12 == goombaX - 7 || marioX - 12 == goombaX + 7) && marioY == goombaY)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX2 - 7 || marioX - 12 == goombaX2 + 7) && marioY == goombaY2)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX3 - 7 || marioX - 12 == goombaX3 + 7) && marioY == goombaY3)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX4 - 7 || marioX - 12 == goombaX4 + 7) && marioY == goombaY4)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX5 - 7 || marioX - 12 == goombaX5 + 7) && marioY == goombaY5)
      {
        screen = "instant death";
      }
    }
    //screen 6
    
    if (screen == "1-1-6")
    {
      screen6();
      while (stage_start == true)
      {
        //sets up variables
        marioX = 125;
        marioY = 325;
        goombaX = 325;
        goombaX2 = 425;
        goombaX3 = 225;
        goombaX4 = 375;
        goombaX5 = 400;
        goombaX6 = 200;
        questionX = 300;
        questionY = 250;
        question_asked = false;
        stage_start = false;
      }
      //goomba 1 functionality
      if(goombaDead == false)
      {
      if (goomba_right == true)
      {
       goombaX++;
       if (goombaX + 7 >= 525)
       {
         goomba_right = false;
       }
      }
      if (goomba_right == false)
       {
         goombaX--;
         if (goombaX - 7 <= 75)
         {
           goomba_right = true;
         }
       } 
      }
      //goomba 2 functionality
      if(goombaDead2 == false)
      {
      if (goomba_right2 == false)
      {
       goombaX2++;
       if (goombaX2 + 7 >= 525)
       {
         goomba_right2 = true;
       }
      }
      if (goomba_right2 == true)
       {
         goombaX2--;
         if (goombaX2 - 7 <= 75)
         {
           goomba_right2 = false;
         }
       } 
      }
      //goomba 3
      if(goombaDead3 == false)
      {
      if (goomba_right3 == false)
      {
       goombaX3 = goombaX3 + 2;
       if (goombaX3 + 7 >= 525)
       {
         goomba_right3 = true;
       }
      }
      if (goomba_right3 == true)
       {
         goombaX3 = goombaX3 - 2;
         if (goombaX3 - 7 <= 75)
         {
           goomba_right3 = false;
         }
       } 
      }
      //goomba 4
      if(goombaDead4 == false)
      {
      if (goomba_right4 == true)
      {
       goombaX4 = goombaX4 - 2;
       if (goombaX4 + 7 <= 75)
       {
         goomba_right4 = false;
       }
      }
      if (goomba_right4 == false)
       {
         goombaX4 = goombaX4 + 2;
         if (goombaX4 - 7 >= 525)
         {
           goomba_right4 = true;
         }
       } 
      }
      //goomba 5
      if(goombaDead5 == false)
      {
      if (goomba_right5 == true)
      {
       goombaX5 = goombaX5 - 3;
       if (goombaX5 + 7 <= 75)
       {
         goomba_right5 = false;
       }
      }
      if (goomba_right5 == false)
       {
         goombaX5 = goombaX5 + 3;
         if (goombaX5 - 7 >= 525)
         {
           goomba_right5 = true;
         }
       } 
      }
      //goomba 6
      if(goombaDead6 == false)
      {
      if (goomba_right6 == false)
      {
       goombaX6 = goombaX6 + 3;
       if (goombaX6 + 7 >= 525)
       {
         goomba_right6 = true;
       }
      }
      if (goomba_right5 == true)
       {
         goombaX6 = goombaX6 - 3;
         if (goombaX6 - 7 <= 75)
         {
           goomba_right5 = false;
         }
       } 
      }
      //checks if mario hits question block, switches to question screen
      if (answer == false)
      {
        if (marioY - 12 <= questionX && marioX == questionX)
        {
          screenSaver = screen;
          screen = "question screen";
        }
      }
      
      //checks if goombas are dead
      if (marioY + 12 <= goombaY - 12 && marioX == goombaX)
      {
        goombaDead = true;
      }
      if (marioY + 12 <= goombaY2 - 12 && marioX == goombaX2)
      {
        goombaDead2 = true;
      }
      if (marioY + 12 <= goombaY3 - 12 && marioX == goombaX3)
      {
        goombaDead3 = true;
      }
      if (marioY + 12 <= goombaY4 - 12 && marioX == goombaX4)
      {
        goombaDead4 = true;
      }
      if (marioY + 12 <= goombaY5 - 12 && marioX == goombaX5)
      {
        goombaDead5 = true;
      }
      if (marioY + 12 <= goombaY6 - 12 && marioX == goombaX6)
      {
        goombaDead6 = true;
      }
      //moves to next level, resets variables
      if(marioX + 12 >= 525)
      {
        screen = "boss";
        stage_start = true;
        goombaDead = false;
        goombaDead2 = false;
        goombaDead3 = false;
        goombaDead4 = false;
        goombaDead5 = false;
        goombaDead6 = false;
        answer = false;
      }
      //checks if mario is walking back to level 3
      if (marioX - 12 <= 75)
      {
        screen = "1-1-4";
      }
      //checks if goombas kill mario
      if ((marioX + 12 == goombaX - 7 || marioX - 12 == goombaX + 7) && marioY == goombaY)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX2 - 7 || marioX - 12 == goombaX2 + 7) && marioY == goombaY2)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX3 - 7 || marioX - 12 == goombaX3 + 7) && marioY == goombaY3)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX4 - 7 || marioX - 12 == goombaX4 + 7) && marioY == goombaY4)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX5 - 7 || marioX - 12 == goombaX5 + 7) && marioY == goombaY5)
      {
        screen = "instant death";
      }
      if ((marioX + 12 == goombaX6 - 7 || marioX - 12 == goombaX6 + 7) && marioY == goombaY6)
      {
        screen = "instant death";
      }
    }
    if (screen == "boss")
    {
      boss_screen();
    }
    if (screen == "question screen")
    {
      drawQuestionScreen(); 
    }
    if (screen == "correct screen")
    {
      correctScreen();
    }
    //shows the game over/death screen
    if (screen == "instant death")
    {
      instantDeath();
    }
    if (screen == "win screen")
    {
      winScreen();
    }
    if (screen == "siu")
    {
      siu();
    }
  }
  

//draws the base background of the map
function drawBackground()
{
  background(99, 160, 253);
}
//draws the start menu
function startMenu()
{
  drawBackground();
  drawTheFatPlumberMan();
  drawBowser();
  strokeWeight(1);
  fill(222, 66, 28);
  rectMode(CENTER);
  rect(300, 100, 300, 150);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  for (let i = 0; i<=23 ; i++)
  {
    strokeWeight(1);
    stroke(0);
    line(line_values_ground[i], 350, line_values_ground[i], 400);
  }
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
  textFont(myFont);
  fill(0);
  textSize(45);
  text("SCUFFED", 160, 80);
  textSize(35);
  text("MARIO BROS.", 160, 130);
  fill(255, 200, 193);
  textSize(45);
  text("SCUFFED", 160, 75);
  textSize(35);
  text("MARIO BROS.", 160, 125);
  textSize(10);
  fill(255);
  text("© 2022 N. SHAH", 80, 345);
  if (press_start % 2 == 0)
  {
    fill(0);
    textSize(15);
    text(" ", 180, 200);
  }
  else
  {
    fill(0);
    textSize(15);
    text("PRESS SHIFT + C TO START", 180, 200);
  }
  press_start++;
  if (keyPressed)
  {
    if (keyCode == 67)
    {
      screen = "Instructions";
    }
  }
  
}
//draws mario
function drawTheFatPlumberMan()
{
  //arms
  fill(255, 0, 0);
  rect(marioX, marioY, 50, 5);
  //body
  fill(5, 61, 232);
  ellipse(marioX, marioY, 25, 25);
  //head
  fill(252,164,56);
  ellipse(marioX, marioY - 25, 30, 25); 
  //hat
  beginShape();
  fill(209,23,16);
  vertex(marioX - 15, marioY - 30);
  vertex(marioX + 20, marioY - 30);
  vertex(marioX + 20, marioY - 35);
  vertex(marioX + 10, marioY - 35);
  vertex(marioX + 10, marioY - 40);
  vertex(marioX - 15, marioY - 40);
  vertex(marioX - 15, marioY - 30);
  endShape();
  strokeWeight(3);
  line(marioX - 5, marioY + 12, marioX - 15, marioY + 25);
  line(marioX + 5, marioY + 12, marioX + 15, marioY + 25);  
}
//draws bowser
function drawBowser()
{
  stroke(0);
  strokeWeight(1);
  fill(230,142,11);
  ellipse(bowserX-20, bowserY + 33, 25, 30);
  ellipse(bowserX+20, bowserY + 33, 25, 30);
  fill(0,181,84);
  ellipse(bowserX, bowserY, 69, 69);
  fill(230,142,11);
  ellipse(bowserX - 19, bowserY - 29, 50, 50);
  stroke(255, 0, 0);
  strokeWeight(15);
  point(bowserX - 29, bowserY - 39);
  stroke(50);
  strokeWeight(5);
  point(bowserX - 29, bowserY - 39);
  fill(255);
  noStroke();
  triangle(bowserX-29, bowserY - 50, bowserX - 19, bowserY - 75, bowserX - 9, bowserY-50);
}
//draws goomba 1
function drawGoomba()
{
  strokeWeight(0);
  fill(252, 188, 176);
  rect(goombaX, goombaY + 10, 15, 25);
  fill(200,76,12);
  ellipse(goombaX, goombaY, 25, 25);
  fill(0);
  ellipse(goombaX - 7, goombaY + 22, 7, 7);
  ellipse(goombaX + 7, goombaY + 22, 7, 7);
}
//draws goomba 2
function drawGoomba2()
{
  strokeWeight(0);
  fill(252, 188, 176);
  rect(goombaX2, goombaY2 + 10, 15, 25);
  fill(200,76,12);
  ellipse(goombaX2, goombaY2, 25, 25);
  fill(0);
  ellipse(goombaX2 - 7, goombaY2 + 22, 7, 7);
  ellipse(goombaX2 + 7, goombaY2 + 22, 7, 7);
}
//draws goomba 3
function drawGoomba3()
{
  strokeWeight(0);
  fill(252, 188, 176);
  rect(goombaX3, goombaY3 + 10, 15, 25);
  fill(200,76,12);
  ellipse(goombaX3, goombaY3, 25, 25);
  fill(0);
  ellipse(goombaX3 - 7, goombaY3 + 22, 7, 7);
  ellipse(goombaX3 + 7, goombaY3 + 22, 7, 7);
}
//draws goomba 4
function drawGoomba4()
{
  strokeWeight(0);
  fill(252, 188, 176);
  rect(goombaX4, goombaY4 + 10, 15, 25);
  fill(200,76,12);
  ellipse(goombaX4, goombaY4, 25, 25);
  fill(0);
  ellipse(goombaX4 - 7, goombaY4 + 22, 7, 7);
  ellipse(goombaX4 + 7, goombaY4 + 22, 7, 7);
}
//draws goomba 5
function drawGoomba5()
{
  strokeWeight(0);
  fill(252, 188, 176);
  rect(goombaX5, goombaY5 + 10, 15, 25);
  fill(200,76,12);
  ellipse(goombaX5, goombaY5, 25, 25);
  fill(0);
  ellipse(goombaX5 - 7, goombaY5 + 22, 7, 7);
  ellipse(goombaX5 + 7, goombaY5 + 22, 7, 7);
}
//draws goomba 6
function drawGoomba6()
{
  strokeWeight(0);
  fill(252, 188, 176);
  rect(goombaX6, goombaY6 + 10, 15, 25);
  fill(200,76,12);
  ellipse(goombaX6, goombaY6, 25, 25);
  fill(0);
  ellipse(goombaX6 - 7, goombaY6 + 22, 7, 7);
  ellipse(goombaX6 + 7, goombaY6 + 22, 7, 7);
}

//instruction page
function drawInstruction()
{
  background(0);
  fill(255);
  textSize(20);
  text("INSTRUCTIONS", 210, 25);
  if (press_start%2 == 0)
  {
    fill(255);
    textSize(20);
    text(" ", 170, 375);
  }
  else
  {
    fill(255);
    textSize(20);
    text("CLICK MOUSE TO CONTINUE", 160, 375);
  }
  press_start++;
  textSize(15);
  text("Mario is trying to go fight Bowser, but he needs your help.\nBowser knows Mario is not a Computer Science Person.\nYou are to help Mario Navigate and tell him the answers to the \nquestions that come up.\nCONTROLS:\nWASD TO MOVE.\nCLICK TO ANSWER QUESTIONS\nTO PLAY MUSIC, SPACE\nTO PAUSE, P\nGOOD LUCK!!", 1, 75);
  if (mouseIsPressed)
  {    
      screen = "1-1-1";
  }
  
}
//draws death screen
function instantDeath()
{
  background(0);
  textSize(30);
  fill(255);
  text("INSTANT DEATH\nSTOP BEING DUMB\nclick to retry", 150, 150);
  if (mouseIsPressed)
  {
    stage_start = true;
     questions[0] = "What does the following code output?";
     questions[1] = "What does the modulus Function do?";
     questions[2] = "If I were to assign variable \na_chunky_number to the value ofp 69, \nand divide it by 4, \nwhat would be the result?";
     questions[3] = "What would the following code \noutput if a_chunky_variable = 22 \nand number_kool = 37?";
     questions[4] = "What is the output of the following code?";
     goombaDead = false;
     goombaDead2 = false;
     goombaDead3 = false;
     goombaDead4 = false;
     goombaDead5 = false;
     goombaDead6 = false;
     answer = false;
     screen = "title screen";
  }
  
}
//question screen
function drawQuestionScreen()
{
  background(mouseX, mouseY, 15);
  if (timer >= 900)
  {
    screen = "instant death";
  }
  if (question_asked == false)
    {
      timer = 0;
      rand = (int)(random(0, 5));
      randint = (int)(rand);
      while (questions[randint] == " ")
      {
        rand = (int)(random(0, 5));
        randint = (int)(rand);
      }
      question_asked = true;
    }
  
     if (rand == 0)
    {
      fill(0);
      strokeWeight(0);
      textSize(25);
      text("" + questions[0], 5, 100);
      textSize(15);
      text("System.out.println(69+420)", 180, 160);
      fill(10);
      strokeWeight(5);
      stroke(0);
      rect(125, 250, 150, 50);
      rect(300, 250, 150, 50);
      rect(475, 250, 150, 50);
      textSize(35);
      fill(255);
      text("69+420", 125 - 70, 250 + 20);
      text("Error", 300 - 70, 250 + 20);
      text("489", 475 - 70, 250 + 20);
      if (mouseIsPressed)
      {
        if ((mouseX >= 225 && mouseX <= 375) && (mouseY >= 225 && mouseY <= 275))
        {
          questions[0] = " ";
          screen = "correct screen";        
        }
        if (((mouseX >= 325 && mouseX <= 475) && (mouseY >= 225 && mouseY <= 275)) || ((mouseX >= 400 && mouseX <= 550) && (mouseY >= 225 && mouseY <= 275)))
        {
          screen = "instant death";
        }
      }
      
    }
    else if (rand == 1)
    {
      fill(0);
      strokeWeight(0);
      textSize(25);
      text(" " + questions[1], 5, 100);
      fill(10);
      strokeWeight(5);
      stroke(0);
      rect(125, 250, 150, 150);
      rect(300, 250, 150, 150);
      rect(475, 250, 150, 150);
      textSize(10);
      fill(255);
      text("Divides 2 numbers", 125 - 70, 250 - 60);
      text("Finds the \npercentage of the \nsecond number in \ncomparison to the \nfirst.", 300 - 70, 250 - 60);
      text("Finds the remainder \nof the \ndivision of 2 \nnumbers\n(i.e long division).", 475 - 70, 250 - 60);
      if(mouseIsPressed)
      {
         if ((mouseX >= 400 && mouseX <= 550) && (mouseY >= 175 && mouseY <= 325))
         {
           questions[1] = " ";
           screen = "correct screen";
         }
         else if ((mouseX >= 225 && mouseX <= 375) && (mouseY >= 175 && mouseY <= 325) || (mouseX >= 50 && mouseX <= 200) && (mouseY >= 175 && mouseY <= 325))
         {
           screen = "instant death";
         }
      }
    }
    else if (rand == 2)
    {
      fill(0);
      strokeWeight(0);
      textSize(25);
      text(questions[2], 5, 45);
      fill(10);
      strokeWeight(5);
      stroke(0);
      rect(125, 250, 150, 50);
      rect(300, 250, 150, 50);
      rect(475, 250, 150, 50);
      textSize(35);
      fill(255);
      text("17.25", 125 - 70, 250 + 20);
      text("17", 300 - 70, 250 + 20);
      text("18", 475 - 70, 250 + 20);
      if (mouseIsPressed)
      {
        if ((mouseX >= 225 && mouseX <= 375) && (mouseY >= 225 && mouseY <= 275))
        {
          questions[2] = " ";
          screen = "correct screen";        
        }
        if (((mouseX >= 325 && mouseX <= 475) && (mouseY >= 225 && mouseY <= 275)) || ((mouseX >= 400 && mouseX <= 550) && (mouseY >= 225 && mouseY <= 275)))
        {
          screen = "instant death";
        }
      }
    }
    else if (rand == 3)
    {
      fill(0);
      strokeWeight(0);
      textSize(25);
      text(" " + questions[3], 5, 45);
      textSize(15);
      text("System.out.println(\"a_chunky_variable * number_kool = \" + \na_chunky_variable * number_kool);", 5, 170);
      fill(10);
      strokeWeight(5);
      stroke(0);
      rect(125, 300, 150, 100);
      rect(300, 300, 150, 100);
      rect(475, 300, 150, 100);
      textSize(10);
      fill(255);
      text("22 * 37 = 814", 125 - 70, 250 + 20);
      text("a_chunky_variable * \nnumber_kool = 814", 300 - 70, 250 + 20);
      text("Error", 475 - 70, 250 + 20);
      if(mouseIsPressed)
      {
         if ((mouseX >= 225 && mouseX <= 375) && (mouseY >= 175 && mouseY <= 325))
         {
           questions[3] = " ";
           screen = "correct screen";
         }
         else if ((mouseX >= 400 && mouseX <= 550) && (mouseY >= 175 && mouseY <= 325) || (mouseX >= 50 && mouseX <= 200) && (mouseY >= 175 && mouseY <= 325))
         {
           screen = "instant death";
         }
      }
      
    }
    else if (rand == 4)
    {
      fill(0);
      strokeWeight(0);
      textSize(25);
      text(" " + questions[4], 5, 100);
      textSize(15);
      text("number = 11 * (69-420) + 27;\nSystem.out.println(number);", 5, 170);
      fill(10);
      strokeWeight(5);
      stroke(0);
      rect(125, 250, 150, 50);
      rect(300, 250, 150, 50);
      rect(475, 250, 150, 50);
      textSize(35);
      fill(255);
      text("-3764", 125 - 70, 250 + 20);
      text("-3834", 300 - 70, 250 + 20);
      text("-6969", 475 - 70, 250 + 20);
      if (mouseIsPressed)
      {
        if ((mouseX >= 225 && mouseX <= 375) && (mouseY >= 225 && mouseY <= 275))
        {
          questions[4] = " ";
          screen = "correct screen";        
        }
        if (((mouseX >= 325 && mouseX <= 475) && (mouseY >= 225 && mouseY <= 275)) || ((mouseX >= 400 && mouseX <= 550) && (mouseY >= 225 && mouseY <= 275)))
        {
          screen = "instant death";
        }
      }
    }
    timer++;
}
//correct screen drawing
function correctScreen()
{
  background(0, 255, 0);
  strokeWeight(0);
  fill(0);
  textSize(50);
  text("Correct\n press shift + c \nto continue.", 50, 150);
  question_asked = true;
  answer = true;
  if (keyPressed)
  {
    if (keyCode == 67)
    {
      screen = screenSaver;
    }    
  }
}
//draws the first level
function screen1()
{
  
  drawBackground();
  drawTheFatPlumberMan();
  if (goombaDead == false)
  {
    drawGoomba();
  }
  strokeWeight(1);
  fill(222, 66, 28);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  groundLines();
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
  
}
//draws the second level
function screen2()
{
  drawBackground();
  drawTheFatPlumberMan();
  if (goombaDead == false)
  {
    drawGoomba();
  }
  if (goombaDead2 == false)
  {
    drawGoomba2();
  }
  if (answer == false)
  {
    question_block();
  }
  strokeWeight(1);
  fill(222, 66, 28);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  groundLines();
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
}
//draws the third level
function screen3()
{
  drawBackground();
  drawTheFatPlumberMan();
  if (goombaDead == false)
  {
    drawGoomba();
  }
  if (goombaDead2 == false)
  {
    drawGoomba2();
  }
  if(goombaDead3 == false)
  {
    drawGoomba3();
  }
  if (answer == false)
  {
    question_block();
  }
  strokeWeight(1);
  fill(222, 66, 28);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  groundLines();
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
}
//draws the fourth level
function screen4()
{
  drawBackground();
  drawTheFatPlumberMan();
  if (goombaDead == false)
  {
    drawGoomba();
  }
  if (goombaDead2 == false)
  {
    drawGoomba2();
  }
  if(goombaDead3 == false)
  {
    drawGoomba3();
  }
  if(goombaDead4 == false)
  {
    drawGoomba4();
  }
  if (answer == false)
  {
    question_block();
  }
  strokeWeight(1);
  fill(222, 66, 28);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  groundLines();
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
}
//draws the fifth level
function screen5()
{
  drawBackground();
  drawTheFatPlumberMan();
  if (goombaDead == false)
  {
    drawGoomba();
  }
  if (goombaDead2 == false)
  {
    drawGoomba2();
  }
  if(goombaDead3 == false)
  {
    drawGoomba3();
  }
  if(goombaDead4 == false)
  {
    drawGoomba4();
  }
  if(goombaDead5 == false)
  {
    drawGoomba5();
  }
  if (answer == false)
  {
    question_block();
  }
  strokeWeight(1);
  fill(222, 66, 28);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  groundLines();
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
}
//draws the sixth level
function screen6()
{
  drawBackground();
  drawTheFatPlumberMan();
  if (goombaDead == false)
  {
    drawGoomba();
  }
  if (goombaDead2 == false)
  {
    drawGoomba2();
  }
  if(goombaDead3 == false)
  {
    drawGoomba3();
  }
  if(goombaDead4 == false)
  {
    drawGoomba4();
  }
  if(goombaDead5 == false)
  {
    drawGoomba5();
  }
  if(goombaDead6 == false)
  {
    drawGoomba6();
  }
  if (answer == false)
  {
    question_block();
  }
  strokeWeight(1);
  fill(222, 66, 28);
  rect(300, 375, 600, 50);
  line(0, 375, 600, 375);
  groundLines();
  fill(0);
  rect(37, 200, 75, 400);
  fill(0);
  rect(563, 200, 75, 400);
}
//draws boss screen
function boss_screen()
{
   background(50);
   drawTheFatPlumberMan();
   drawBowser();
   fill(192,192,192);
   rect(300, 375, 600, 50);
   groundLines();
   stroke(0);
   strokeWeight(1);
   line(0, 375, 600, 375);
   fill(0);
   rect(37, 200, 75, 400);
   fill(0);
   rect(563, 200, 75, 400);
   textSize(10);
   fill(255);
   text("Hahaha, Mario you have made it! I am genuinely surprised.\nBut, you are garbage at Com Sci, let us see if you can answer this\nblock-buster Question.\nARE YOU READY?", 80, 25);
   fill(255);
   rect(175, 150, 100, 50);
   fill(255);
   rect(300, 150, 100, 50);
   fill(255);
   rect(425, 150, 100, 50);
   textSize(20);
   fill(0);
   text("YES", 145, 150);
   text("NO", 255, 150);
   text("SIUUUU", 380, 150);
   if (mouseIsPressed)
   {
     if ((mouseX >= 125 && mouseX <= 225) && (mouseY >= 125 && mouseY <= 175))
     {
       screen = "win screen";
     }
     if ((mouseX >= 250 && mouseX <= 350) && (mouseY >= 125 && mouseY <= 175))
     {
       screen = "instant death";
     }
     if ((mouseX >= 375 && mouseX <= 475) && (mouseY >= 125 && mouseY <= 175))
     {
       screen = "siu";
     }
     print(screen);
   }
}
//win screen
function winScreen()
{
  background(255, 123, 69);
  textSize(25);
  fill(0);
  text("YOU WON!!!", 275, 200);
}
//draws bowser explosion
function siu()
{
   background(50);
   drawBowser();
   tnt();
   fill(192,192,192);
   rect(300, 375, 600, 50);
   groundLines();
   stroke(0);
   strokeWeight(1);
   line(0, 375, 600, 375);
   fill(0);
   rect(37, 200, 75, 400);
   fill(0);
   rect(563, 200, 75, 400);
   if (tntY >= 325-50)
   {
     drawExplosion();
     fill(0);
     text("bowser is dead, good job soldier", 25, 200);
   }
   else
   {
     tntY += 5;
   }
}
//draws the actual explosion
function drawExplosion()
{
  fill(219, 87, 11);
  ellipse(tntX, tntY, explosion_w, explosion_h);
  while(explosion_w <= 600 && explosion_h <= 600)
  {
    explosion_w += 5;
    explosion_h += 5;
  }
}
//draws tnt
function tnt()
{
  fill(255, 0, 0);
  rect(tntX, tntY, 50, 50);
  fill(255);
  text("TNT", tntX - 20, tntY);
}
//draws question block
function question_block()
{
  strokeWeight(1);
  fill(255,197,37);
  rect(questionX, questionY, 25, 25);
  fill(255,126,6);
  textSize(25);
  text("?", questionX - 5, questionY + 9);
}
//draws ground lines
function groundLines()
{
  for (let i = 0; i<=23 ; i++)
  {
    strokeWeight(1);
    stroke(0);
    line(line_values_ground[i], 350, line_values_ground[i], 400);
  }
}
//key pressed void
function keyPressed()
{
  if (keyCode == 68)
  {
    marioX += 25;
  }
  else if (keyCode == 65)
  {
    marioX -= 25;
  }
  else if (keyCode == 87)
  {
    marioY -= 50;   
  }
}
//key released void
function keyReleased()
{
  if (keyCode == 68)
  {
    marioX += 0;
  }
  else if (keyCode == 65)
  {
    marioX -= 0;
  }
  else if (keyCode == 87)
  {
    marioY += (325 - marioY);
  }  
}