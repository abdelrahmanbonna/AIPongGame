#pragma strict

var speed : float = 5.0;

function Start () {

}

function Update () {
 var ballpos : Transform = GameManage.theBall;
 Debug.Log("ball x:"+ballpos.position.x);
  Debug.Log("ball y:"+ballpos.position.y);

  if(ballpos.position.x>0&&ballpos.position.y>0){

  if(GameObject.FindGameObjectWithTag("AI").transform.position.y<ballpos.position.y){
  GetComponent.<Rigidbody2D>().velocity.y = speed;
  }else if(GameObject.FindGameObjectWithTag("AI").transform.position.y>ballpos.position.y){
  GetComponent.<Rigidbody2D>().velocity.y = speed*-1;
  }else{
  GetComponent.<Rigidbody2D>().velocity.y = 0;
  }

  }else if(ballpos.position.x>0&&ballpos.position.y<0){

  if(GameObject.FindGameObjectWithTag("AI").transform.position.y<ballpos.position.y){
  GetComponent.<Rigidbody2D>().velocity.y = speed;
  }else if(GameObject.FindGameObjectWithTag("AI").transform.position.y>ballpos.position.y){
  GetComponent.<Rigidbody2D>().velocity.y = speed*-1;
  }else{
  GetComponent.<Rigidbody2D>().velocity.y = 0;
  }

  }else{
  GetComponent.<Rigidbody2D>().velocity.y = 0;
  }
 



}