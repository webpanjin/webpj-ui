<template>
<!-- 贝塞尔二次曲线 -->
  <div class="pj-arc" :id="id">
  </div>
</template>

<script>
import {getPosition} from '../assets/js/getControlPoint'
export default {
  name: 'PjArc',
  props:{
    id:{
      type:String,
      required:true
    },
    width:{
      type:String|Number,
      default:100
    },
    height:{
      type:String|Number,
      default:100
    },
    lineColor:{
      type:String,
      default:'red'
    },
    lineWidth:{
      type:String|Number,
      default:1
    },
    from:{
      type: Array,
      default: [50,50]
    },
    to:{
      type: Array,
      default: [100,100]
    },
    angle:{
      type:String|Number,
      default:30
    }
  },
  methods:{
    drawPath(){
      const controlPoint = getPosition(this.from,this.to,this.angle)
      let strStart = `<svg width="${this.width}" height="${this.height}" 
      style="fill:transparent;stroke:${this.lineColor};stroke-width:${this.lineWidth};" 
      xmlns="http://www.w3.org/2000/svg"><path d="M`
      strStart+= (this.from[0]+' '+this.from[1]+' ') //起始点
      strStart+= ('Q'+controlPoint.left+' '+controlPoint.top+' ') //控制点
      strStart+= (this.to[0]+' '+this.to[1]+' ') //结束点
      strStart+= `"></path></svg>`
      document.getElementById(this.id).insertAdjacentHTML('afterbegin',strStart)
    }
  },
  mounted(){
    this.drawPath()
  }
}
</script>

<style lang="scss" scoped>
  .pj-arc{

  }
</style>