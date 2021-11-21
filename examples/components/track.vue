<template>
  <div :id="id" class="pj-track" :style="{width:width,height:height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'PjTrack',
  data(){
    return{
      deviations:[],
    }
  },
  props:{
    id:{
      type:String,
      required:true
    },
    width:{
      type:String,
      default:'200'
    },
    height:{
      type:String,
      default:'200'
    },
    lineColor:{
      type:String,
      default:'#67c23a'
    }
  },
  methods:{
    getPath(){
      return this.$slots.default[0].elm
    },
    getTrain(){
      return this.$slots.default[1].elm
      
    },
    getDeviation(){//运动物体的偏移量
      let size = {
        width:this.$slots.default[1].elm.clientWidth,
        height:this.$slots.default[1].elm.clientHeight
      }
      this.deviations[0] = size.width/2
      this.deviations[1] = size.height/2
    },
    createEl(){
      let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('width',this.width)
      svg.setAttribute('height',this.height)
      svg.setAttribute('style',`fill:transparent;stroke:${this.lineColor}`)
      svg.appendChild(this.getPath())
      document.getElementById(this.id).appendChild(svg)

      let dv = document.createElement('div')
      dv.setAttribute('id',this.id+'-train')
      dv.setAttribute('style',`position:absolute;left:0;top:0;`)
      dv.appendChild(this.getTrain())
      document.getElementById(this.id).appendChild(dv)
      this.run()
    },
    run(){
      let start = performance.now();
      let path = this.getPath()
      let len = path.getTotalLength()
      let prePoint = {}
      let theta = 0
      let frame = ()=>{
        let now = performance.now();
        let phase = ((now - start) / 6000) % 1;
        let point = path.getPointAtLength(len * phase);
        if(prePoint.x){
          let angle = Math.atan2((point.y-prePoint.y), (point.x-prePoint.x)) //弧度值
          theta = angle*(180/Math.PI) //角度
        }
        document.getElementById(this.id+'-train').style.transform = 'translate3d(' + (point.x-this.deviations[0]) + 'px,' + (point.y-this.deviations[1]) + 'px,0) rotateZ('+theta+'deg)'; 
        document.getElementById(this.id+'-train').style.WebkitTransform = 'translate3d(' + (point.x-this.deviations[0]) + 'px,' + (point.y-this.deviations[1]) + 'px,0 rotateZ('+theta+'deg))'; // Chrome&Safari 
        prePoint = point 
        requestAnimationFrame(frame);
      }
      frame()
    }
  },
  mounted(){
    this.getDeviation()
    this.createEl()
  }
}
</script>

<style lang="scss" scoped>
  .pj-track{
    position:relative;
  }
</style>