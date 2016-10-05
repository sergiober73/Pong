/**
   prototype we move the ship up and down
 *
 * @constructor
 * @this {Ship}
  *
 */

var Ship =function (id_ship){

  this.imgObj = document.getElementById(id_ship);
  var self=this; //Artifici per fer funcionar setInterval
  this.getArtifactSelf = function(){return self;};

};//end of constructor


Ship.prototype.locate = function(x,y){

    this.imgObj.style.left = (Math.round(x))+ 'px';
    this.imgObj.style.top = (Math.round(y)) + 'px';

 }; //End locate method


Ship.prototype.up_down = function(y){
    //Ens eixim per dalt o per baix
    if (y<=0) {

      this.imgObj.style.top = 0 + 'px';

    }else if(y>=this.vpHeight-this.imgObj.height){

      this.imgObj.style.top = (Math.round(this.vpHeight-this.imgObj.height)) + 'px';

    }else{

      this.imgObj.style.top = (Math.round(y)) + 'px';

    }

  };

module.exports=Ship;
