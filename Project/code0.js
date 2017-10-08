gdjs.StartCode = {};


gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDPlayObjects1= [];
gdjs.StartCode.GDHelpObjects1= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};

gdjs.StartCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDPlayObjects1.length = 0;
gdjs.StartCode.GDHelpObjects1.length = 0;


{

gdjs.StartCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Play", gdjs.StartCode.GDPlayObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Beach_Party.ogg", true, 100, 1);
}}

}

return;
}
gdjs['StartCode']= gdjs.StartCode;
