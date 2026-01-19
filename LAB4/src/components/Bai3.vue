<template>
  <div>
    <h1>{{ greeting }}</h1>
    
    <button v-bind:title="buttonTitle" v-on:click="changeGreeting">
      Click để thay đổi
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Chào cậu nha :3!',
      buttonTitle: 'Nhấn để thay đổi lời chào'
    };
  },
  methods: {
    changeGreeting() {
      if (this.greeting === 'Chào cậu nha :3!') {
        this.greeting = 'Chúc ngày mới tốt lành';
        this.buttonTitle = 'Lời chào mới đã được cập nhật';
      } else {
        this.greeting = 'Chào cậu nha :3!';
        this.buttonTitle = 'Nhấn để thay đổi lời chào';
      }
    }
  }
}
</script>