<template>
  <div class='text-base py-8 border-b border-b-gray-200'>
    <button class='text-2xl font-bold leading-6 mb-3 capitaliza hover:text-red-800 text-left' type="button" @click="seeMoreDetail">{{ title }}</button>
    <p class='text-sm'>
      <strong>Date covered: </strong> {{ startYear }} - {{ endYear }}
    </p>
    <p class='text-sm'>
      <strong>Publisher:</strong> {{ publisher }}
    </p>
    <p class='text-sm'>
      <strong>Place of publication:</strong> {{ placeOfPublication }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    index: Number,
    title: String,
    startYear: String,
    endYear: String,
    publisher: String,
    placeOfPublication: String,
  },
  methods: {
    seeMoreDetail() {
      return window.location.href=`/detail/${this.index}`
    }
  }
}
</script>
