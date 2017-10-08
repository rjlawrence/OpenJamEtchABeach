gdjs.GameCode = {};


gdjs.GameCode.GDCharaObjects1= [];
gdjs.GameCode.GDStepsObjects1= [];
gdjs.GameCode.GDWaveObjects1= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackObjects1= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};

gdjs.GameCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameCode.GDCharaObjects1.length = 0;
gdjs.GameCode.GDStepsObjects1.length = 0;
gdjs.GameCode.GDWaveObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackObjects1.length = 0;


{

gdjs.GameCode.GDCharaObjects1.createFrom(runtimeScene.getObjects("Chara"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].addForce(0, -50, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].setAnimation(3);
}
}}

}


{

gdjs.GameCode.GDCharaObjects1.createFrom(runtimeScene.getObjects("Chara"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].addForce(0, 50, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.GameCode.GDCharaObjects1.createFrom(runtimeScene.getObjects("Chara"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].addForce(50, 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.GameCode.GDCharaObjects1.createFrom(runtimeScene.getObjects("Chara"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].addForce(-50, 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.GameCode.GDCharaObjects1.createFrom(runtimeScene.getObjects("Chara"));
gdjs.GameCode.GDStepsObjects1.length = 0;

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDCharaObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCharaObjects1[i].hasNoForces()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDCharaObjects1[k] = gdjs.GameCode.GDCharaObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCharaObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Steps", gdjs.GameCode.GDStepsObjects1).getEventsObjectsMap(), (( gdjs.GameCode.GDCharaObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCharaObjects1[0].getPointX("CharaX"))+12, (( gdjs.GameCode.GDCharaObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCharaObjects1[0].getPointY("CharaY"))+14, "");
}}

}


{

gdjs.GameCode.GDCharaObjects1.createFrom(runtimeScene.getObjects("Chara"));
gdjs.GameCode.GDWaveObjects1.createFrom(runtimeScene.getObjects("Wave"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Wave", gdjs.GameCode.GDWaveObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Chara", gdjs.GameCode.GDCharaObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDCharaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCharaObjects1[i].addForce(0, -75, 0);
}
}}

}


{

gdjs.GameCode.GDWaveObjects1.createFrom(runtimeScene.getObjects("Wave"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDWaveObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaveObjects1[i].addForceTowardPosition(400, 300, 150, 0);
}
}}

}


{

gdjs.GameCode.GDWaveObjects1.createFrom(runtimeScene.getObjects("Wave"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDWaveObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWaveObjects1[i].addForceTowardPosition(400, 800, 150, 0);
}
}}

}


{

gdjs.GameCode.GDStepsObjects1.createFrom(runtimeScene.getObjects("Steps"));
gdjs.GameCode.GDWaveObjects1.createFrom(runtimeScene.getObjects("Wave"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Wave", gdjs.GameCode.GDWaveObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Steps", gdjs.GameCode.GDStepsObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDStepsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStepsObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.GameCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("Back", gdjs.GameCode.GDBackObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Beach_Party.ogg", true, 100, 1);
}}

}

return;
}
gdjs['GameCode']= gdjs.GameCode;
