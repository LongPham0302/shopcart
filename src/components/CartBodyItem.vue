<template>
  <tr>
    <th scope="row">{{ index }}</th>
    <td width="25%">{{ product.name }}</td>
    <td>{{ FormatPrice }}</td></td>
    <td>
      <input v-model=" item.quantity " type="number" value="1" min="1" />
    </td>
    <td>
      <strong>{{ FormatTotal }}</strong>
    </td>
    <td>
      <a class="label label-info update-cart-item" href="#" data-product=""
        >Update</a
      >
      <a class="label label-danger delete-cart-item" href="#" data-product=""
        >Delete</a
      >
    </td>
  </tr>
</template>
<script>
import { toCurrency, validateQuantity } from "./help";
export default {
  name: "cart-body-item",
  props: {
    item: { type: Object, default: null },
    index: Number
  },
  computed: {
    product() {
      return this.item.product;
    },
    FormatPrice() {
      return toCurrency(this.product.price, "USD", "right");
    },
    FormatTotal() {
      return toCurrency(
        this.product.price * this.item.quantity,
        "USD",
        "right"
      );
    }
  },
  methods: {}
};
</script>