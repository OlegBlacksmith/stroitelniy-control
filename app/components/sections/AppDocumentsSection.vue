<script setup lang="ts">
const visible = ref(false)
const index = ref(0)

const images = [
    '/images/documents/doc1.png',
    '/images/documents/doc1.png',
    '/images/documents/doc1.png',
    '/images/documents/doc1.png',
    '/images/documents/doc1.png',
    '/images/documents/doc1.png',
]

const show = (i: number) => {
    index.value = i
    visible.value = true
}
</script>

<template>
    <section id="docsSection" class="docs-section">
        <div class="wrapper">
            <h2 class="section-title">Документы</h2>
            <div class="gallery">
                <div v-for="(img, i) in images" :key="img" class="img-wrapper">
                    <img :src="img" class="thumb" @click="show(i)">
                </div>
            </div>
            <vue-easy-lightbox :visible="visible" :imgs="images" :index="index" @hide="visible = false" />
        </div>
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
    background-color: #E3E3E3;
    border-radius: 12px;
    margin-bottom: 30px;
    transition: background-color 0.3s ease-out, height 0.3s ease-out;
}

.img-wrapper:hover{
    background-color: #9c9c9c;
}

.img-wrapper img {
    width: 332px;
    height: 100%;
    border-radius: 8px;
}

.thumb {
    width: 100%;
}
</style>