<template>
  <tfoot id="my-cart-footer">
    <!-- CART FOOTER -->
    <tr></tr>
    <tr>
      <td colspan="4">
        There are <b>{{ footIfor.countItems }}</b> items in your shopping cart.
      </td>
      <td colspan="2" class="total-price text-left">
        {{ formatPrice() }}
      </td>
    </tr>
  </tfoot>
</template>
<script>
import { mapGetters } from "vuex";
import { toCurrency, validateQuantity } from "./help";

export default {
  name: "cart-footer",
  computed: {
    ...mapGetters({ footIfor: "cart/footIfor" })
  },
  methods: {
    formatPrice() {
      return toCurrency(this.footIfor.totalPrices, "USD", "right");
    }
  }
};
</script>