/**
 * Created by 曹艳奇 on 2016/12/19.
 */

var cas = document.getElementById('cas');
var context = cas.getContext('2d');

var leftPadding = 20,
    bottomPadding = 20,
    rightPadding = 20,
    topPadding = 20;
var x = leftPadding,
    y = cas.height - bottomPadding;


//绘制点
context.beginPath();
//  var rangeWidth, rangeHight;
//  rangeWidth = cas.width - leftPadding - rightPadding/* - arrowHeight*/;
//  rangeHight = cas.height - topPadding - bottomPadding /*- arrowHeight*/;

//获取随机数min~max
function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return parseInt((max - min) * Math.random()) + min;
}

//生成不重复的 n 个点, string:点集合名称
function randPoints( pointName,n) {
    while (pointName.length < n) {
        var num = random(500);
        if (pointName.indexOf(num) === -1) {
            pointName.push({
                x:num,
                y:random(250)
            });
        }
    }
}

// 绘制 点、线
function  drawPoint(pointName){
    //  计算比例:  rage的值 除以 最大值 表示的
    /*     if(5==pointName.length){
     var maxX = pointName[0].x,   //假设第一个是最大的
     maxY = pointName[0].y;
     for (var i = 1; i < pointName.length; i++) {
     if (maxX < pointName[i].x) {
     maxX = pointName[i].x;
     }
     if (maxY < pointName[i].y) {
     maxY = pointName[i].y;
     }
     }
     var rateX = rangeWidth / maxX,
     rateY = rangeHight / maxY;
     console.log(rateX);
     _rateX = rateX;
     _rateY = rateY;
     }*/
    //两次描点的颜色
    if(5 == pointName.length){
        context.fillStyle = "gold";
    }else {
        context.fillStyle = "deepskyblue";
    }

    for (var i = 0; i < pointName.length; i++) {

        var pointX = x + pointName[i].x/* * _rateX*/,
            pointY = y - pointName[i].y /** _rateY*/;

        context.beginPath();
        context.moveTo( pointX, pointY );
        context.arc( pointX, pointY, 4, 0, 2*Math.PI );
        context.closePath();
        context.fill();

    }

    //连线
    //如果是第一次5个点
    for (var i = 0; i < pointName.length; i++){
        if( 5 == pointName.length){
            context.beginPath();
            // context.moveTo(points[0].x * rateX + x, y - points[0].y * rateY);
            context.moveTo(pointX1,pointY1);
            var pointX1 = x + pointName[i].x/* * _rateX*/,
                pointY1 = y - pointName[i].y/* * _rateY*/;
            context.lineTo(pointX1, pointY1);
            context.stroke();
            context.strokeStyle = 'gold';
        }else {
            //代尔塔连线
            context.beginPath();
            context.strokeStyle = 'skyblue';
            //             for(var j=0;j<points.length; j++){
            //                 context.moveTo(x + points[j].x * rateX,y - points[j].y * rateY);
            context.moveTo(pointXdt,pointYdt);
            var pointXdt = x + pointName[i].x /** _rateX*/,
                pointYdt = y - pointName[i].y /** _rateY*/;
            context.lineTo(pointXdt, pointYdt);
            context.stroke();
            //             }
        }
    }
}

function sleep(n){
    var start=new Date().getTime();//定义起始时间的毫秒数
    while(true){
        var time=new Date().getTime();//每次执行循环取得一次当前时间的毫秒数
        if(time-start>n){//如果当前时间的毫秒数减去起始时间的毫秒数大于给定的毫秒数，即结束循环
            break;
        }
    }
}



//=======钮点击事件：=====================================

var btn10Flag = true;       //btn10 默认勾选
var btn100Flag = false;    //btn100 默认不勾选
var points =[];            //随机5点
var pointsDT =[];          //随机16点保存
var points1 = [];		   //21点

$('#btn10').on('click',function(){
    if(btn10Flag == true){        //btn10 勾选状态
//			alert("trueeeee");
        if(btn100Flag == false){
            context.clearRect(0, 0, 550, 430);
            btn10Flag = false;
            $('#im10').hide();
        }else{
            //清画布
            context.clearRect(0, 0, 550, 430);
            //画21点
            drawPoint(points1);
            //flag-->false
            btn10Flag = false;
            $('#im10').hide();
        }
    }else{							//btn10 未勾选
        if(btn100Flag == false){     //btn10  btn100未勾选，
            //清画布
            context.clearRect(0, 0, 550, 430);
            //画5点
            drawPoint(points);
            btn10Flag = true;
            $('#im10').show();
        }else{
            //清画布
            context.clearRect(0, 0, 550, 430);
            //画5点
            drawPoint(points);
            //画21点
            drawPoint(points1);
            //falg-->true
            btn10Flag = true;
            $('#im10').show();
        }
    }
})

//按钮：代尔塔
$("#btn100").on('click', function () {
    if (btn100Flag == false) {

        drawPoint(points1);
        btn100Flag = true;
        $('#im100').show();
    }else {
        //清画布
        context.clearRect(0, 0, 550, 430);
        //画5点
        drawPoint(points);
        btn100Flag = false;
        $('#im100').hide();
    }
})


//按钮 运动
$('#btn2').on('click', function btn_move() {
    context.clearRect(0, 0, 550, 430);

    //生成5个点
    points = [];
    randPoints(points, 5);
    drawPoint(points);

    //生成16个点
    pointsDT = [];
    randPoints(pointsDT, 16);    //生成不重复16个点
    //将新的16个点插到原始5个点中
    points1 = points.slice(0);
    points1.splice(1, 0, pointsDT[0], pointsDT[1], pointsDT[2], pointsDT[3]);
    points1.splice(6, 0, pointsDT[4], pointsDT[5], pointsDT[6], pointsDT[7]);
    points1.splice(11, 0, pointsDT[8], pointsDT[9], pointsDT[10], pointsDT[11]);
    points1.splice(16, 0, pointsDT[12], pointsDT[13], pointsDT[14], pointsDT[15]);

    //默认状态
    btn10Flag = true;
    btn100Flag = false;
    $('#im10').show();
    $('#im100').hide();
})

// 加载先执行一次点击
$(function () {
    $("#btn2").click();
});