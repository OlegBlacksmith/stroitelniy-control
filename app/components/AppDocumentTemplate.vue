<script setup lang="ts">
import type { CustomDocument } from "../../shared/models/CustomDocument.model";

interface Props {
  document: CustomDocument;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>{{ document.title }}</h2>
    <div v-for="item in document.items" :key="item.number" class="item">
      <div class="item-header-container">
        <p class="item-number">{{ item.number }}</p>
        <h4 class="item-header">{{ item.header }}</h4>
      </div>
      <div class="paragraph">
        <span class="main-text">{{ item.content }}</span>

        <div v-if="item.points?.length" class="points-container">
          <div
            v-for="point in item.points"
            :key="point.id"
            class="point-w-bullit"
          >
            <p class="bullit"></p>
            <p class="point-text">{{ point.text }}</p>
          </div>
        </div>

        <table v-if="item.table">
          <thead>
            <tr>
              <th
                v-for="(header, index) in item.table.headers"
                :key="index"
                :data-label="header"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in item.table.rows" :key="rowIndex">
              <td
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                :data-label="item.table?.headers[cellIndex] || ''"
              >
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 32px;
  font-family: "Bebas Neue Cyrillic", sans-serif;
  color: #0b5457;
}

.item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
}

.item-header-container {
  font-family: "Bebas Neue Cyrillic", sans-serif;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.item-number {
  font-weight: bold;
  margin: 0;
}

.main-text {
  font-family: "Russo One", sans-serif;
  font-size: 16px;
  display: block;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.point-text {
  font-family: "Russo One", sans-serif;
  font-size: 16px;
  margin: 0;
  line-height: 1.6;
  flex: 1;
}

.points-container {
  margin-top: 1rem;
}

.point-w-bullit {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.bullit {
  flex-shrink: 0;
  font-size: 14px;
  color: #0b5457;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  min-width: 1rem;
  font-family: "Russo One", sans-serif;
}

.bullit::before {
  content: "•";
  font-size: 16px;
}

/* Адаптивная таблица */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th,
td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #dee2e6;
}

th {
  background: #e9ecef;
  font-weight: 600;
}

@media (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  th {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  td {
    border: none;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    content: attr(data-label) ": ";
    position: absolute;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: bold;
  }

  /* Адаптив для точек */
  .point-w-bullit {
    gap: 0.5rem;
  }
}
</style>
