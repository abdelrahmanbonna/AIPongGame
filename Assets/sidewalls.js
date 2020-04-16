#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D ) {
  if(hitInfo.name == "Ball"){
    var wallname = transform.name;
    GetComponent.<AudioSource>().pitch = Random.Range(0.8f,1.2f);
    GetComponent.<AudioSource>().Play();
    GameManage.Score(wallname);
    hitInfo.gameObject.SendMessage("ResetBall");
  }
}