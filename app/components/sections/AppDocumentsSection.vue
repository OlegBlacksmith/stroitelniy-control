<script setup lang="ts">
import { ref } from 'vue'
import AppDocsViewer from '~/components/AppDocsViewer.vue' // импорт

const images = [
  "/images/documents/doc1.png",
  "/images/documents/doc2.png",
  "/images/documents/doc3.png",
  "/images/documents/doc4.png",
]

const showLightbox = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  showLightbox.value = true
}

const closeLightbox = () => {
  showLightbox.value = false
  currentImageIndex.value = 0 // опционально: сброс индекса
}
</script>

<template>
  <section id="docsSection" class="docs-section">
    <div class="wrapper">
      <h2 class="section-title">Документы</h2>
      
      <div class="gallery">
        <div 
          v-for="(img, i) in images" 
          :key="img" 
          class="img-wrapper" 
          @click="openLightbox(i)"
        >
          <img :src="img" class="thumb" loading="lazy" />
        </div>
      </div>
    </div>
    
    <!-- ПОДКЛЮЧЕНИЕ LIGHTBOX -->
    <AppDocsViewer
      v-model="showLightbox"
      :images="images"
      :initial-index="currentImageIndex"
      @close="closeLightbox"
    />
  </section>
</template>

<style scoped>
.docs-section {
  display: flex;
  justify-content: center;
  padding: 162px 0;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 60px;
  height: max-content;
}

.img-wrapper {
  padding: 15px 10px;
  background-color: #e3e3e3;
  border-radius: 12px;
  margin-bottom: 30px;
  transition: background-color 0.3s ease-out, height 0.3s ease-out;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.img-wrapper:hover {
  background-color: #9c9c9c;
}

.img-wrapper img {
  width: 332px;
  height: 100%;
  border-radius: 8px;
}

.thumb {
  width: 100%;
  height: auto;
}

@media (max-width: 767px) {
  .docs-section {
    padding: 162px 0 62px 0;
  }
  
  .wrapper {
    max-width: calc(100vw - 40px);
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .gallery {
    justify-content: center !important;
    gap: 25px !important;
    padding: 60px 0 0 0;
  }
}

@media (max-width: 479px) {
  .docs-section {
    padding: 62px 0;
  }
  
  .wrapper {
    max-width: calc(100vw - 30px);
    padding: 0 15px;
  }
  
  .gallery {
    gap: 20px !important;
  }
}

@media (max-width: 359px) {
  .wrapper {
    max-width: calc(100vw - 20px);
    padding: 0 10px;
  }
  
  .gallery {
    gap: 18px !important;
  }
}
</style>


