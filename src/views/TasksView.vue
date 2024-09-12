<template>
    <Table :sourceData="tasks" :sourceType=Tasks :sourceTitle="'Задачи'" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Tasks } from '../types/tasks';
import Table from '../components/Table.vue';


var tasks:Tasks[]|string[] = []

onMounted(() => {
    for(let i:number=0; i<7; i++) {
        let task:Tasks|any = {
            id: i,
            end_date: "3 апр. 2024 г.",
            time: "9:45",
            description: "Напоминать Ивану оплачивать наш Ростелеком раз в месяц Привет. я платил уже в мае (см. вложение). только счета мне присылай раз в месяц, или просто напоминай об оплате (ростелеком, лицевой счет 850000178605)",
            client: "Николин А.",
            executor: "Иваненко Б.",
            status: "Opened"
        }
        tasks.push(task)
    }
    return tasks
})


</script>