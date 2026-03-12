<script setup lang="ts">
import { ref, computed, reactive, watch } from "vue";
import type Email from "../../shared/models/Email.model";
import type EmailResponse from "../../shared/models/EmailResponse.model";

const props = defineProps<{
  modelValue: boolean;
  type: "order" | "partner" | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "close"): void;
}>();

const form = reactive({
  name: "",
  phone: "",
  email: "",
  communication: "Phone" as "Phone" | "Email",
});

const agree = ref(false);
const showSuccess = ref(false);

const emailAddress = computed(() => {
  return props.type === "partner"
    ? "info@stroy-kontrol-ufa.ru"
    : "info@stroy-kontrol-ufa.ru";
});

const title = computed(() => {
  return props.type === "partner" ? "Стать партнером" : "Получить консультацию";
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      Object.assign(form, {
        name: "",
        phone: "",
        email: "",
        communication: "Phone",
      });
      agree.value = false;
      showSuccess.value = false;
    }
  },
);

const close = () => {
  emit("update:modelValue", false);
  emit("close");
};

const sendForm = async () => {
  if (!agree.value) {
    alert("Подтвердите согласие с политикой конфиденциальности!");
    return;
  }

  if (!form.name.trim() || !form.phone.trim()) {
    alert("Заполните ФИО и телефон!");
    return;
  }

  const emailData: Email = {
    name: form.name.trim(),
    email: form.email.trim(),
    connectionType: form.communication,
    phone: form.phone.trim(),
  };

  try {
    const rawResponse = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: emailData,
        emailType: props.type,
      }),
    });

    if (!rawResponse.ok) {
      throw new Error(`HTTP ${rawResponse.status}`);
    }

    const response: EmailResponse = await rawResponse.json();

    if (response.success) {
      console.log("✅ Форма отправлена на:", emailAddress.value);
      showSuccess.value = true;
    } else {
      throw new Error(response.error || "Неизвестная ошибка сервера");
    }
  } catch (error: any) {
    console.error("❌ Ошибка отправки:", error);
    alert(`Ошибка отправки: ${error.message}`);
  }
};
</script>

<template>
  <teleport to="body">
    <div v-if="props.modelValue" class="modal-backdrop" @click.self="close">
      <div class="modal">
        <div class="header-container">
          <h2 class="modal-title">{{ title }}</h2>
          <button class="close-icon-button">
            <img src="~/assets/icons/close.svg" alt="X" @click="close" />
          </button>
        </div>

        <div class="main-container" v-if="!showSuccess">
          <div class="input">
            <p class="label">ФИО</p>
            <input
              class="basic"
              type="text"
              v-model="form.name"
              placeholder="Ваше имя"
            />
          </div>

          <div class="input">
            <p class="label">Телефон</p>
            <input
              class="basic"
              type="tel"
              v-model="form.phone"
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div class="input">
            <p class="label">Почта</p>
            <input
              class="basic"
              type="email"
              v-model="form.email"
              placeholder="example@mail.com"
            />
          </div>

          <div class="select-container">
            <p class="label">Способ связи</p>
            <select
              v-model="form.communication"
              name="communication"
              id="communication-select"
              class="basic"
            >
              <option value="Phone">Телефон</option>
              <option value="Email">Почта</option>
            </select>
          </div>

          <label class="consent">
            <input class="agree" type="checkbox" v-model="agree" />
            <span class="custom-radio">
              Подтверждаю, что ознакомлен с
              <NuxtLink href="/documents" class="confidential-link">
                политикой конфиденциальности и обработки персональных данных,
              </NuxtLink>
              согласен на обработку.
            </span>
          </label>
        </div>

        <div v-else class="success-container">
          <img
            src="~/assets/images/gif/paper-letter.gif"
            alt="Заявка отправлена!"
            class="success-sticker"
            width="200"
            height="133"
            loading="eager"
          />
          <p class="success-title">Заявка отправлена</p>
          <p class="success-text">
            Спасибо! Мы свяжемся с Вами в ближайшее время.
          </p>
          <!-- <button class="send-button" @click="close">Закрыть</button> -->
        </div>

        <button
          v-if="!showSuccess"
          class="send-button"
          @click="sendForm"
          :disabled="!agree"
        >
          отправить
        </button>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px); /* для Safari */
}

.modal {
  background: #fff;
  padding: 40px 50px 67px 50px;
  max-width: 678px;
  width: 100%;
  border-radius: 8px;
}

.header-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-icon-button {
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: unset;
  transition: background-color 0.3s;
}

.close-icon-button img {
  width: 20px;
}

.close-icon-button:hover {
  background-color: #e7e7e7;
}

.modal-title {
  font-size: 24px;
  color: rgba(6, 46, 48, 1);
}

.main-container {
  padding-top: 30px;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  color: rgba(6, 46, 48, 1);
}

.input,
.select-container {
  position: relative;
  padding-bottom: 24px;
  width: 100%;
}

.label {
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  color: rgba(6, 46, 48, 1);
  font-weight: 400;
}

.basic {
  width: 100%;
  height: 32px;
  border-radius: 10px;
  border-width: 0.5px;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  display: block;
}

select {
  width: 100%;
  height: 36px;
  border-radius: 10px;
  border-width: 0.5px;
  box-sizing: border-box;
  display: block;
}

.agree {
  border: none;
  background-color: black;
  transform: scale(1.4);
  margin-right: 8px;
}

.consent {
  display: flex;
  align-items: center;
  padding-bottom: 9px;
}

.consent span {
  text-transform: uppercase;
  font-size: 9px;
}

h3 {
  padding-bottom: 4px;
}

.send-button {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: rgba(45, 86, 236, 1);
  color: #fff;

  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  line-height: 115%;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: -3px 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: #4c70f4;
}

.success-container {
  padding-top: 30px;
  text-align: center;
}

.success-title {
  font-size: 20px;
  font-weight: 600;
  color: rgba(6, 46, 48, 1);
  padding-bottom: 10px;
}

.success-text {
  font-size: 14px;
  color: rgba(6, 46, 48, 0.8);
  padding-bottom: 20px;
}

.confidential-link {
  text-decoration-line: underline;
}

.success-title {
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 24px;
}

.success-text {
  font-family: "Russo One", sans-serif;
  font-size: 16px;
}
</style>
