<script setup lang="ts">
import { SSE } from 'sse.js'
const loading = ref(false)
const query = ref("")
const answer = ref('')
const answerInMD = ref()
watch(answer, async () => {
    answerInMD.value = await parseMarkdown(answer.value.replaceAll('""', '"'))
})

let eventSource: SSE;
const submit = async () => {
    answer.value = ''

    if (loading.value) {
        return;
    }

    if (eventSource) {
        eventSource.close()
    }

    loading.value = true


    eventSource = new SSE(`api/search`, {
        headers: {
            'Content-Type': 'application/json',
        },
        payload: JSON.stringify({ query: query.value }),
    })

    eventSource.addEventListener('error', console.error)
    eventSource.addEventListener('message', (e: any) => {
        try {

            if (e.data === '[DONE]') {
                loading.value = false
                return
            }

            const completionResponse = JSON.parse(e.data)
            const [{ text }] = completionResponse.choices

            answer.value = (answer.value ?? '') + text
        } catch (err) {
            console.log(err)
        }
    })

    eventSource.stream()

}
</script>
<template>
    <div>
        <input type="text" placeholder="Ask me anything about Instadapp" style="width:100%; padding: 10px;" v-model="query"
            @keyup.enter.prevent="submit">

        <div style="margin-top: 20px;">
            {{ loading ? 'Thinking...' : '' }}
        </div>

        <div v-if="answerInMD" style="background-color: #22293a;width:100%; padding: 10px;margin-top: 20px;">
            <ContentRendererMarkdown :value="answerInMD" />
        </div>
    </div>
</template>