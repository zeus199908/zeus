<template>
  <div id="category_right">
    <betterScroll class="wrapper" ref="scroll">
      <div class="tab_item" v-for="(item, index) in list_item" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" />
          <p class="item_text">{{ item.title }}</p>
        </a>
      </div>
    </betterScroll>
  </div>
</template>
<script>
  import betterScroll from "components/common/betterScroll/betterScroll";

  export default {
    props: {
      list_item: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data() {
      return {
        count: 0
      };
    },
    mounted() {},
    methods: {
      imgLoad() {
        this.count++;
        if (this.count >= this.list_item.length) {
          this.$refs.scroll.refresh();
          this.count = 0;
        }
      }
    },
    components: {
      betterScroll
    }
  };
</script>
<style scoped>
  #category_right {
    flex: 1;
  }

  .wrapper {
    height: 100%;
    overflow: hidden;
  }

  .tab_item {
    display: inline-block;
    width: 2rem;
    margin: 0.25rem;
  }

  .tab_item a {
    display: block;
  }

  .tab_item img {
    width: 90%;
  }

  .item_text {
    margin-top: 0.3rem;
    text-align: center;
  }
</style>