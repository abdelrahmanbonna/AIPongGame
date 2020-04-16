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
   var style : GUIStyle = new GUIStyle();
   style.fontSize = 16;
   style.normal.textColor= new Color(255f,255f,255f,1f);
   GUI.Label (new Rect(Screen.width/2-150-18,20,100,100), ""+playerScore1);
   GUI.Label (new Rect(Screen.width/2+150-18,20,100,100), ""+playerScore2);
   GUI.Label (new Rect(0,0,100,200), "Made By Abdelrahman Bonna",style);

   if(GUI.Button(new Rect(Screen.width/2-121/2,35,121,53),"RESET")){
     playerScore1 =0;
     playerScore2 =0;
     theBall.gameObject.SendMessage("ResetBall");
   }

}