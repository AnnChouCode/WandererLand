<template>
    <nav class="bg-tertiary nav-product-filter">
        <div class="container">
            <!-- web -->
            <ul class="d-none d-lg-flex align-items-center list-unstyled">
                <li>
                    <div class="dropdown">
                        <button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                            id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-3">排序</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort">
                            <li><a class="dropdown-item p-3" href="#">最新藝術家</a></li>
                            <li><a class="dropdown-item p-3" href="#">姓名：A - Z</a></li>
                            <li><a class="dropdown-item p-3" href="#">姓名：Z - A</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                            id="btnGroupFilter" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-3">題材</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnGroupFilter">
                            <li><a class="dropdown-item p-3" href="#">最新作品</a></li>
                            <li><a class="dropdown-item p-3" href="#">價格：高至低</a></li>
                            <li><a class="dropdown-item p-3" href="#">價格：低至高</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="dropdown">
                        <button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                            id="btnArtistFilter" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-3">藝術家</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnArtistFilter">
                            <li><a class="dropdown-item p-3" href="#">最新作品</a></li>
                            <li><a class="dropdown-item p-3" href="#">價格：高至低</a></li>
                            <li><a class="dropdown-item p-3" href="#">價格：低至高</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <!-- mobile -->
            <ul class="d-flex d-lg-none align-items-center justify-content-between list-unstyled">
                <li>
                    <div class="dropdown">
                        <button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0"
                            id="btnProductSort" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="me-3">排序</span>
                            <i class="bi bi-chevron-down"></i>
                        </button>
                        <ul class="dropdown-menu p-0 overflow-hidden" aria-labelledby="btnProductSort">
                            <li><a class="dropdown-item p-3" href="#">最新藝術家</a></li>
                            <li><a class="dropdown-item p-3" href="#">姓名：A - Z</a></li>
                            <li><a class="dropdown-item p-3" href="#">姓名：Z - A</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" class="btn d-flex align-items-center px-5 py-4 text-default fs-info border-0">
                        <span class="me-3">篩選</span>
                        <i class="bi bi-chevron-down"></i>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
</template>
