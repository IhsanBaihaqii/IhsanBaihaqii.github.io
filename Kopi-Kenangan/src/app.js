document.addEventListener("alpine:init", () => {
  Alpine.data("produk", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpg", price: 20000 },
      { id: 2, name: "Arabica Blend", img: "2.jpg", price: 25000 },
      { id: 3, name: "Promo Passo", img: "3.jpg", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "4.jpg", price: 35000 },
      { id: 5, name: "Sumatra Mandheling", img: "5.jpg", price: 40000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(getItem) {
      // Check barang yang sama
      cartItem = this.items.find((item) => item.id === getItem.id);
      // Jika tidak ada barang yang sama / masih kosong
      if (!cartItem) {
        this.items.push({ ...getItem, quantity: 1, total: getItem.price });
        this.quantity++;
        this.total += getItem.price;
      } else {
        // Jika barang ada yang sama
        this.items = this.items.map((item) => {
          // Barang berbeda
          if (item.id !== getItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambahkan quantity dan total
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      console.log(id);
      // ambil item berdasarkan id
      cartItem = this.items.find((item) => item.id === id);
      //  jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1/1
        this.items = this.items.map((item) => {
          // jika bukan barang yg di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // Jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Format mata uang
const rupiah = (num) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);
};
