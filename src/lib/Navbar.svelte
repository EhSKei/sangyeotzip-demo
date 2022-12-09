<script>
    import { link } from "svelte-spa-router";

    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Mousewheel, FreeMode } from "swiper";

    import "swiper/css";
    import "swiper/css/mousewheel";
    import { onMount } from "svelte";

    const navItems = [
        {
            title: "HOME",
            subtitle: "",
            link: "/",
        },
        {
            title: "들어가는 글",
            subtitle: "왜 상엿집인가?",
            link: "/prologue",
        },
        {
            title: "1부",
            subtitle: "삼척 맹방리 상엿집의 역사",
            link: "/chapter01",
        },
        {
            title: "2부",
            subtitle: "삼척 맹방리 상엿집의 건축학적 특징",
            link: "/chapter02",
        },
        {
            title: "3부",
            subtitle: "삼척 맹방리 상엿집 도면",
            link: "/chapter03",
        },
        {
            title: "4부",
            subtitle: "삼척 맹방리 상엿집 안에서 발견된 것들",
            link: "/chapter04",
        },
        {
            title: "5부",
            subtitle: "삼척과 동해 지역의 상엿집들",
            link: "/chapter05",
        },
        {
            title: "6부",
            subtitle: "삼척 맹방리의 상례문화",
            link: "/chapter06",
        },
        {
            title: "끝내는 글",
            subtitle: "민속문화의 보고 상엿집",
            link: "/epilogue",
        },
    ];

    let activated = false;

    function resizeCanvas() {
        let c = document.getElementsByClassName("nav")[0];
        // @ts-ignore
        c.style.height = window.innerHeight + "px"
        // @ts-ignore
        console.log(c.style.width)
    }

    onMount(() =>{
        resizeCanvas();
        window.addEventListener("resize",resizeCanvas)
    })
</script>

<button
    class="nav-open"
    on:click="{() => {
        activated = true;
        console.log(activated);
    }}">
    <img src="./navbar/menu.svg" alt="" class="nav-open-image" width="30" />
</button>

<nav class="nav" class:activated>
    <div class="nav-container">
        <div class="nav-top">
            <button
                class="nav-close"
                on:click="{() => {
                    activated = false;
                    console.log(activated);
                }}">
                <img
                    src="./navbar/close.svg"
                    alt=""
                    class="nav-close-image"
                    width="30" />
            </button>
        </div>

        <div class="nav-bottom">
            <Swiper
                slidesPerView="{'auto'}"
                direction="{'vertical'}"
                centeredSlides="{true}"
                modules="{[Mousewheel, FreeMode]}"
                mousewheel
                
                speed="{100}"
                on:slideChange="{() => console.log('slide change')}"
                on:swiper="{(e) => console.log(e.detail[0])}">
                {#each navItems as item}
                    <SwiperSlide>
                        <a href="{item.link}" use:link class="nav-item-main">
                            <span class="nav-item-main-title"
                                >{item.title}</span>
                            <span class="nav-item-main-subtitle"
                                >{item.subtitle}</span>
                        </a>
                    </SwiperSlide>
                    
                    {#if item.subitems}
                        {#each item.subitems as subItem}
                            <SwiperSlide>
                                <a
                                    href="{subItem.link}"
                                    use:link
                                    class="nav-item-sub">
                                    <span class="nav-item-sub-title"
                                        >{subItem.title}</span>
                                    <span class="nav-item-sub-subtitle"
                                        >{subItem.subtitle}</span>
                                </a>
                            </SwiperSlide>
                        {/each}
                    {/if}
                    <hr>
                {/each}
            </Swiper>
        </div>
    </div>
</nav>
