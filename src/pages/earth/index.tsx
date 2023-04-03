import React from "react";
import MachineRoom from "../../component/machineroom";
import { getCabinateByName } from "../../api/cabinet";
import "./index.css";

let room: MachineRoom;
let canvas: HTMLCanvasElement;

class Earth extends React.Component {
  state = {
    planePos: {
      left: 200,
      top: 200,
    },
    planeDisplay: "",
    curCabinet: {
      name: "cabinet-001",
      temperature: 36,
      capacity: 0,
      count: 0,
    },
  };

  componentDidMount() {
    if (!canvas) {
      return;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    room = new MachineRoom(canvas);
    room.modelPath = "/src/models/earth/";
    room.loadGLTF("scene.gltf");
    room.animate();
    // room.onMouseOverCabinet = (cabinet) => {
    //   //显示信息面板
    //   this.setState({
    //     planeDisplay: "block",
    //   });
    //   //基于cabinet.name 获取机柜数据
    //   getCabinateByName(cabinet.name).then(({ name, temperature, capacity, count }) => {
    //     this.setState({
    //       curCabinet: { name, temperature, capacity, count },
    //     });
    //   });
    // };
    // room.onMouseMoveCabinet = (left, top) => {
    //   //移动信息面板
    //   this.setState({
    //     planePos: { left, top },
    //   });
    // };
    // room.onMouseOutCabinet = () => {
    //   //显示信息面板
    //   this.setState({
    //     planeDisplay: "none",
    //   });
    // };
  }
  mouseMove(params: any) {
    room.selectCabinet(params.clientX, params.clientY);
  }
  
  //定义鼠标事件
 setEventsMouse(){
  //点击了鼠标左键
  window.addEventListener( 'click', function(e){
      if(e.button===0){
          console.log("点击了鼠标左键");
      }
  } );
  
  //点击了鼠标右键
  window.addEventListener( 'contextmenu', function(e){
      if(e.button===2){
          console.log("点击了鼠标右键");
      }
  } );

  // //鼠标移动坐标，2D坐标
  // window.addEventListener( 'mousemove', function(e){
  //    console.log('x:'+e.x);
  //    console.log('y:'+e.y);
  // } );
}


render() {
    const {
      planePos: { left, top },
      planeDisplay: display,
      curCabinet: { name, temperature, capacity, count },
    } = this.state;
    return (
      <div className="Room" onMouseMove={this.mouseMove} >
        <canvas id="canvas" ref={(ele) => {if(ele){canvas = ele}}}></canvas>
        <div>测试</div>
        <div id="plane" style={{ left, top, display }}>
          <p>机柜名称：{name}</p>
          <p>机柜温度：{temperature}°</p>
          <p>
            使用情况：{count}/{capacity}
          </p>
        </div>
      </div>
    );
  }
}

export default Earth;
