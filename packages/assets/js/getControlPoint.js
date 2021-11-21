function getPosition(dot1, dot2, angle) {
  let isnegative = angle<0?true:false
  angle = Math.abs(angle)
  var x1 = dot1[0];
  var y1 = dot1[1];
  var x2 = dot2[0];
  var y2 = dot2[1];
  var PI = Math.PI;

  // 两点间的x轴夹角弧度
  var xAngle = Math.atan2((y2 - y1), (x2 - x1));
  // 转为角度
  xAngle = 360 * xAngle / (2 * PI);
  // 两点间的长度
  var L = Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
  // 计算等腰三角形斜边长度
  var L2 = L / 2 / Math.cos(angle * 2 * PI / 360);

  // 求第一个顶点坐标，位于下边
  var val1 = {};
  // 求第二个顶点坐标，位于上边
  var val2 = {};
  val1['left'] = x1 + Math.round(L2 * Math.cos((xAngle + angle) * 2 * PI / 360));
  val1['top'] = y1 + Math.round(L2 * Math.sin((xAngle + angle) * 2 * PI / 360));
  val2['left'] = x1 + Math.round(L2 * Math.cos((xAngle - angle) * 2 * PI / 360));
  val2['top'] = y1 + Math.round(L2 * Math.sin((xAngle - angle) * 2 * PI / 360));

  return isnegative?val2:val1;
}
export {
  getPosition
}