<script>
    import { onMount } from "svelte";

    import Navbar from "../lib/Navbar.svelte";

    onMount(() => {
        window.moveTo(0, 0);
    });
</script>

<main>
    <section class="hero"></section>
    <Navbar />
    <section class="section">
        <div class="section-container">
            <span class="section-header">전시개요</span>
            <hr />
            <span class="section-title">삼척 맹방리 상엿집</span>
            <br />
            <p>
                경산 상엿집은 본래 영천시 자천리에 있던 것을 조원경씨가 매입하여
                현 위치에 이건한 것으로 건립당시 상량문이 남아 있어 1891년에
                세워진 것임을 알 수 있다. 일반 상엿집이 흙벽과 평지 바닥으로
                되어 있는데 비하여 경산 상엿집은 세 칸 규모의 판벽과 우물마루로
                되어 있다는 점에서 건축학적인 가치가 있다. 또한, 이 상엿집
                속에는 1891년 상엿집 건립 전후시기의 상엿계 운영에 관한
                구체적이고 다양한 모습을 보여주는 문서와 마을 공동체의 풍속,
                촌락의 사회경제 활동 등 당시 마을공동체의 현황을 엿볼 수 있는
                동중문서(洞中文書)들이 함께 발견됨에 따라 민속학적·학술적 가치
                등 문화재적 가치가 충분하다.
            </p>
        </div>
    </section>
    <section class="section" style="background:lightgray">
        <div class="section-container">
            <span class="section-header">Exhibition Overview</span>
            <hr />
            <span class="section-title">Samcheok Maengbang-ri Bier Hut</span>
            <br />
            <p>
                According to its construction record, the bier hut in Gyeongsan
                was built in 1891. It was later purchased by Jo Won-gyeong and
                relocated to its current position. The Gyeongsan bier hut is a
                valuable asset in terms of its unusual structure, which consist
                of wooden siding walls and a checkered floor, while other bier
                huts generally featured mud-plastered walls and a flatland
                floor. Furthermore, the related document, which consists of
                detailed records on the production and management of the biers,
                and Dongjung Munseo (ancient documents), which shows the town
                community’s status at the time of its construction, including
                the community’s customs, society and economy, are valuable
                cultural assets from both the folkloric and academic
                perspectives.
            </p>
        </div>
    </section>
</main>
