<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue'

import { useAdminUserStore } from '@/stores/admin/user'
import { useEventStore } from "@/stores/event";


const formData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'text',
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownList: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownList: ['active', 'inactive']
    },
]

const eventStore = useEventStore()
const adminUserStore = useAdminUserStore()
const route = useRoute()
const router = useRouter()

const userIndex = ref(-1)
const userData = reactive({
    fullname: '',
    role: '',
    status: ''
})

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)

        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status
    }
})

const updateUser = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    eventStore.popupMessage('info', 'Update user successfully')
    router.push({ name: 'admin-users-list' })
}
</script>
<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-2xl font-bold">Update user</div>

            <div class="divider"></div>

            <div class="grid grid-cols-1 gap-2">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-if="form.type === 'text'" v-model="userData[form.field]" type="text"
                        class="input input-bordered w-full" />
                    <select v-if="form.type === 'select'" v-model="userData[form.field]" type="text"
                        class="input input-bordered w-full">
                        <option v-for="item in form.dropdownList">
                            {{ item }}
                        </option>
                    </select>
                </label>
            </div>

            <div class="mt-4 flex justify-end">
                <RouterLink :to="{name: 'admin-users-list'}" class="btn btn-ghost">Back</RouterLink>
                <button class="btn btn-neutral" @click="updateUser()">Update</button>
            </div>
        </div>
    </AdminLayout>
</template>