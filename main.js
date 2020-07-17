let html = document.querySelector('#html');
let style = document.querySelector('#style');
let n = 0;
let string = `
/*
 * 你好，我是刘梦圆
 * 下面展示一个小项目：
 * 太极八卦图
 * 白色好像太单调了?
 * 先换个背景色:
*/
body{
    background:#ccc;
}
/*
 * 首先准备一个div
 * 然后把div变成圆形:
*/
#div1{
    width:200px;
    height:200px;
    border-radius:50%;
}
/*
 * 八卦是由黑白色组成的
 * 加上颜色,加上阴影:
*/
#div1{
    box-shadow: 0 0 20px rgba(0,0,0,0.9);
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 再加上两个核心
 * 并且绘制出颜色:
*/
#div1::before{
    content:'';
    width:100px;
    height:100px;
    display:block;
    border-radius:50%;
    position:absolute;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    content:'';
    width:100px;
    height:100px;
    display:block;
    border-radius:50%;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*
 * 这样一幅太极图就画好了
 * 下面让太极转动起来：
*/
#div1{
    animation:taiji 6s linear infinite;
}
@keyframes taiji{
    from{
        transform:rotate(0deg);
    }
    to{      
        transform:rotate(360deg);
    }
}
/*
 * 一幅太极八卦图就完成了
 * 项目源码: https://github.com/codinglmy/cv
 * 效果演示: http://lmy1996.top/
 * 感谢您的耐心观看！
*/
`;
let string2 = '';

html.innerHTML = string2;


let step = ()=>{
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 = string2 + '<br>'
        }else if(string[n] === ' '){
            string2 = string2 + '&nbsp;'
        }else{
            string2 = string2 + string[n];
        }
        if(n < string.length){
            n += 1;
            html.innerHTML = string2;
            style.innerHTML = string.substring(0,n);
            window.scrollTo(0,9999);
            html.scrollTo(0,9999);
        } 
        step();
    },30) 
}

step();


