<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      auto-reopen="true"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="emitCloseEvent"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-center">
                <div class="icon-wrapper">
                  <ExclamationCircleIcon
                    class="modal-icon"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Thank you
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      <slot>Default</slot>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="confirm-btn" @click="emitCloseEvent">
                Got it
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";

export default {
  name: "Modal",
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationCircleIcon,
  },
  setup() {
    const open = ref(true);

    return {
      open,
    };
  },
  methods: {
    emitCloseEvent() {
      this.$emit('closingModal');
    }
  }
};
</script>

<style scoped>
.icon-wrapper {
  /* Margin */
  @apply mx-auto;

  /* Flex */
  @apply flex-shrink-0 flex items-center justify-center;

  /* Size */
  @apply h-12 w-12;

  /* Rounding */
  @apply rounded-full;

  /* Responsive */
  @apply sm:mx-0 sm:h-10 sm:w-10;

}
.modal-icon {
  /* Size */
  width: 72px;
  height: 72px;

  color: rgba(86, 128, 233, 1);
}

.confirm-btn {
  /* Size */
  @apply w-32;

  /* Flex */
  @apply inline-flex justify-center;

  /* Rounding */
  @apply rounded-md;

  /* Border */
  @apply border border-transparent;

  /* Shadow */
  @apply shadow-sm;

  /* Padding */
  @apply px-4 py-2;

  /* Text */
  @apply text-base font-medium text-white;

  /* Background */
  background-color: rgba(86, 128, 233, 1);

  /* Responsive */
  @apply sm:ml-3 sm:w-auto sm:text-sm;
}
</style>
