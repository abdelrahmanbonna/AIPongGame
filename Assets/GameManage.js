#pragma strict

static var playerScore1 =0;
static var playerScore2 =0;

var theSkin : GUISkin;
static var theBall : Transform;

static function Score (wallName : String) {

 if(wallName=="rightwall"){
  playerScore1+=1;
 }else{
  playerScore2+=1;
 }


}


function Start(){
  theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}

function Update(){
  theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}

function OnGUI (){
GUI.skin = theSkin;
   GUI.Label (new Rect(Screen.width/2-150-18,20,100,100), ""+playerScore1);
   GUI.Label (new Rect(Screen.width/2+150-18,20,100,100), ""+playerScore2);

   if(GUI.Button(new Rect(Screen.width/2-121/2,35,121,53),"RESET")){
     playerScore1 =0;
     playerScore2 =0;
     theBall.gameObject.SendMessage("ResetBall");
   }

}