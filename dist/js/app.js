document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Kopi Jogging', img: 'kopi1.jpg', price: 25000 },
            { id: 2, name: 'Kopi Sekolah', img: 'kopi2.jpg', price: 20000 },
            { id: 3, name: 'Kopi Sarapan', img: 'kopi3.jpg', price: 35000 },
            { id: 4, name: 'Kopi Ngantor', img: 'kopi4.jpg', price: 32000 },
            { id: 5, name: 'Susu Saya', img: 'susu.jpg', price: 32000 },
            { id: 6, name: 'Leci Tea', img: 'leci tea.jpg', price: 32000 },
            { id: 7, name: 'Lemon Tea', img: 'lemon teh.jpg', price: 32000 },
            { id: 8, name: 'Cemilan', img: 'brownies.jpg', price: 32000 },
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            this.items.push(newItem);
            this.quantity++;
            this.total += newItem.price;
            console.log(this.items);
        }
    });
});


// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};