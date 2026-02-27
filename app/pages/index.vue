<script setup lang="ts">
import { ref, computed } from "vue";

import AppStartSection from "~/components/sections/AppStartSection.vue";
import AppServiceSection from "~/components/sections/AppServiceSection.vue";
import AppAboutCompanySection from "~/components/sections/AppAboutCompanySection.vue";
import AppPartnersSection from "~/components/sections/AppPartnersSection.vue";
import AppBimSection from "~/components/sections/AppBimSection.vue";
import AppLawsSection from "~/components/sections/AppLawsSection.vue";
import AppDocumentsSection from "~/components/sections/AppDocumentsSection.vue";

import AppModalWindow from "~/components/AppModalWindow.vue";

type ModalType = "order" | "partner" | null;

const isModalOpen = ref(false);
const modalType = ref<ModalType>(null);

const openModal = (type: ModalType) => {
  if (!type) return;
  modalType.value = type;
  document.body.style.overflow = 'hidden';
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
  modalType.value = null;
};
</script>

<template>
  <div>
    <AppStartSection @open-order="() => openModal('order')" />
    <AppServiceSection @open-order="() => openModal('order')" />
    <AppAboutCompanySection />
    <AppPartnersSection @open-partner="() => openModal('partner')" />
    <AppBimSection />
    <AppLawsSection />
    <AppDocumentsSection />
    <AppModalWindow v-model="isModalOpen" :type="modalType" @close="closeModal" />
  </div>
</template>
