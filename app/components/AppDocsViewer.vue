<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, watchEffect } from "vue";

interface Props {
  modelValue: boolean;
  images: string[];
  initialIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

const currentIndex = ref(0);
const scale = ref(1);
const translateX = ref(0);
const translateY = ref(0);
const isDragging = ref(false);
const dragStart = ref({ x: 0, y: 0 });

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

const currentImage = computed(() => props.images[currentIndex.value] ?? "");
const canPrev = computed(() => currentIndex.value > 0);
const canNext = computed(() => currentIndex.value < props.images.length - 1);
const imageCount = computed(() => props.images.length);

const resetTransform = () => {
  scale.value = 1;
  translateX.value = 0;
  translateY.value = 0;
};

const prevImage = () => {
  if (canPrev.value) {
    currentIndex.value--;
    resetTransform();
  }
};

const nextImage = () => {
  if (canNext.value) {
    currentIndex.value++;
    resetTransform();
  }
};

const zoomIn = () => {
  scale.value = Math.min(scale.value + 0.25, 3);
};

const zoomOut = () => {
  scale.value = Math.max(scale.value - 0.25, 0.5);
};

const onKeydown = (e: KeyboardEvent) => {
  if (!visible.value) return;
  switch (e.key) {
    case "Escape":
      visible.value = false;
      break;
    case "ArrowLeft":
      prevImage();
      break;
    case "ArrowRight":
      nextImage();
      break;
  }
};

const getClientPos = (e: MouseEvent | TouchEvent): { x: number; y: number } => {
  if (e instanceof TouchEvent && e.touches.length > 0) {
    return {
      x: e.touches[0]!.clientX,
      y: e.touches[0]!.clientY,
    };
  }
  return {
    x: (e as MouseEvent).clientX,
    y: (e as MouseEvent).clientY,
  };
};

const onDragStart = (e: MouseEvent | TouchEvent) => {
  e.preventDefault();
  isDragging.value = true;
  const pos = getClientPos(e);
  dragStart.value = pos;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value || scale.value === 1) return;

  const pos = getClientPos(e);
  translateX.value += pos.x - dragStart.value.x;
  translateY.value += pos.y - dragStart.value.y;
  dragStart.value = pos;
};

const onDragEnd = () => {
  isDragging.value = false;
};

// ФИКС: синхронизация индекса при открытии/изменении props
watchEffect(() => {
  if (visible.value && props.initialIndex !== undefined) {
    currentIndex.value = props.initialIndex;
    resetTransform();
  }
});

watch(() => props.initialIndex, (newIndex) => {
  if (newIndex !== undefined && visible.value) {
    currentIndex.value = newIndex;
    resetTransform();
  }
});

onMounted(() => document.addEventListener("keydown", onKeydown));
onUnmounted(() => document.removeEventListener("keydown", onKeydown));
</script>

<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="docs-viewer-overlay"
      @click.self="visible = false"
    >
      <div class="docs-viewer-container">
        <div class="actions-container">
          <button
            @click.stop="zoomOut"
            class="action-btn"
            :disabled="scale <= 0.5"
          >
            -
          </button>
          <button
            @click.stop="zoomIn"
            class="action-btn"
            :disabled="scale >= 3"
          >
            +
          </button>
          <button @click.stop="resetTransform" class="action-btn">1:1</button>
        </div>

        <button @click.stop="visible = false" class="action-btn close">
          ×
        </button>
        <!-- Навигация -->
        <button
          v-if="canPrev"
          class="nav-btn prev"
          @click.stop.prevent="prevImage"
          aria-label="Предыдущий"
          type="button"
        >
          ‹
        </button>

        <!-- Изображение -->
        <div
          class="image-container"
          @mousedown="onDragStart"
          @mousemove="onDrag"
          @mouseup="onDragEnd"
          @mouseleave="onDragEnd"
          @touchstart="onDragStart"
          @touchmove.prevent="onDrag"
          @touchend="onDragEnd"
          @dblclick="scale === 1 ? zoomIn() : resetTransform()"
          @wheel="
            (e) => {
              e.preventDefault();
              if (scale > 1) zoomOut();
              else zoomIn();
            }
          "
        >
          <img
            :src="currentImage"
            :style="{
              transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
            }"
            class="viewer-image"
            loading="eager"
          />

          <div v-if="imageCount > 1" class="image-counter">
            {{ currentIndex + 1 }} / {{ imageCount }}
          </div>
        </div>

        <button
          v-if="canNext"
          class="nav-btn next"
          @click.stop.prevent="nextImage"
          aria-label="Следующий"
          type="button"
        >
          ›
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.docs-viewer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.docs-viewer-container {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  height: 100%;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: grab;
  height: 100%;
  position: relative;
  pointer-events: none;
}

.viewer-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.1s ease;
  user-select: none;
  pointer-events: all;
}

.nav-btn {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  z-index: 1000;
  pointer-events: all;
}

.action-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
  z-index: 1000;
  pointer-events: all;
}

.nav-btn:hover,
.action-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.prev {
  top: 50%;
  left: 20%;
}

.next {
  top: 50%;
  right: 20%;
}

.actions-container {
  display: flex;
  gap: 10px;
  z-index: 1000;
  position: absolute;
  top: -3%;
  left: 32%;
}

.action-btn {
  font-size: 18px;
  width: 45px;
  height: 45px;
}

.close {
  background: #ff4444;
  position: absolute;
  top: -3%;
  right: 32%;
}

.close:hover {
  background: #ff6666;
}

.image-counter {
  font-size: 12px;
  padding: 6px 12px;
  color: white;
}

@media (max-width: 767px) {
  .nav-btn,
  .action-btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  .viewer-actions {
    gap: 5px;
  }
  .image-counter {
    font-size: 12px;
    padding: 6px 12px;
  }
  .prev {
    top: 50%;
    left: 0;
  }

  .next {
    top: 50%;
    right: 0;
  }

  .nav-btn:hover {
    background: rgb(32, 32, 32);
  }

  .close {
    top: 5%;
    right: 0;
  }

  .actions-container {
    top: 5%;
    left: 0;
  }
}
</style>
