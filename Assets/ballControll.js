﻿#pragma strict

var ballSpeed : float = 80;




function Start () {
  yield WaitForSeconds(2);
  GoBall();
}

function Update(){

}


function OnCollisionEnter2D(colInfo: Collision2D) {
 if(colInfo.collider.tag == "Player"||colInfo.collider.tag == "AI"){
   
   GetComponent.<Rigidbody2D>().velocity.y = GetComponent.<Rigidbody2D>().velocity.y/2 + colInfo.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
   GetComponent.<AudioSource>().pitch = Random.Range(0.8f,1.2f);
   GetComponent.<AudioSource>().Play();
 }

}

function ResetBall(){
  GetComponent.<Rigidbody2D>().velocity.x=0;
  GetComponent.<Rigidbody2D>().velocity.y=0;
  transform.position.x=0;
  transform.position.y=0;

  yield WaitForSeconds(0.5);
  GoBall();
}

function GoBall(){
var randomnumber = Random.Range(0,2);

  if(randomnumber<=0.5){
  GetComponent.<Rigidbody2D>().AddForce(new Vector2 (ballSpeed,10));
  }else{
   GetComponent.<Rigidbody2D>().AddForce(new Vector2 (-ballSpeed,-10));
  }
}