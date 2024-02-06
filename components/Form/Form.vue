<template>
  <main>
    <FormHeadline :title="'Registration Form'" class="md:py-10 py-5"/>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-6">
      <div class="col-span-full" :class="{'text-red-500 border-red-500': errors.email}">
        <label for="email" class="hidden">
          Email
        </label>
        <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            :class="inputClass"
            placeholder="Email"
        />
        <span :class="{'text-red-500': errors.email}">{{ errors.email }}</span>
      </div>

      <div class="col-span-full md:col-span-1">
        <label for="firstName" class="hidden">
          Name
        </label>
        <input
            v-model="firstName"
            type="text"
            id="firstName"
            name="firstName"
            :class="inputClass"
            placeholder="First name"
        />
        <span :class="{'text-red-500': errors.firstName}">{{ errors.firstName }}</span>
      </div>

      <div class="col-span-full md:col-span-1">
        <label for="secondName" class="hidden">
          Name
        </label>
        <input
            v-model="secondName"
            type="text"
            id="secondName"
            name="secondName"
            :class="inputClass"
            placeholder="Second name"
        />
        <span :class="{'text-red-500': errors.secondName}">{{ errors.secondName }}</span>
      </div>

      <div class="col-span-full md:col-span-1">
        <select name="language" id="language" :class="inputClass">
          <option disabled selected value="a">Language</option>
          <option value="">Slovak</option>
        </select>
        <span :class="{'text-red-500': errors.language}">{{ errors.language }}</span>
      </div>

      <div class="col-span-full md:col-span-1">
        <!--        <label for="country" class="hidden">Country</label>-->
        <select name="country" id="country" :class="inputClass">
          <option selected disabled value="">Country</option>
          <option v-for="(item, index) in countries" :key="index" :value="item.name">{{ item.name }}</option>
        </select>
        <span :class="{'text-red-500': errors.country}">{{ errors.country }}</span>
      </div>

      <div class="col-span-full md:col-span-1 relative">
        <label for="password" class="hidden">Password</label>
        <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            name="password"
            :class="inputClass"
            placeholder="Password"
        />
        <img @click="togglePasswordVisibility" src="~/assets/svg/passwordVisibility.svg" alt=""
             class="absolute top-0 right-5 translate-y-1/2">

        <span :class="{'text-red-500': errors.password}">{{ errors.password }}</span>
      </div>

      <div class="col-span-full md:col-span-1 relative">
        <label for="confirmPassword" class="hidden">Confirm Password</label>
        <input
            v-model="passwordConfirm"
            :type="showPassword ? 'text' : 'password'"
            id="confirmPassword"
            name="confirmPassword"
            :class="inputClass"
            placeholder="Confirm Password"
        />
        <img @click="togglePasswordVisibility" src="~/assets/svg/passwordVisibility.svg" alt=""
             class="absolute top-0 right-5 translate-y-1/2">

        <span :class="{'text-red-500': errors.passwordConfirm}">{{ errors.passwordConfirm }}</span>
      </div>

      <p>Private Profile</p>
      <p class="text-end">on/off</p>
      <span :class="{'text-red-500': errors.privateProfile}">{{ errors.privateProfile }}</span>

      <hr class="col-span-full my-3">

      <div class="col-span-full flex gap-8 flex-wrap md:flex-nowrap">
        <button type="submit"
                class="text-white font-bold basis-full md:basis-2/5 md:order-none order-1 rounded-xl bg-gradient-to-r from-button-primary-gradient-from to-button-primary-gradient-to py-4 hover:from-button-primary-gradient-to hover:to-button-primary-gradient-from">
          Sign up
        </button>

        <div class="flex justify-center items-center gap-4">
          <div class="bg-input-primary-border w-[20px] h-[20px] rounded-md"></div>
          <p class=" text-md">Creating an account means you’re okay with our Privacy Policy.</p>
          <span :class="{'text-red-500': errors.privacyPolicy}">{{ errors.privacyPolicy }}</span>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup>
import {useForm} from 'vee-validate';
import * as yup from 'yup';

const {defineField, errors} = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required().min(6)
    //TODO validation of remaining fields
  })
});
const [email] = defineField('email');
const [firstName] = defineField('firstName');
const [secondName] = defineField('secondName');
const [password] = defineField('password');
const [passwordConfirm] = defineField('passwordConfirm');
const [privateProfile] = defineField('privateProfile');
const [privacyPolicy] = defineField('privacyPolicy');

const {showPassword, togglePasswordVisibility} = usePasswordToggle();

const inputClass = ref('px-5 py-3 bg-input-primary-background border border-input-primary-background hover:border-input-primary-border hover:outline-none rounded-md w-full')

const handleSubmit = async (e) => {
  //TODO handle validation, pending states, errors, ...
  await navigateTo({path: '/success'})
}

const {data: countries, error} = await useFetch('https://restcountries.com/v2/all?fields=name')
//TODO handle error
</script>