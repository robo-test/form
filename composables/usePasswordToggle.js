export default function usePasswordToggle() {
    const showPassword = ref(false);

    function togglePasswordVisibility() {
        showPassword.value = !showPassword.value;
    }

    return {
        showPassword,
        togglePasswordVisibility
    };
}