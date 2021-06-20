<template>
  <div>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h1 class="panel-title">Your Cart</h1>
        </div>
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Pokemon</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              <!-- CART BODY -->
              <tr>
                <th scope="row">1</th>
                <td>Lorem ipsum.</td>
                <td>12 USD</td>
                <td>
                  <input
                    name="cart-item-quantity-1"
                    type="number"
                    value="1"
                    min="1"
                  />
                </td>
                <td><strong>12 USD</strong></td>
                <td>
                  <a
                    class="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    >Update</a
                  >
                  <a
                    class="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    >Delete</a
                  >
                </td>
              </tr>
            </tbody>
            <tfoot id="my-cart-footer">
              <!-- CART FOOTER -->
              <tr>
                <th colspan="6">Empty product in your cart</th>
              </tr>
              <tr>
                <td colspan="4">
                  There are <b>5</b> items in your shopping cart.
                </td>
                <td colspan="2" class="total-price text-left">12 USD</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="alert alert-success" role="alert" id="mnotification">
        Updated <b>ivysaur</b>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart-wrapper"
};
</script>