<template>
  <view class="index">
    <n-swiper />
    <view class="main-box-wrapper">
      <view class="main-box-container">
        <view class="technical-support">
          <img src="">
          <text class="main-title">技术支持</text>
          <text class="sub-title">提供维修售后</text>
        </view>
        <view class="utility-service">
          <img src="">
          <text class="main-title">水电服务</text>
          <text class="sub-title">一站式整体服务</text>
        </view>
      </view>
    </view>
    <view class="sub-box-wrapper">
      <view class="sub-box-container">
        <view class="question-box">
          <view class="main-info">
            <img src="">
            <text class="title">常见问题</text>
          </view>
          <text class="sub-info">日常技术问题解疑答惑</text>
        </view>
        <view class="help-box">
          <view class="main-info">
            <img src="">
            <text class="title">帮助中心</text>
          </view>
          <text class="sub-info">为你提供多方位的帮助</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import Swiper from '@/components/swiper/index'

export default {
  name: 'Index',
  components: {
    'n-swiper': Swiper
  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
}

.main-box-wrapper {
  width: 100%;
  padding-bottom: 20px;

  .main-box-container {
    display: flex;
    width: 92%;
    height: auto;
    margin: 16px auto;
    padding: 24px 0;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);

    .technical-support {
      width: 50%;

      .main-title {
        display: block;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.8;
        color: #3c3c3c;
      }

      .sub-title {
        display: block;
        font-size: 16px;
        color: #a8a8a8;
      }

      img {
        width: 50%;
        height: auto;
      }
    }

    .utility-service {
      width: 50%;

      .main-title {
        display: block;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.8;
        color: #3c3c3c;
      }

      .sub-title {
        display: block;
        font-size: 16px;
        text-align: center;
        color: #a8a8a8;
      }

      img {
        width: 50%;
        height: auto;
      }
    }
  }
}

.sub-box-wrapper {
  width: 100%;
  height: auto;
  padding-bottom: 32px;
  
  .sub-box-container {
    display: flex;
    gap: 12px;
    width: 92%;
    height: auto;
    margin: 0px auto;

    .question-box {
      width: 50%;
      padding: 18px 0;
      background-color: #f4f4f4;

      .main-info {
        display: flex;

        .title {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
          color: #3c3c3c;
        }

        img {
          width: 28px;
          height: 28px;
        }
      }

      .sub-info {
        font-size: 14px;
        color: #565656;
      }
    }

    .help-box {
      width: 50%;
      padding: 18px 0;
      background-color: #f4f4f4;

      .main-info {
        display: flex;

        .title {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.5;
          color: #3c3c3c;
        }

        img {
          width: 28px;
          height: 28px;
        }
      }

      .sub-info {
        font-size: 14px;
        color: #565656;
      }
    }
  }
}
</style>
