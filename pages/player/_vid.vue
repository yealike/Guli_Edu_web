<template>
  <div>
    <!--阿里云视频播放器样式-->
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css"/>
    <!--阿里云视频播放器脚本-->
    <script charset="utf-8" type="text/javascript"
            src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"></script>

    <!--定义播放器-->
    <div id="J_prismPlayer" class="prism-player"></div>
  </div>
</template>
<script>
import vod from "@/api/vod";
import teacherApi from "@/api/teacher";

export default {
  layout: 'video',
  asyncData({params, error}) {
    return vod.getPlayAuth(params.vid)
      .then(resp => {
        return {
          playAuth: resp.data.data.playAuth,
          vid: params.vid
        }
      })
  },
  // 页面渲染之后，页面有数据之后
  mounted() {
    new Aliplayer({
        id: 'J_prismPlayer',
        vid: this.vid,
        playauth: this.playAuth,
        encryptType: 1,
        width: '100%',
        height: '500px',
        // 一下配置可选
        cover: 'https://ye-edu.oss-cn-hangzhou.aliyuncs.com/2022/03/31/86466fdaca28477898f7bc417ef965f3前辈很烦.jpg',
        qualitySort: 'asc', //清晰度排序
        mediaType: 'video', //返回音频还是视频
        autoplay: false,    // 是否自动播放
        isLive: false,      //是否直播
        rePlay: false,      //循环播放
        preload: true,
        controlBarVisibility: 'hover',//控制条显示方式，鼠标悬停
        useH5Prism: true    //播放器类型，HTML5
      }, function (player) {
        console.log('视频播放成功！')
      }
    )
  }
}
</script>
