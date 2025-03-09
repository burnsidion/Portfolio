<template>
    <div class="min-h-screen flex flex-col items-center px-6 sm:px-10 lg:px-20 text-gray-200 pt-24 pb-32 gap-12">

        <div v-if="successMessage" class="text-green-500 text-center mt-4">{{ successMessage }}</div>
        <div v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</div>
        <!-- Header -->
        <div class="text-center max-w-3xl">
            <LetterPullup words="Contact Me" :delay="0.05" class="text-4xl font-bold text-gray-100 mb-4" />
            <p class="text-gray-400 text-lg">
                Get in touch or shoot me an email directly at
                <span class="font-semibold text-white">your-email@example.com</span>
            </p>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="w-full max-w-lg mt-8 space-y-6">
            <div>
                <label class="block text-sm font-medium text-gray-300" for="name">Name</label>
                <input id="name" v-model="form.name" type="text" placeholder="Name"
                    class="w-full p-3 border border-gray-500 text-white bg-transparent rounded-md focus:bg-black focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-300" for="email">Email</label>
                <input id="email" v-model="form.email" type="email" placeholder="Email"
                    class="w-full p-3 border border-gray-500 text-white bg-transparent rounded-md focus:bg-black focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-300" for="message">Message</label>
                <textarea id="message" v-model="form.message" placeholder="Message" rows="5"
                    class="w-full p-3 border border-gray-500 text-white bg-transparent rounded-md focus:bg-black focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                    required></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isSubmitting"
                class="w-full bg-white text-black py-3 px-6 rounded-md font-medium transition-all duration-300 hover:bg-gray-200">
                {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
        </form>

        <!-- Social Links Footer -->
        <div class="flex flex-col space-x-6 mt-8">
            <router-link to="/"
                class="group flex space-x-2 text-left text-lg font-medium transition duration-300 hover:text-gray-400">
                <span>Back To Home Page</span>
                <span class="relative inline-block h-5 w-5">
                    <div class="animate-bounce-horizontal absolute inset-0">➝</div>
                </span>
            </router-link>
            <Footer
                class="mx-auto hidden w-full max-w-2xl pb-6 pt-6 text-center text-sm text-gray-300 opacity-70 hover:text-white md:block" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router';
import emailjs from 'emailjs-com';

import LetterPullup from '../components/LetterPullup.vue';

const router = useRouter();

const form = ref({
    name: '',
    email: '',
    message: ''
});

const successMessage = ref("");
const errorMessage = ref("");
const isSubmitting = ref(false);


const submitForm = async () => {
    if (isSubmitting.value) return;

    form.value.name = form.value.name.trim();
    form.value.email = form.value.email.trim();
    form.value.message = form.value.message.trim();


    if (!form.value.name || !form.value.email || !form.value.message) {
        errorMessage.value = "Please fill out all fields.";
        return;
    }

    isSubmitting.value = true;
    errorMessage.value = "";
    successMessage.value = "";

    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.value.name,
                from_email: form.value.email,
                to_name: "Your Name",
                message: form.value.message
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        if (response.status === 200) {
            successMessage.value = "Message sent successfully!";
            form.value = { name: '', email: '', message: '' };
        } else {
            throw new Error("Unexpected response from EmailJS");
        }
    } catch (error) {
        console.error("Error sending email:", error);
        errorMessage.value = "Failed to send message. Please try again later.";
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
@keyframes bounce-horizontal {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(6px);
    }

    100% {
        transform: translateX(0);
    }
}

.animate-bounce-horizontal {
    display: inline-block;
    animation: bounce-horizontal 1s infinite ease-in-out;
}
</style>
