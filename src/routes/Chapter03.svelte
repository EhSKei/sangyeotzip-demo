<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Navbar from "../lib/Navbar.svelte";

    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Navigation, Pagination, EffectCards } from "swiper";

    onMount(() => {
        window.moveTo(0, 0);
    });
</script>

<main transition:fade>
    <Navbar />
    <section class="hero" style="background-image:url('./chapter05/003.webp">
        <div class="hero-text">
            <h1 class="hero-header">3부. 삼척 맹방리 상엿집 도면</h1>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <div class="row row-cols-1">
                <p>
                    3부의 상엿집 도면은 강원대학교 건축학과 최장순 교수팀에서
                    제작하였습니다.
                </p>
            </div>
        </div>
    </section>
    <div class="w-100 vh-100">
        <Swiper
            spaceBetween="{0}"
            slidesPerView="{1}"
            modules={[Navigation, Pagination]}
            navigation
            pagination
            on:slideChange="{() => console.log('slide change')}"
            on:swiper="{(e) => console.log(e.detail[0])}"
            class="w-100 vh-100">
            {#each Array(8) as item, index}
                <SwiperSlide>
                    <img
                        src="./chapter03/Binder1_Page_{index + 1}.jpg"
                        alt=""
                        class="w-100 h-100"
                        style="object-fit: scale-down" />
                </SwiperSlide>
            {/each}
            </Swiper>
    </div>
</main>
