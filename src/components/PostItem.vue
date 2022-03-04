<template>
  <div class='text-base py-8 border-b border-b-gray-200'>
    <button class='text-2xl font-bold leading-6 mb-3 capitaliza hover:text-red-800 text-left' type="button" @click="seeMoreDetail">{{ post.title }}</button>
    <p class='text-sm'>
      <strong>Date covered: </strong> {{ post.start_year }} - {{ post.end_year }}
    </p>
    <p class='text-sm'>
      <strong>Publisher:</strong> {{ post.publisher }}
    </p>
    <p class='text-sm'>
      <strong>Place of publication:</strong> {{ post.place_of_publication }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object,
    index: Number,
  },
  methods: {
    seeMoreDetail() {
      return window.location.href=`/detail/${this.index}`
    }
  }
}
</script>
