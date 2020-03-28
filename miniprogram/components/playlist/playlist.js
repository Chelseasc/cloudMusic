// components/playlist/playlist.js
Component({
  /**
   * 组件的属性列表 传递给组件的
   */
  properties: {
    playlist: {
      type: Object
    }
  },

  /* 数据监听器 */
  observers: {
    // playlist(val) { 监听对象
    //   console.log(val);
    // }
    // 监听对象下面的属性
    ['playlist.playCount'](count) {
      console.log(count);
      console.log(this.handleNumber(count, 2));
    }
  },

  /**
   * 组件的初始数据 组件内部数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 保留到小数点后几位
    handleNumber(num, point) {
      let numStr = num.toString().split('.')[0];
      if(numStr.length < 6) { // 10w以内
        return numStr;
      } else if (numStr.length >= 6 && numStr.length <= 8) { // 10w以上百万以内
        let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point);
        return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
      }
    }
  }
})
