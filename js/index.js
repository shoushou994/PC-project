//头部交互
//获取元素
var arrow = document.querySelector('#header .arrow');//获取小三角
var upNodes = document.querySelectorAll('#header .headerMain .nav ul li .up');//获取up
var liNodes = document.querySelectorAll('#header .headerMain .nav ul li');//拿到头部li
var header = document.getElementById('header');
var content = document.getElementById('content');
var contentLi = document.querySelectorAll('#content .list>li');
var contentList = document.querySelector('#content .list');
var now = 0;
var timer = null;
var aboutUl = document.querySelectorAll('#content .list .about .about3>.item>ul');
var homeLi1 = document.querySelectorAll('#content .list .home .homeList>li');
var homeLi2 = document.querySelectorAll('#content .list .home .homeIcon>li');
var menuBarLi = document.querySelectorAll('#content .menuBar>li');
var preIndex = 0;//上一次的页面
var mask = document.getElementById('mask');
var maskTop = document.querySelector('#mask .maskTop');
var maskBottom = document.querySelector('#mask .maskBottom');
// var maskLine = document.querySelector('#mask .maskLine');//一条线
var maskLine = document.querySelectorAll('#mask>span');
var music = document.querySelector('#header .headerMain .music');
var myAudio = document.querySelector('#header .headerMain .music>audio');



//音频
music.onclick = function () {
    //paused 用来判断当前音频是否是暂停状态，返回布尔值，true说明当前                        是暂停的
    if (myAudio.paused){
        myAudio.play();//执行播放
        music.style.backgroundImage = 'url("img/musicon.gif")'
    } else {
        myAudio.pause();//执行暂停逻辑
        music.style.backgroundImage = 'url("img/musicoff.gif")'
    }
}


//开机动画
function loading() {
    var imgFlag = 0;//用于记录当前加载完成的图片的张数
    //图片路径的数组
    var arrImg = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png'];
    for (var i = 0; i < arrImg.length; i++){
        var imgNode = new Image();//创建图片节点对象
        imgNode.src = 'img/' + arrImg[i];
        imgNode.onload = function () {
            imgFlag++;
            // maskLine.style.width = imgFlag / arrImg.length * 100 + '%';//一条线
            maskLine[0].style.width = (imgFlag / arrImg.length * 100)/2 + '%';
            maskLine[1].style.width = (imgFlag / arrImg.length * 100)/2 + '%';
        }
    }

    //网页的图片都加载完成后，开机动画开始执行 并执行完成
    maskLine[0].addEventListener('transitionend',function () {
        maskTop.style.height = '0';//高度为0
        maskBottom.style.height = '0';
        // maskLine.style.display = 'none';//一条线 消失
        maskLine[0].style.display = 'none';//线消失
        maskLine[1].style.display = 'none';
    })

    //开机动画执行完 再开始第一屏的动画
    maskTop.addEventListener('transitionend',function () {
        animationArr[0]['inAni']();//第一屏 入场
        home3D();//第一屏的3D轮播
        mask.remove();//删除开机动画
    })
}
loading();


