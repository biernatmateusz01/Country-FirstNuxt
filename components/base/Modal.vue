<template>
    <div class="fixed top-0 flex items-center justify-center left-0 w-screen h-screen bg-black z-[60] bg-opacity-30" @click.self="$emit('close-modal')">
        <slot/>
    </div>
</template>