<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventList',

  components: {
    EventCard,
  },

  computed: {
    events() {
      return this.$store.state.events;
    },
  },

  created() {
    this.$store.dispatch('fetchEvents');
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
