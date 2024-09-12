<template>
    <div class="relative overflow-x-auto">
        <div class="page-header">
            <h3 class="title">{{ title }}</h3>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        O
                    </th>
                    <th scope="col" class="px-6 py-3">
                       Дата выполнения
                    </th>
                    <th scope="col" class="px-6 py-3">
                       Время
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Описание
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Клиент
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Кому
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Статус
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tasks in source"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                    <td class="px-6 py-4">
                        {{ tasks.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ tasks.end_date}}
                    </td>
                    <td class="px-6 py-4">
                        {{ tasks.time }}
                    </td>
                    <td class="px-6 py-4">
                        {{ tasks.description}}
                    </td>
                    <td class="px-6 py-4">
                        {{ tasks.client }}
                    </td>
                    <td class="px-6 py-4">
                        {{ tasks.executor }}
                    </td>
                    <td class="px-6 py-4">
                        {{ tasks.status }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    

</template>

<script lang="ts">
import { Interface } from 'readline';
import { defineComponent, defineProps, ref, computed, onMounted } from 'vue';
import { Tasks } from '../types/tasks';
import { array, string } from 'yup'
import { title } from 'process';

export default defineComponent({
    name: 'Table',
    props: {
        sourceTitle:String,
        sourceType:{},
        sourceData:[]
    },
    setup(props) {

        const sourceData = [props.sourceData]
        const sourceType = ref([props.sourceType])
        const sourceTitle = [props.sourceTitle]

        const title = sourceTitle
        var source:Tasks|any = sourceData[0]

        function detectFields() {
            console.log(sourceData[0].length)
            sourceData[0].forEach((value, index) => {
                source.push(value);
                console.log(value);
                console.log(index);
            });
        }

        onMounted(() => { detectFields() })

        return {
            sourceData,
            sourceType,
            title,
            detectFields,
            source
        }
    }

})

</script>

<stile lang="scss" scoped>

.page_header {

    & .title {
        font-family: Inter;
        font-size: 24px;
        font-weight: 600;
        line-height: 29.05px;
        text-align: left;
    }
}
</stile>