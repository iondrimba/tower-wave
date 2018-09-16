!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";i.d(t,"a",function(){return r});i(3);function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,i){t&&n(e.prototype,t),i&&n(e,i)}(e,[{key:"init",value:function(){this.backgroundColor=15538721,this.ambientLightColor=16777215,this.spotLightColor=16777215,this.boxColor=1729517,this.angle=0,this.gridSize=24,this.col=this.gridSize,this.row=this.gridSize,this.velocity=.1,this.boxes=[],this.amplitude=-1,this.frequency=0,this.waveLength=150,this.scene=new THREE.Scene,this.scene.background=new THREE.Color(this.backgroundColor),this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(17.7,25.3,-17.9),this.controls=new THREE.OrbitControls(this.camera),this.addRenderer(),this.addAmbientLight(),this.addSpotLight(),this.addFloor(),this.addBoxes(this.scene),this.addGUIControls(),this.animate(),window.addEventListener("resize",this.onResize.bind(this))}},{key:"addGUIControls",value:function(){var e=this;this.gui=new dat.GUI,this.gui.add(this,"amplitude",-1,1),this.gui.add(this,"velocity",0,.5),this.gui.add(this,"waveLength",0,500),this.controller=this.gui.add(this,"gridSize",24,50),this.controller.onFinishChange(function(t){e.gridSize=Math.floor(t),e.clearScene(),e.col=e.gridSize,e.row=e.gridSize,e.addBoxes(e.scene)})}},{key:"addRenderer",value:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement)}},{key:"addAmbientLight",value:function(){var e=new THREE.AmbientLight(this.ambientLightColor,.5);this.scene.add(e)}},{key:"addSpotLight",value:function(){this.spotLight=new THREE.SpotLight(this.spotLightColor),this.spotLight.position.set(100,250,150),this.spotLight.castShadow=!0,this.scene.add(this.spotLight)}},{key:"clearScene",value:function(){for(var e=0;e<this.col;e++)for(var t=0;t<this.row;t++)this.scene.remove(this.boxes[e][t]);this.boxes=[]}},{key:"addBoxes",value:function(e){for(var t=0;t<this.col;t++){this.boxes[t]=[];for(var i=0;i<this.row;i++){var n=this.getBox();n.scale.set(1,.001,1),this.boxes[t][i]=n,n.position.set(t-.5*this.gridSize,0,i-.5*this.gridSize),e.add(n)}}}},{key:"drawWave",value:function(){for(var e=0;e<this.col;e++)for(var t=0;t<this.row;t++){var i=this.distance(t,e,.5*this.row,.5*this.col),n=this.map(i,0,this.waveLength,-100,100),r=this.angle+n;this.boxes[e][t].scale.y=this.map(Math.sin(r),-1,-this.amplitude,.001,1)}this.angle-=this.velocity}},{key:"distance",value:function(e,t,i,n){return Math.sqrt(Math.pow(e-i,2)+Math.pow(t-n,2))}},{key:"map",value:function(e,t,i,n,r){return(e-t)/(i-t)*(r-n)+n}},{key:"addFloor",value:function(){var e=new THREE.PlaneGeometry(500,500),t=new THREE.ShadowMaterial({opacity:.35});this.floor=new THREE.Mesh(e,t),e.rotateX(-Math.PI/2),this.floor.position.y=0,this.floor.receiveShadow=!0,this.scene.add(this.floor)}},{key:"getBox",value:function(){var e=new THREE.BoxGeometry(1,5,1),t=new THREE.MeshPhysicalMaterial({color:this.boxColor,emissive:0,roughness:.5,metalness:.1,reflectivity:.5}),i=new THREE.Mesh(e,t);i.castShadow=!0,i.receiveShadow=!0,i.position.y=2.5;var n=new THREE.Object3D;return n.add(i),n}},{key:"addGrid",value:function(){var e=this.col,t=e,i=new THREE.GridHelper(e,t);i.position.set(0,0,0),i.material.opacity=0,i.material.transparent=!0,this.scene.add(i)}},{key:"animate",value:function(){this.drawWave(),this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))}},{key:"onResize",value:function(){var e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}}]),e}()},function(e,t,i){"use strict";i.r(t),function(e){var t=i(0),n=new t.a;n.init()}.call(this,i(2)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){}]);