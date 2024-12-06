var carVariable = function()
{
var seats = 5;
var doors = 4;
this.accept = function(visitorObject)
{
visitorObject.visit(this);
}
}
var truckVariable = function()
{
var towPackage = true;
var doors = 2;
this.accept = function(visitorObject)
{
visitorObject.visit(this);
}
}
var monsterTruckVariable = function()
{
var looksLikeADragon = true;
var doors = 1.5;
this.accept = function(visitorObject)
{
visitorObject.visit(this);
}
}
  

var CarVisitor = function()
{
var visit = function(carVariable)
{
}
}
var TruckVisitor = function()
{
var visit = function(truckVariable)
{
}
}
var MonsterTruckVisitor = function()
{
var visit = function(monsterTruckVariable)
{
}
}
