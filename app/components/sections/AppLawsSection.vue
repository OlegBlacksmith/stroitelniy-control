<script setup lang="ts">
import { AccordionItems } from '../../../data/accordion-items-content'
const laws = AccordionItems;
</script>

<template>
    <section id="lawSection" class="law-section">
        <div class="wrapper">
            <h2 class="section-title">Законы и акты</h2>
            <div class="accordion-items-container">
                <AppAccordion 
                    v-for="l in laws" 
                    :id="l.id" 
                    :key="l.id" 
                    :title="l.title" 
                    :text="l.text" 
                    :link="l.link"
                    :update="l.update" />
            </div>

        </div>
    </section>
</template>

<style scoped>
.accordion-items-container{
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 49px;
}
.law-section {
    display: flex;
    justify-content: center;
    padding: 162px 0;
}
</style>