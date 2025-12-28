<!-- Scrollable tiles showing various tech trends on mobile devices and IOT -->
<template>
  <div class="tech-trends-container mt-10">
    <div class="flex justify-between items-center mb-2">
        <h2 class="section-title flex justify-start text-sm">Tech trends</h2>
        <a href="#" class="text-white">See All <span class="text-lg text-amber-300">></span></a>
    </div>
    <div class="tiles-wrapper">
      <div class="trend-tile" v-for="(trend, index) in trends" :key="index">
        <img :src="trend.image" :alt="trend.title" class="trend-image" />
        <h3 class="trend-title text-cyan-400">{{ trend.title }}</h3>
        <p class="trend-description text-gray-800">{{ trend.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../assets/soccer1.webp';
import pic from '../assets/soccer2.webp';
import iso from '../assets/soccer3.webp';
import ball from '../assets/soccer4.webp';


export default {
  name: "TechTrends",
  data() {
    return {
      trends: [
        {
          title: "5G Expansion",
          description: "The rollout of 5G networks is accelerating globally, enabling faster speeds and lower latency for mobile devices and IoT applications.",
          image: img
        },
        {
          title: "AI Integration",
          description: "Artificial Intelligence is being integrated into mobile devices for enhanced user experiences, including voice assistants and predictive analytics.",
          image: pic
        },
        {
          title: "Wearable Technology",
          description: "Wearables like smartwatches and fitness trackers are becoming more sophisticated, offering health monitoring and seamless connectivity.",
          image: iso
        },
        {
          title: "Edge Computing",
          description: "Edge computing is reducing latency by processing data closer to the source, which is crucial for real-time IoT applications.",
          image: ball
        },
        {
          title: "Sustainable Tech",
          description: "There is a growing focus on sustainability in device manufacturing, with companies adopting eco-friendly materials and energy-efficient designs.",
          image: img
        }
      ]
    };
  }
};
</script>

<style scoped>
.tech-trends-container {
  padding: 05px;
  /* transparent background */
  background-color: transparent;
  color: aliceblue;
}
.section-title {
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
}
.tiles-wrapper {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  gap: 15px;
  padding-bottom: 10px;
}
.trend-tile {
  min-width: 250px;
  /* blur background */
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
}
.trend-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}
.trend-title {
  font-size: 18px;
  margin-bottom: 8px;
}
.trend-description {
  font-size: 14px;
  line-height: 1.4;
}
</style>