<template>
    <button type="button" class="position-relative btn-favorite btn p-0">
        <i class="position-absolute bi bi-heart"></i>
        <i class="bi bi-heart-fill text-info"></i>
    </button>
</template>

<style lang="scss">
.btn-favorite {
    >i {
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    i:nth-child(2) {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        >i {
            opacity: 0;
        }

        i:nth-child(2) {
            opacity: 1;
        }
    }
}
</style>
