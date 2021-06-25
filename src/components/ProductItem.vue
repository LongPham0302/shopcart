<template>
  <div>
    <div class="media product">
      <div class="media-left">
        <a href="#">
          <img class="media-object" :src="urlImage" alt="charmander" />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ product.name }}</h4>
        <p>
          {{ product.summary }}
        </p>
        <template v-if="product.canBuy">
          <input v-model="quantity" type="number" value="1" min="1" />
          <a @click.prevent="handelBuyProduct" href="#" class="price">
            {{ formatPrice }}
          </a>
        </template>
        <span v-else class="price">
          {{ product.price }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { toCurrency, validateQuantity } from "./help";
import { NOTI_GREATER_THAN_ONE } from "../constants/config";
import { mapActions, mapState } from "vuex";
export default {
  name: "product-item",
  props: {
    product: { type: Object, default: {} }
  },
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    urlImage() {
      return "/dist/images/" + this.product.image;
    },
    formatPrice() {
      return toCurrency(this.product.price, "USD", "right");
    }
  },
  methods: {
    ...mapActions({ actBuyProduct: "cart/actBuyProduct" }),
    handelBuyProduct() {
      const check = validateQuantity(this.quantity);
      if (check) {
        let data = {
          quantity: parseInt(this.quantity),
          product: this.product
        };
        this.actBuyProduct(data);
      } else {
        this.$notify(NOTI_GREATER_THAN_ONE);
      }
    }
  }
};
</script>