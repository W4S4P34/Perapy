<template>
    <div class="page-container">
        <CartHeading>Cart</CartHeading>
        <CartList/>
    </div>
</template>

<script>
import CartHeading from '@/components/cart/CartHeading'
import CartList from '@/components/cart/CartList'
export default {
    name: 'CartPage',
    components: {
        CartHeading,
        CartList,
    }
}
</script>

<style scoped>

</style>