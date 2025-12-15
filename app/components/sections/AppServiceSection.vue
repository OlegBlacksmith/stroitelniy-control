<script setup lang="ts">
import { ServiceCardContent } from '../../../data/service-card-content'
const items = ServiceCardContent;
</script>

<template>
    <section id="serviceSection" class="service-section">
        <div class="wrapper content">
            <h3 class="section-title">Наши услуги</h3>
            <div class="cards-container">
                <AppServiceCard 
                    v-for="item in items"
                    :id="item.id"
                    :key="item.id"
                    :bg-image="item.bgImage"
                    :title="item.title"
                    :text="item.text"
                    :points="item.points"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.service-section{
    display: flex;
    justify-content: center;
    margin-top: 33px;
    padding: 147px 0;
}

.cards-container{
    display: flex;
    flex-wrap: wrap;
    gap: 115px;
    margin-top: 76px;
    justify-content: center
}
</style>