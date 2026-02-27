<script setup lang="ts">
import { DocumentsContent } from "../../data/documents-content";
import type { CustomDocument } from "../../shared/models/CustomDocument.model";

const documents = DocumentsContent;
const selectedDocumentId = ref(1);
const selectedDocument = computed(() =>
  documents.find((doc: CustomDocument) => doc.id === selectedDocumentId.value),
);
</script>

<template>
  <div class="documents-page">
    <div class="wrapper">
      <nav class="documents-nav">
        <button
          v-for="doc in documents"
          :key="doc.id"
          @click="selectedDocumentId = doc.id"
          :class="{ active: selectedDocumentId === doc.id }"
          class="nav-item"
        >
          {{ doc.title }}
        </button>
      </nav>

      <AppDocumentTemplate
        v-if="selectedDocument"
        :document="selectedDocument"
      />
    </div>
  </div>
</template>

<style scoped>
.documents-page {
  display: flex;
  justify-content: center;
  padding: 162px 0;
}

.documents-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.nav-item {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
}
.nav-item.active {
  background: #007bff;
  color: white;
}
</style>
