<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Navbar from "../lib/Navbar.svelte";

    onMount(() => {
        window.moveTo(0, 0);
    });
</script>

<main transition:fade>
    <Navbar />
    <section class="hero" style="background-image:url('./chapter02/003.webp">
        <div class="hero-text">
            <h1 class="hero-header">1부. 삼척 맹방리 상엿집의 역사</h1>
        </div>
    </section>
    <section class="section">
        <div class="section-container">
            <p class="text-center">
                1부, 2부는 최장순,「삼척 근덕면 하맹방마을 상엿집 고찰」을
                바탕으로 작성하였습니다.
            </p>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <p class="section-header">
                1-1. 마을공동체 문화의 상징, 상여와 상엿집
            </p>
            <hr />
            <div class="row row-cols-1">
                <img src="./chapter01/001.webp" alt="" />
                <p>
                    상례(喪禮)는 우리 조상들이 옛부터 중요하고 여겼던 4가지
                    예법인 관혼상제(冠婚喪祭)의 하나입니다. 상여는 상례를
                    진행하는데 있어 시신을 실어 묘지까지 나르는데 중요한
                    기구였습니다. 상엿집은 상여를 보관하는 곳으로 마을에서
                    공동으로 관리하는 마을공동체 문화의 상징이었습니다.
                </p>
            </div>
            <div class="row row-cols-1 row-cols-lg-2">
                <img src="./chapter01/002-1.webp" alt="" />
                <img src="./chapter01/002-2.webp" alt="" />
            </div>
            <div class="row row-cols-1">
                <p>
                    상여는 사람과 영혼 사이 마지막 의례로써 시신을 담은 관을
                    장지로 옮기고, 이승과 저승을 연결하는 매개물로서 상징성이
                    있습니다. 상여는 혼백을 운반하는 영여와 시신을 묘소까지
                    운반할 때 사용하는 제구를 통칭하여 사용하지만, 삼척시 근덕면
                    하맹방 마을에선 일반적으로 제구를 상여라 합니다.
                </p>
                <video src="./chapter01/002-3.mp4" muted autoplay controls
                ></video>
            </div>
            <div class="row row-cols-3 p-5 g-5">
                {#each Array(3) as item, index}
                    <img src="./chapter01/003-{index + 1}.webp" alt="" />
                {/each}
            </div>
            <div class="row row-cols-1">
                <p>
                    중국에서는 상여를 대여(大輿) 또는 온량(轀輬),
                    영거(靈車)라고도 하는데 대여는 말 그대로 큰 수레이고, 온량은
                    평안히 누워쉬는 수레, 영거는 시신을 담은 관, 즉 영구를 싣는
                    수레를 뜻합니다. 우리나라에서는 『세종실록(世宗實錄)』과
                    『순장국장록(殉葬國葬錄)』에서 주로 국상(國喪) 때에 큰
                    상여인 대여(大輿)라는 단어를 볼 수 있습니다. 이후 조선 후기
                    학자인 이재(李縡: 1680~1746)가 쓴『사례편람(四禮便覽)』의
                    상례(喪禮)에 대여와 더불어 상여(喪輿)라는 단어가 나오며,
                    여기서 상여는 대여보다는 간단한 소여(小輿)를 의미했습니다.
                </p>
            </div>
            <div class="row row-cols-3 p-5 g-5">
                {#each Array(3) as item, index}
                    <img src="./chapter01/003-{index + 4}.webp" alt="" />
                {/each}
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <p class="section-header">1-2. 상여는 어떻게 만들어질까?</p>
            <hr />
            <div class="row row-cols-1">
                <p>
                    상여는 보통 조립식 목재로 되어있어 사용할 때는 부재를
                    조립하여 관이 흔들리지 않고 장지까지 운반할 수 있도록
                    입체적으로 만들고, 사용 후에는 해체하여 보관합니다.
                </p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <p class="section-header">1-3. “꽃집”, 상엿집의 다른 이름</p>
            <hr />
            <div class="row row-cols-1">
                <img src="./chapter01/005-9.webp" alt="" />
                <p>
                    상여에는 마을의 솜씨 좋은 목각 장인이 부재와 널빤지에 각종
                    그림을 새겨 넣었습니다. 일반적으로 꽃장식을 많이 하였기에
                    흔히들 상여를 꽃상여라 하며, 이러한 이유에서 였는지 상여를
                    보관하고 있는 상엿집을 꽃집, 곳집, 행상집이라 부릅니다.
                </p>
            </div>
            <div class="row row-cols-3 g-5">
                {#each Array(8) as item, index}
                    <img src="./chapter01/005-{index + 1}.webp" alt="" />
                {/each}
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <p class="section-header">
                1-4. 삼척 맹방리 상엿집은 언제 만들어졌을까?
            </p>
            <hr />
            <div class="row row-cols-1">
                <img src="./chapter01/006.webp" alt="" />

                <p>
                    삼척 맹방리 상엿집에는 보 위에 3개의 종도리가 가로로 길게
                    놓여있습니다. 보통 규모가 작은 여염집의 경우 상량문은 도리
                    바로 밑에, 규모가 있는 여염집의 경우는 장여 밑에 적어놓는
                    것이 일반적입니다.
                </p>
            </div>
            <div class="row row-cols-2">
                <img src="./chapter01/007-1.webp" alt="" />
                <img src="./chapter01/007-2.webp" alt="" />
            </div>
            <div class="row row-cols-1">
                <p>
                    삼척 맹방리 상엿집의 경우 특이하게 도리측면에
                    “대한광무삼년기해삼월이십칠일중수복원상량지후일동무효백병소멸(大韓光武參年己荄三月二十七日重修僕願上樑之後一洞無效百病消滅)”이라
                    적힌 상량문이 있습니다. 일반적으로 상량문의 양쪽 끝에는
                    용호(龍虎), 용구(龍龜), 봉룡(鳳龍)의 두 글자가 서로 마주
                    보도록 쓰고, 그 사이에 상량한 연월일시와 복을 비는 상서로운
                    글을 써넣기 마련이지만, 맹방리 상엿집의 상량문에는 바로
                    상량한 연월일시와 축원 문구가 종도리 측면에 적혀져 있습니다.
                    상량문을 통해 맹방리 상엿집은 1899년 이전부터 마을의 공동
                    시설로 존재했으며, 1899년에 중수되었던 것을 알 수 있습니다.
                    무려 최소 120년 전에 만들어진 아무 오래된 상엿집입니다.
                </p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <p class="section-header">
                1-5. 아낙네들의 정보교환 장소로 활용되었던 옛 터
            </p>
            <hr />
            <div class="row row-cols-1">
                <img src="./chapter01/008.webp" alt="" />

                <p>
                    하맹방마을에서 가장 연장자인 홍영택씨(1938년생)에 의하면,
                    원래 하맹방마을의 상엿집 위치는 현재 하맹방2리 마을회관
                    앞쪽인 삼척시 근덕면 하맹방2길 43-13(하맹방리 303-6) 인근에
                    1970년대까지 있었으며, 당시 이곳에는 상엿집 외에도
                    두레박으로 물을 긷는 마을 공동우물과 묘 5~6기도 함께
                    있었다고 합니다. 1960년대 후반에 현재의 위치로 옮겨졌다고
                    합니다.
                </p>
            </div>
            <div class="row row-cols-1 row-cols-lg-2 g-3">
                <img src="./chapter01/009-1.webp" alt="" />
                <img src="./chapter01/009-2.webp" alt="" />
            </div>
            <div class="row row-cols-1">
                <p>
                    이 곳은 마을의 대소사를 비롯하여 시시콜콜한 가정사
                    이야기까지 나눴던 아낙네들의 정보 교환의 장소였습니다.
                    그러나 1970년대 민가가 들어서면서 미관상의 이유로 현재
                    위치인 맹방해수욕장 근처 근덕면 하맹방리 221-17 솔밭으로
                    옮기게 되었다고 합니다.
                </p>
            </div>
            <div class="row row-cols-1 row-cols-lg-2 g-3">
                <img src="./chapter01/010-1.webp" alt="" />
                <img src="./chapter01/010-2.webp" alt="" />
            </div>
            <div class="row row-cols-1">
                <p>
                    전통 상례 시설인 상엿집은 마을의 공동재산으로 이용하고
                    관리를 하였으나, 이제는 남아있는 사례를 찾아보기가
                    힘들어졌습니다. 남아있는 상엿집 또한 전통 기법의 축조가 아닌
                    근대적 축조기법과 골슬레이트 등의 재료를 이용한 것이
                    대부분이며, 이 마저도 점차 사라질 위기에 처해있습니다.
                </p>
            </div>
            <div class="row row-cols-1">
                <img src="./chapter01/011.webp" alt="" />
                <p>
                    삼척시 근덕면 맹방리 상엿집은 건립 당시의 모습 그대로 전통
                    방식 그대로 축조되어 있기에 민속학적 건축학적으로도 가치가
                    있는 자료입니다. 또한 광무3년(1899년)에 중수된 무려 120년
                    이상된 오래된 상여로 지역 민속문화재로 지정하여 보존할
                    가치가 있습니다.
                </p>
            </div>
        </div>
    </section>
</main>
