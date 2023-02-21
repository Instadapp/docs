<script setup>
const userInput = ref("");
const history = ref([]);
const loading = ref(false);
const messages = ref([
    {
        "message": "Hi there! How can I help?",
        "type": "apiMessage",
    }
])

const messageListRef = ref(null);
const textAreaRef = ref(null);

// Auto scroll chat to bottom
watch(messages, async () => {
    await nextTick()
    messageListRef.value.scrollTop = messageListRef.value.scrollHeight;

    // if (messages.value.length >= 3) {
    //     messages.value = [[messages.value[messages.value.length - 2].message, messages.value[messages.length - 1].message]]
    // }
});

onMounted(() => {
    textAreaRef.value.focus();
})

// Handle form submission
const handleSubmit = async (e) => {
    if (userInput.value.trim() === "") {
        return;
    }

    loading.value = true
    messages.value.push({ "message": userInput.value, "type": "userMessage", "parsed": await parseMarkdown(userInput.value) })

    try {
        // Send user question and history to API
        const response = await $fetch("/api/chat", {
            method: "POST",
            body: { question: userInput.value, history: history.value },
        });

        messages.value.push({ "message": response.text, "type": "apiMessage", "parsed": await parseMarkdown(response.text) })

    } catch (error) {
        messages.value.push({ "message": "Oops! There seems to be an error. Please try again.", "type": "apiMessage" })
    } finally {
        userInput.value = ""
        loading.value = false
    }

};
</script>


<template>
    <div class="main">
        <div class="cloud">
            <div ref="messageListRef" class="messagelist">
                <div v-for="(message, index) in messages" :key="index" :class="[
                    message.type === 'userMessage' && loading && index === messages.length - 1
                        ? 'usermessagewaiting'
                        : message.type === 'apiMessage'
                            ? 'apimessage'
                            : 'usermessage']">
                    <img v-if="message.type === 'apiMessage'" class="boticon" src="/icon.png" alt="AI" />
                    <img v-else src="/usericon.png" alt="Me" class="usericon" />

                    <ContentRendererMarkdown v-if="message.parsed" :value="message.parsed" />
                    <div v-else> {{ message.message }}</div>
                </div>
            </div>


        </div>

        <div class="center">
            <div class="cloudform">
                <form @submit.prevent="handleSubmit">
                    <input class="textarea" :disabled="loading" ref="textAreaRef" :autoFocus="false" rows="1"
                        maxLength="512" type="text"
                        :placeholder="loading ? 'Waiting for response...' : 'Type your question...'"
                        @keyup.enter.prevent="handleSubmit" v-model="userInput" />
                    <button type="submit" :disabled="loading" class="generatebutton">
                        <div v-if="loading" class="loadingwheel">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>

                        <svg v-else class="svgicon" viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'>
                            </path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
}

.header {
    width: auto;
}

.header p {
    text-align: center;
}

.navlogo,
.navlinks a {
    font-weight: 500;
}

.navlogo {
    font-size: 1.25rem;
    margin-left: 1rem;
}

.navlinks {
    width: 20rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.apptitle {
    font-size: 2.5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
}

.appdescription {
    font-size: 1.1rem;
    margin: 1rem;
}

.link {
    font-weight: 500;
}

.cloudform {
    position: relative;
}

.textarea {
    position: relative;
    resize: none;
    font-size: 1.1rem;
    padding: 1rem 2rem 1rem 2rem;
    width: 75vw;
    border-radius: 0.5rem;
    border: 1px solid #30373d;
    background: #171c27;
    color: #ECECF1;
    outline: none;
}

.textarea:disabled {
    opacity: 0.5;
}

.textarea::placeholder {
    color: #5f6368;
}

.generatebutton {
    position: absolute;
    top: 0.87rem;
    right: 1rem;
    color: rgb(165, 162, 162);
    background: none;
    padding: 0.3rem;
    border: none;
    display: flex;
}

.loadingwheel {
    position: absolute;
    top: 0.2rem;
    right: 0.25rem;
}

.svgicon {
    transform: rotate(90deg);
    width: 1.2em;
    height: 1.2em;
    fill: currentColor;
}

.generatebutton:hover {
    background: #1f2227;
    border-radius: 0.2rem;
}

.generatebutton:disabled {
    opacity: 0.9;
    cursor: not-allowed;
    background: none;
}

.messagelist {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-radius: 0.5rem;
}

.messagelistloading {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
}

.usermessage {
    background: #1a202d;
    padding: 1.5rem;
    color: #ECECF1;
}

.usermessagewaiting {
    padding: 1.5rem;
    color: #ECECF1;
    background: linear-gradient(to left, #1a202d, #1a202d, #1a202d);
    background-size: 200% 200%;
    background-position: -100% 0;
    animation: loading-gradient 2s ease-in-out infinite;
    animation-direction: alternate;
    animation-name: loading-gradient;
}

@keyframes loading-gradient {
    0% {
        background-position: -100% 0;
    }

    100% {
        background-position: 100% 0;
    }
}

.apimessage {
    background: #171c27;
    padding: 1.5rem;
    color: #ECECF1;
    animation: fadein 0.5s;
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.apimessage,
.usermessage,
.usermessagewaiting {
    display: flex;
    --prose-p-margin: 0 !important;
}

.markdownanswer {
    line-height: 1.75;
}

.markdownanswer a:hover {
    opacity: 0.8;
}

.markdownanswer a {
    color: #16bed7;
    font-weight: 500;
}

.markdownanswer code {
    color: #15cb19;
    font-weight: 500;
    white-space: pre-wrap !important;
}

.markdownanswer ol,
.markdownanswer ul {
    margin: 1rem;
}

.boticon,
.usericon {
    margin-right: 1rem;
    border-radius: 0.1rem;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
}

.markdownanswer h1,
.markdownanswer h2,
.markdownanswer h3 {
    font-size: inherit;
}


.center {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem 0;
    flex-direction: column;
}

.cloud {
    width: 75vw;
    height: 65vh;
    background: #171c27;
    border-radius: 0.5rem;
    border: 1px solid #30373d;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pointsnormal {
    width: 90%;
    height: 90%;
}

.pointsdim {
    width: 90%;
    height: 90%;
    opacity: 0.25;
}

.footer {
    color: #5f6368;
    font-size: 0.8rem;
    margin: 1.5rem;
}

.footer a {
    font-weight: 500;
    color: #7a7d81;
}

.footer a:hover {
    opacity: 0.8;
}

/* Mobile optimization */
@media (max-width: 600px) {

    .main {
        padding: 1rem;
        max-height: 90vh;
    }

    .cloud {
        width: 22rem;
        height: 28rem;
    }

    .textarea {
        width: 22rem;
    }

    .topnav {
        border: 1px solid black;
        align-items: center;
        padding: 0.85rem 0.75rem 0.85rem 0.75rem;
    }

    .navlogo {
        font-size: 1.25rem;
        width: 20rem;
    }

    .markdownanswer code {
        white-space: pre-wrap !important;
    }
}</style>