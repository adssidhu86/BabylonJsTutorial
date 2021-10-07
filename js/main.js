/// <reference path='./vendor/babylon.d.ts' />

//const { babylonjs } = ̥;


//get our canvas
const canvas = document.getElementById('renderCanvas');

//create a babylonjs engine 
const engine = new BABYLON.Engine(canvas, true);

function createScene(){
//create a scene 
const scene = new BABYLON.Scene(engine);


//create a camera 
//@param name= "camera1"
const camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0,0,-10),scene);
camera.attachControl(canvas,true);
//create a light 

const light = new BABYLON.HemisphericLight('light',new BABYLON.Vector3(0,1,0),scene);

//create a box
const box =  BABYLON.MeshBuilder.CreateBox('box', {}, scene);

//create a sphere
const sphere =  BABYLON.MeshBuilder.CreateSphere('sphere',{
    segments : 35,
    diameter:2,
}, scene);
sphere.position = new BABYLON.Vector3(3,0,0);

// create a plane 
const plane = BABYLON.MeshBuilder.CreatePlane('plane',{},scene);
plane.position= new BABYLON.Vector3(-3,0,0);

// create parametric shapes
// create a point 
const points = [
    new BABYLON.Vector3(2,0,0),
    new BABYLON.Vector3(2,1,1),
    new BABYLON.Vector3(2,1,0),
];

const lines = BABYLON.MeshBuilder.CreateLines('lines',{points},scene);

return scene;
}




//create our scene 
const scene  = createScene();
engine.runRenderLoop(() => {
scene.render();
});