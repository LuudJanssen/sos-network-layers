<!-- 
  The styled button component creates a nicely styled button to ensure similar usage / style across the application. It
  has a property "text" with the button text and emits the "click" event. 
-->
<template>
    <button @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
    name: 'StyledButton',
    props: {
        text: String
    }
}
</script>

<style scoped>
button {
    top: 0;
    position: relative;
    padding: 8px 16px;
    margin: 4px 8px;
    background-color: white;
    border: none;
    border-bottom: solid 4px rgba(0,0,0,0.2);
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1em;
    transition: all 50ms;
    letter-spacing: 1px;
    color: rgba(0,0,0,0.87);
    cursor: pointer;
}

button:active {
    top: 4px;
    border-bottom-width: 0;
}
</style>
