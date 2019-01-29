<template>
  <section>
    <md-notice-bar :closable="false" icon="right">跳转到page1</md-notice-bar>
    <div class="md-example-child md-example-child-md-activity-indicator">
      <md-activity-indicator type="spinner" :size="30" :text-size="20">加载中...</md-activity-indicator>
    </div>
    <div class="md-example-child md-example-child-tag">
      <tag size="large" shape="fillet" type="fill" fill-color="#FC9153" font-weight="normal" font-color="#fff">字</tag>
      <tag size="large" shape="fillet" type="fill" fill-color="#50A050" font-weight="bold" font-color="#fff">字</tag>
      <tag size="large" shape="fillet" type="fill" fill-color="#91C6EF" font-weight="bolder" font-color="#fff">字</tag>
    </div>
    <div class="md-example-child md-example-child-steps">
      <md-steps
        :steps="steps">
      </md-steps>
    </div>
    <div class="md-example-child">
      <md-button disabled>禁止点击</md-button>
      <md-button @click="handleClick">点我</md-button>
    </div>
  </section>
</template>

<script>
import { ActivityIndicator, Button, NoticeBar, Steps, Tag } from 'mand-mobile';
export default {
  components: {
    [ActivityIndicator.name]: ActivityIndicator,
    [Button.name]: Button,
    [NoticeBar.name]: NoticeBar,
    Tag,
    [Steps.name]: Steps
  },
  data() {
    return {
      steps: [
        {
          name: '第一步',
        },
        {
          name: '第二步',
        },
        {
          name: '第三步',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      location.href = 'page2.html';
    }
  }
};
</script>