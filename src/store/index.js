import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
  state: {
    user: 'Andy Warhol',
    events: [],
    event: {},
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },

  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
        })
        .catch((error) => {
          console.error(error, '🚥');
        });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data);
        })
        .catch((error) => {
          console.error(error, '🚥');
        });
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id === id);
      if (existingEvent) {
        commit('SET_EVENT', existingEvent);
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data);
          })
          .catch((error) => {
            console.error(error, '🚥');
          });
      }
    },
  },
});
