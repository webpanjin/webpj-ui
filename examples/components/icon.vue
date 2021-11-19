<template>
    <svg class="pj-icon" :class="{[`icon-${iconPosition}`]: true}">
        <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
import '../assets/js/svg';
export default {
    name: 'PjIcon',
    props: {
        name: {
            type: String,
            required: false,
            default: '',
            validator(value){
                return true;
            },
        },
        iconPosition: {
            type: String,
            required: false,
            default: 'left',
            validator(value) {
                return (value === 'left') || (value === 'right');
            },
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';
.pj-icon {
    @include inline-flex(center, center);
    width: 1em;
    height: 1em;
}
</style>
