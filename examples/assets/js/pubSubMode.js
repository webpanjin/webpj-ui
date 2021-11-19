class PubSub{
  constructor(){
    this.fnObj = {}
  }
  $on(fnName,callback){
    this.fnObj[fnName] = this.fnObj[fnName]?this.fnObj[fnName]:[]
    this.fnObj[fnName].push(callback)
  }
  $emit(fnName,param){
    this.fnObj[fnName].forEach(fn=>{
      fn(param)
    })
  }
}
export default PubSub