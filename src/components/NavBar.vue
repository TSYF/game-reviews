<template>
    <nav
        class="navbar navbar-dark navbar-expand-md sticky-top px-sm-2 px-md-5 bg-dark d-flex align-items-center"
    >
        <div class="container-fluid">
            <!-- Navigation bar icon/brand -->
            <div class="navbar-brand">
                <h2><i class="bi bi-headset"></i> Games Opinion</h2>
            </div>
            <!-- Button for opening the nav menu -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navigation menu -->
            <div
                class="collapse navbar-collapse navbar-nav"
                id="navbarToggleExternalContent"
            >
                <div class="bg-dark ms-auto rounded-bottom">
                    <router-link
                        class="nav-link p-2 d-md-inline-block"
                        :to="{ name: 'home' }"
                        ><i class="bi bi-house-door-fill"></i> Home</router-link
                    >
                    <router-link
                        class="nav-link p-2 d-md-inline-block px-md-2 my-md-0"
                        :to="{ name: 'opiniones' }"
                        >Opiniones</router-link
                    >
                    <router-link
                        class="nav-link p-2 d-md-inline-block"
                        :to="{ name: 'admin' }"
                        >Admin</router-link
                    >
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
a {
    color: inherit;
    text-decoration: inherit;
}
</style>