//出入场动画
var animationArr = [{
    //第一屏  入场
    inAni:function () {
        var homeList = document.querySelector('#content .list .home .homeList');
        var homeIcon = document.querySelector('#content .list .home .homeIcon');

        homeList.style.transform = 'translateY(0px)';
        homeIcon.style.transform = 'translateY(0px)';
        homeList.style.opacity = '1';
        homeIcon.style.opacity = '1';
    },
    //出场
    outAni:function () {
        var homeList = document.querySelector('#content .list .home .homeList');
        var homeIcon = document.querySelector('#content .list .home .homeIcon');
        homeList.style.transform = 'translateY(-200px)';
        homeIcon.style.transform = 'translateY(200px)';
        homeList.style.opacity = '0';
        homeIcon.style.opacity = '0';
    }
},{
    //第二屏
    inAni:function () {
        var plane1 = document.querySelector('#content .course .plane1')
        var plane2 = document.querySelector('#content .course .plane2')
        var plane3 = document.querySelector('#content .course .plane3')
        plane1.style.transform = 'translate(0px,0px)';
        plane2.style.transform = 'translate(0px,0px)';
        plane3.style.transform = 'translate(0px,0px)';
    },
    outAni:function () {
        var plane1 = document.querySelector('#content .course .plane1')
        var plane2 = document.querySelector('#content .course .plane2')
        var plane3 = document.querySelector('#content .course .plane3')
        plane1.style.transform = 'translate(-200px,-200px)';
        plane2.style.transform = 'translate(-200px,200px)';
        plane3.style.transform = 'translate(200px,-200px)';
    }
},{
    //第三屏
    inAni:function () {
        var pencil1 = document.querySelector('#content .list .works .pencel1');
        var pencil2 = document.querySelector('#content .list .works .pencel2');
        var pencil3 = document.querySelector('#content .list .works .pencel3');
        pencil1.style.transform = 'translateY(0px)';
        pencil2.style.transform = 'translateY(0px)';
        pencil3.style.transform = 'translateY(0px)';
    },
    outAni:function () {
        var pencil1 = document.querySelector('#content .list .works .pencel1');
        var pencil2 = document.querySelector('#content .list .works .pencel2');
        var pencil3 = document.querySelector('#content .list .works .pencel3');
        pencil1.style.transform = 'translateY(-200px)';
        pencil2.style.transform = 'translateY(200px)';
        pencil3.style.transform = 'translateY(200px)';
    }
},{
    //第四屏
    inAni:function () {
        var item1 = document.querySelector('#content .list .about .about3>.item:first-child');
        var item2 = document.querySelector('#content .list .about .about3>.item:last-child');
        item1.style.transform = 'rotate(0deg)';
        item2.style.transform = 'rotate(0deg)';
    },
    outAni:function () {
        var item1 = document.querySelector('#content .list .about .about3>.item:first-child');
        var item2 = document.querySelector('#content .list .about .about3>.item:last-child');
        item1.style.transform = 'rotateZ(45deg)';
        item2.style.transform = 'rotateZ(-45deg)';
    }
},{
    //第五屏
    inAni:function () {
        var team1 = document.querySelector('#content .list .team .team1')
        var team2 = document.querySelector('#content .list .team .team2')
        team1.style.transform = 'translateX(0px)';
        team2.style.transform = 'translateX(0px)';
    },
    outAni:function () {
        var team1 = document.querySelector('#content .list .team .team1')
        var team2 = document.querySelector('#content .list .team .team2')
        team1.style.transform = 'translateX(-200px)';
        team2.style.transform = 'translateX(200px)';
    }
}]

//出入场动画初始化    所有屏幕均处于 出场状态
for (var i = 0; i < contentLi.length; i++){
    animationArr[i]['outAni']();
}
// 默认 第一屏入场
// setTimeout(function () {
//     animationArr[0]['inAni']();
// },4000)



//滚轮降频 定时器
//IE/chrome
document.onmousewheel = function (event) {
    clearTimeout(timer);
    timer = setTimeout(function () {
        fun(event)
    },200)
};
//firefox
if (document.addEventListener){
    document.addEventListener('DOMMouseScroll',function (event) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fun(event)
        },200)
    })
}

//滚轮事件函数
function fun(event) {
    event = event || window.event;

    var flag = '';
//      ie/chrome
    if (event.wheelDelta){
        if (event.wheelDelta > 0){
            flag = 'up';//上
        } else {
            flag = 'down';//下
        }
    } else if (event.detail){
        //firefox
        if (event.detail < 0){
            flag = 'up';//上
        } else {
            flag = 'down';//下
        }
    }

    preIndex = now;//把当前所在页面的索引值更新给上一页
    //判断临界值，
    if ((preIndex == 0 && flag == 'up') || (preIndex == contentLi.length - 1 && flag == 'down')){
        return ;
    }
    switch (flag) {
        //  执行向上的逻辑
        case "up":
            if (now > 0){
                now--;
            }
            move(now);
            break;
        //  执行向下的逻辑
        case "down":
            if (now < liNodes.length - 1){
                now++;
            }
            move(now);
            break;
    }

    event.preventDefault && event.preventDefault();// 取消默认事件
    return false;
}


//头部效果交互 函数
function headerBind() {
//  第一个up的宽度，默认100%
    upNodes[0].style.width = '100%';
//  初始小三角的位置
    arrow.style.left = liNodes[0].getBoundingClientRect().left + liNodes[0].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';

    //头部Li
    for (var i = 0; i < liNodes.length; i++) {
        liNodes[i].index = i;// 给所有li添加index属性（保存索引）
//      给所有li绑定单价事件，点击导航每一个li，改变字体效果和小三角位置
        liNodes[i].onclick = function () {
            preIndex = now;
            now = this.index;
            if (preIndex == now){
                return;
            }
            move(now);
        }
    }

    //侧边导航Li 小圆点
    for (var i = 0; i < menuBarLi.length; i++){
        menuBarLi[i].index = i;
        menuBarLi[i].onclick = function () {
            preIndex = now;
            now = this.index;
            if (preIndex == now){
                return;
            }
            move(now);
        }
    }
}
headerBind();


