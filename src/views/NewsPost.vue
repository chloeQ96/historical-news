<template>
  <div class='flex items-center jusitfy-center' v-if="loading">
    <LoadingIndicator />
  </div>
  <div class='grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-t-gray-200 mt-6 mx-6' v-if="!loading">
    <div class='col-span-1 px-4 border-r-gray-200 border-r'>
      <div v-for="(post, index) in news" v-bind:key="post.oclc">
        <PostItem 
          v-if="index%3 === 0"
          :index="index"
          :title="post.title"
          :startYear="post.start_year"
          :endYear="post.end_year"
          :publisher="post.publisher"
          :placeOfPublication="post.place_of_publication"
        />
      </div>
    </div>
    <div class='col-span-1 px-4 border-r-gray-200 border-r'>
      <div v-for="(post, index) in news" v-bind:key="post.oclc">
        <PostItem 
          v-if="index%3 === 1"
          :index="index"
          :title="post.title"
          :startYear="post.start_year"
          :endYear="post.end_year"
          :publisher="post.publisher"
          :placeOfPublication="post.place_of_publication"
        />
      </div>
    </div>
    <div class='col-span-1 px-4'>
      <div v-for="(post, index) in news" v-bind:key="post.oclc">
        <PostItem 
          v-if="index%3 === 2"
          :index="index"
          :title="post.title"
          :startYear="post.start_year"
          :endYear="post.end_year"
          :publisher="post.publisher"
          :placeOfPublication="post.place_of_publication"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PostItem from '@/components/PostItem.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  name: 'NewsPost',
  data() {
    return {
      news : [],
      loading: true,
    }
  },
  async created() {
    try {
      const res = await axios.get(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5`);
      if (res.status === 200) {
        this.news = res.data.items;
        this.loading = false
      }
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    PostItem,
    LoadingIndicator
  }
}
</script>
