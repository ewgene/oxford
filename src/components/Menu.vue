<template>
   <div id="Menu" class="h-full px-3 py-4 overflow-y-auto">
      <div class="Logo">
         
      </div>
      <ul class="routes space-y-2 font-medium">
         <li class="link">
            <RouterLink tag="li" to="/tasks"
               class="items-center p-2">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2679_6787)">
                     <path d="M2.2819 4.97477C2.71302 3.7892 3.83976 3 5.10128 3H10.8987C12.1602 3 13.287 3.7892 13.7181 4.97477L14.8194 8.0033C14.9389 8.3319 15 8.67887 15 9.02852V11C15 12.6569 13.6569 14 12 14H4C2.34315 14 1 12.6569 1 11V9.02852C1 8.67887 1.06113 8.3319 1.18062 8.0033L2.2819 4.97477Z" stroke="#08091C" stroke-width="1.5"/>
                     <path d="M1 9H2.58963C3.65383 9 4.68823 9.35155 5.53205 10L5.95658 10.3262C6.52511 10.7631 7.22205 11 7.93907 11V11C8.62056 11 9.28486 10.786 9.8382 10.3882L10.3782 10C11.2827 9.34979 12.3685 9 13.4824 9H15" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_2679_6787">
                        <rect width="16" height="16" fill="white"/>
                     </clipPath>
                  </defs>
               </svg>
               <span class="ms-3">Задачи</span>
            </RouterLink>
         </li>
         <li class="link">
            <RouterLink tag="li" to="/clients"
               class="items-center p-2">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2679_6795)">
                     <path d="M10.6667 2.08667C11.2403 2.23353 11.7487 2.56713 12.1118 3.03487C12.4748 3.50261 12.6719 4.07789 12.6719 4.67C12.6719 5.26211 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25333M8.66667 4.66667C8.66667 6.13943 7.47276 7.33333 6 7.33333C4.52724 7.33333 3.33333 6.13943 3.33333 4.66667C3.33333 3.19391 4.52724 2 6 2C7.47276 2 8.66667 3.19391 8.66667 4.66667Z" stroke="#08091C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                     <path d="M11 12C11 13.6569 8.76142 13 6 13C3.23858 13 1 13.6569 1 12C1 10.3431 3.23858 9 6 9C8.76142 9 11 10.3431 11 12Z" stroke="#08091C" stroke-width="1.5"/>
                     <path d="M12.6524 9.45654C14.0625 9.98701 15 10.9279 15 12.0001C15 13.0149 14.1601 13.1617 12.8747 13.1231" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_2679_6795">
                        <rect width="16" height="16" fill="white"/>
                     </clipPath>
                  </defs>
               </svg>
                  <span class="ms-3">Клиенты</span>
            </RouterLink>
         </li>
         <li class="link">
            <RouterLink tag="li" to="/groups"
               class="items-center p-2">
               <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4C1 2.34315 2.34315 1 4 1H6.75C7.53689 1 8.27786 1.37049 8.75 2V2C9.22214 2.62951 9.96311 3 10.75 3H12C13.6569 3 15 4.34315 15 6V10C15 11.6569 13.6569 13 12 13H4C2.34315 13 1 11.6569 1 10V4Z" stroke="#08091C" stroke-width="1.5"/>
               </svg>
                  <span class="ms-3">Группы</span>
            </RouterLink>
         </li>
         <li class="link">
            <RouterLink tag="li" to="/bills"
               class="items-center p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_2679_6811)">
                        <path d="M2 2H14V13.5776C14 13.7854 13.7964 13.9321 13.5993 13.8664L12.5 13.5C11.5263 13.1754 10.4737 13.1754 9.5 13.5V13.5C8.52633 13.8246 7.47367 13.8246 6.5 13.5V13.5C5.52633 13.1754 4.47367 13.1754 3.5 13.5L2.4007 13.8664C2.20357 13.9321 2 13.7854 2 13.5776V2Z" stroke="#08091C" stroke-width="1.5"/>
                        <path d="M15 2L14 4M2 4L1 2" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M1 2H15" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M4 5H7.5" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M4 9H7.5" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M11 5H10" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M11 9H10" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                     </g>
                     <defs>
                        <clipPath id="clip0_2679_6811">
                           <rect width="16" height="16" fill="white"/>
                        </clipPath>
                     </defs>
                  </svg>
                  <span class="ms-3">Счета</span>
            </RouterLink>
         </li>
         <li class="link">
            <RouterLink tag="li" to="/payments"
               class="items-center p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_2690_6824)">
                        <g clip-path="url(#clip1_2690_6824)">
                           <path d="M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14" stroke="#08091C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M4.88148 13.1259C4.20834 12.7164 3.62245 12.1783 3.15727 11.5423C2.69208 10.9063 2.35672 10.185 2.17032 9.41943C1.98391 8.65386 1.95013 7.85908 2.07088 7.08046C2.19164 6.30183 2.46457 5.55462 2.8741 4.88148" stroke="#08091C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M5.1201 2.73647C5.81134 2.35828 6.57029 2.11994 7.35364 2.03505C8.13699 1.95017 8.92938 2.02041 9.68558 2.24177C10.4418 2.46312 11.147 2.83125 11.7609 3.32514C12.3748 3.81903 12.8855 4.42901 13.2637 5.12024" stroke="#08091C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                     </g>
                     <defs>
                        <clipPath id="clip0_2690_6824">
                           <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        <clipPath id="clip1_2690_6824">
                           <rect width="16" height="16" fill="white"/>
                        </clipPath>
                     </defs>
                  </svg>
                  <span class="ms-3">Платежи</span>
            </RouterLink>
         </li>
         <li class="link">
            <RouterLink tag="li" to="/load"
               class="items-center p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_2690_6844)">
                        <path d="M2 9V14" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M6 8V14" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M10 9V14" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M14 7V14" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M2 6L4.36168 4.81916C5.39302 4.30349 6.60698 4.30349 7.63832 4.81916V4.81916C9.04869 5.52435 10.7521 5.24793 11.8671 4.13293L14 2" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                     </g>
                     <defs>
                     <clipPath id="clip0_2690_6844">
                        <rect width="16" height="16" fill="white"/>
                     </clipPath>
                     </defs>
                  </svg>
                  <span class="ms-3">Преподавательская нагрузка</span>
            </RouterLink>
         </li>
         <li class="link">
            <RouterLink tag="li" to="/salary"
               class="items-center p-2">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2690_6855)">
                     <rect x="1" y="3" width="14" height="11" rx="3" stroke="#08091C" stroke-width="1.5"/>
                     <path d="M1 7L15 7" stroke="#08091C" stroke-width="1.5"/>
                     <path d="M4 11L6 11" stroke="#08091C" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                     <clipPath id="clip0_2690_6855">
                     <rect width="16" height="16" fill="white"/>
                     </clipPath>
                  </defs>
               </svg>
                  <span class="ms-3">Группы</span>
            </RouterLink>
         </li>
      </ul>
   </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { number, string } from 'yup';

export default defineComponent({

    name: "Menu",
/*    props: [
      owner: localStorage(user)
    ],*/

    setup() {
        const links = ref([])

        const router = useRouter()

        return router
    }
    

    
    
})

</script>

<style lang="scss" scoped>
.Logo {
   width: 180px;
   height: 106px;
   background-image: url(../assets/Logo.svg);
   background-position: center;
   background-repeat: no-repeat;
}
.routes {
   font-family: Inter;
   font-size: 14px;
   font-weight: 500;
   line-height: 16px;
   letter-spacing: -0.01em;
   text-align: left;
}
.link {

}

</style>