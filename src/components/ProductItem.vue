<template>
  <div>
    <div class="media product">
      <div class="media-left">
        <a href="#">
          <img
            class="media-object"
            src="/dist/images/aplusautomation.jpg"
            alt="charmander"
          />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">aplusautomation</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
          asperiores veniam repellat unde debitis quisquam magnam magni ut
          deleniti!
        </p>
        <input name="quantity-product-1" type="number" value="1" min="1" />
        <a data-product="1" href="#" class="price"> 12 USD </a>
      </div>
    </div>
    <div class="media product">
      <div class="media-left">
        <a href="#">
          <img
            class="media-object"
            src="/dist/images/aplus-media.jpg"
            alt="charmander"
          />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">aplus media</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
          asperiores veniam repellat unde debitis quisquam magnam magni ut
          deleniti!
        </p>
        <span class="price"> 12 USD</span>
      </div>
    </div>
    <div class="media product">
      <div class="media-left">
        <a href="#">
          <img
            class="media-object"
            src="/dist/images/robo_fig_combo.jpg"
            alt="charmander"
          />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">robo fig combo</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
          asperiores veniam repellat unde debitis quisquam magnam magni ut
          deleniti!
        </p>
        <input name="quantity-product-1" type="number" value="1" min="1" />
        <a data-product="1" href="#" class="price"> 12 USD </a>
      </div>
    </div>
    <div class="media product">
      <div class="media-left">
        <a href="#">
          <img
            class="media-object"
            src="/dist/images/target-leap-frog.jpg"
            alt="target-leap-frog"
          />
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">target leap frog</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
          asperiores veniam repellat unde debitis quisquam magnam magni ut
          deleniti!
        </p>
        <input name="quantity-product-1" type="number" value="1" min="1" />
        <a data-product="1" href="#" class="price"> 12 USD </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-item"
};
</script>