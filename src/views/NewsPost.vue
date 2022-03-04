<template>
  <div class='grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-t-gray-200 mt-6 mx-6'>
    <div class='col-span-1 px-4 border-r-gray-200 border-r'>
      <div v-for="(post, index) in news" v-bind:key="post.oclc">
        <PostItem 
          v-if="index%3 === 0"
          :post="post"
          :index="index"
        />
      </div>
    </div>
    <div class='col-span-1 px-4 border-r-gray-200 border-r'>
      <div v-for="(post, index) in news" v-bind:key="post.oclc">
        <PostItem 
          v-if="index%3 === 1"
          :post="post"
          :index="index"
        />
      </div>
    </div>
    <div class='col-span-1 px-4'>
      <div v-for="(post, index) in news" v-bind:key="post.oclc">
        <PostItem 
          v-if="index%3 === 2"
          :post="post"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from '@/components/PostItem.vue';

export default {
  name: 'NewsPost',
  data() {
    return {
      news : []
    }
  },
  async created() {
    try {
      const res = await axios.get(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5`);
      if (res.status === 200) {
        this.news = res.data.items;
      }
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    PostItem
  }
}
</script>
