<template>
  <div class='flex items-center jusitfy-center' v-if="loading">
    <LoadingIndicator />
  </div>
  <div class='my-10' v-if="!loading">
    <router-link to="/" class='text-sky-500 hover:underline'>
    {{` < `}}
    Back to Home
    </router-link>
    <div class='text-5xl font-bold my-8'>
      {{ news.title }}
    </div>
    <table>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Titles</td>
        <td class="pb-3">
          <div v-for="item in news.alt_title" v-bind:key="item">
            {{ item }}
          </div>
        </td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Publisher</td>
        <td class="pb-3">{{ news.publisher }}</td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Description</td>
        <td class="pb-3">
          <div v-for="item in news.note" v-bind:key="item">
            {{ item }}
          </div>
        </td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Dates covered</td>
        <td class="pb-3">{{ news.start_year }} - {{ news.end_year }}</td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Subjects</td>
        <td class="pb-3">
          <div v-for="item in news.subject" v-bind:key="item">
            {{ item }}
          </div>
        </td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Resource</td>
        <td class="pb-3">{{ news.title }}</td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Language</td>
        <td class="pb-3">
          <div v-for="item in news.language" v-bind:key="item">
            {{ item }}
          </div>
        </td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>types</td>
        <td class="pb-3">
          <div v-for="(item) in [...new Set(news.holding_type)]" v-bind:key="item">
            <p>{{ item }}</p>
          </div>
        </td>
      </tr>
      <tr>
        <td class='font-bold text-right align-baseline pr-10 pb-3'>Frequency</td>
        <td class="pb-3">{{ news.frequency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  name: 'NewsDetail',
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
        let id = this.$route.path.split('/detail/')[1]
        this.news = res.data.items[id];
        this.loading = false
      }
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    LoadingIndicator
  }
}
</script>
