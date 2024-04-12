document.addEventListener('alpine:init', () => {
    Alpine.store('counter', {
        count: 0,
        increment() { this.count++ },
        decrement() { this.count-- }
    });
});