//屏幕滚动函数 小三角 导航部分高亮
function move(now) {
    //up宽度  高亮
    for (var j = 0; j < upNodes.length; j++){
        upNodes[j].style.width = ''
    }
    upNodes[now].style.width = '100%';
    //小三角位置
    arrow.style.left = liNodes[now].getBoundingClientRect().left + liNodes[now].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
    //页面滚动屏幕切换      修改 top值 = 当前在第几屏 * (视口高度 - header高度)
    contentList.style.top = - now * (document.documentElement.clientHeight - header.offsetHeight) + 'px'

    //侧边导航 高亮状态改变
    for (var i = 0; i < menuBarLi.length; i++){
        menuBarLi[i].className = '';
    }
    menuBarLi[now].className = 'active';

    //当前页面的 入场动画 开始执行
    animationArr[now]['inAni']();
    //上一次页面的 出场动画 执行
    animationArr[preIndex]['outAni']();
}



//第一屏  3D动画效果
function home3D() {
    var oldIndex = 0;
    var autoIndex = 0;
    var homeTimer = null;

    //点击小圆点切换图片 左侧 右侧
    for (var i = 0; i < homeLi2.length; i++){
        homeLi2[i].index = i;//保存索引值
        //绑定点击事件
        homeLi2[i].onclick = function () {
            clearInterval(homeTimer);//清除定时器

            for (var j = 0; j < homeLi2.length; j++){
                homeLi2[j].className = '';
            }
            this.className = 'active';

            //点击右侧  左侧隐藏 右侧显示
            if (oldIndex < this.index){
                homeLi1[oldIndex].className = 'leftHide';
                homeLi1[this.index].className = 'rightShow';
            }else if (oldIndex > this.index){
                //点击左侧  左侧显示 右侧隐藏
                homeLi1[oldIndex].className = 'rightHide';
                homeLi1[this.index].className = 'leftShow';
            }
            oldIndex = this.index;//更新下标
            autoIndex = this.index;
            auto()
        }
    }

    //自动轮播
    function auto() {
        homeTimer = setInterval(function () {
            autoIndex++;
            //临界值判定
            //也可以是 autoIndex > homeLi2.length - 1
            if (autoIndex == homeLi2.length){
                autoIndex = 0;
            }
            homeLi1[oldIndex].className = 'leftHide';
            homeLi1[autoIndex].className = 'rightShow';

            //小圆点自动跟随
            for (var i = 0; i < homeLi2.length; i++){
                homeLi2[i].className = '';
            }
            homeLi2[autoIndex].className = 'active';
            oldIndex = autoIndex;//更新下标
        },3000)
    }
    auto();
}



//主体布局 函数
function contentBind() {
    //内容区容器的高度
    content.style.height = document.documentElement.clientHeight - header.offsetHeight + 'px';
    //每一屏的高度
    for (var i = 0; i < contentLi.length; i++){
        contentLi[i].style.height = document.documentElement.clientHeight - header.offsetHeight + 'px';
    }
}
contentBind();



//图片炸裂   第四屏
function picBoom(){
    for (var i = 0; i < aboutUl.length; i++){
        changeImg(aboutUl[i]);
    }
    //定义创建炸裂图片的函数
    function changeImg(ul) {
        var w = ul.offsetWidth / 2;
        var h = ul.offsetHeight / 2;
        var imgSrc = ul.dataset.src;//img/about1.jpg

        for (var i = 0; i < 4; i++){
            //创建li
            var liNode = document.createElement('li');
            //创建img
            var imgNode = new Image();
            liNode.style.width = w + 'px';
            liNode.style.height = h + 'px';

            imgNode.src = imgSrc;
            imgNode.style.top = - Math.floor(i / 2) * h + 'px';
            imgNode.style.left = - Math.floor(i % 2) * w + 'px';
            ul.appendChild(liNode);
            liNode.appendChild(imgNode);
        }

        // var imgNodes = document.querySelectorAll('#content .list .about .about3>.item>ul>li>img')//这个不可以，选不到
        var imgNodes = ul.querySelectorAll('img');

        //鼠标移入效果
        ul.onmouseenter = function () {
            imgNodes[0].style.top = h + 'px';
            imgNodes[1].style.left = - 2 * w + 'px';
            imgNodes[2].style.left = w + 'px';
            imgNodes[3].style.top = - 2 * h + 'px';
        }
        //鼠标移出效果
        ul.onmouseleave = function () {
            imgNodes[0].style.top = 0 + 'px';
            imgNodes[1].style.left = -w + 'px';
            imgNodes[2].style.left = 0 + 'px';
            imgNodes[3].style.top = -h + 'px'
        }
    }
}
picBoom();





















