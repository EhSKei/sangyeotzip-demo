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
    <section class="hero">
        <img src="./prologue/prologue-hero.jpg" alt="" class="hero-image" />
        <h1></h1>
    </section>
    <section class="section">
        <div class="section-container">
            <span class="section-header">들어가는 글</span>
            <hr />
            <span class="section-title">왜 상엿집인가?</span>
            <br />
            <p>
                국립민속박물관에서는 권역별 생활문화 전국조사사업을 2021년부터
                의욕적으로 추진하고 있습니다. 이는 전국의 6개 권역(서울·경기,
                강원, 충청, 전라, 경상, 제주)의 특색있는 민속문화를 심층적으로
                살펴보는 전국 단위의 조사·연구사업입니다. 이번에 우리가
                공개하는「삼척 맹방리 상엿집 –삼척지역 상엿집과 상장례 문화」는
                이 사업의 일환으로 2020년부터 추진된 주제 조사 중 하나로
                조사결과를 온라인 콘텐츠로 제작한 것입니다. 삼척 맹방리 상엿집은
                대한제국 시기인 광무 3년(1899년)에 중수된 것으로, 무려 120년
                이상의 역사를 가진 오래되고 귀중한 상엿집입니다. 상엿집은 비록
                오랜 풍파에 여러 곳이 상하여 위태로운 지경에 있었지만 다행히도
                벽체와 골조는 비교적 온전했고, 상엿집 안에 보관 중인 상여
                부속들도 소량이지만 일부 남아 있었습니다. 아울러 우리관 조사팀은
                맹방리 상엿집과 상여를 중심으로 하는 상장례 문화를 마을의 여러
                어르신들의 기억을 더듬어 구술조사도 하였습니다. 아무쪼록「삼척
                맹방리 상엿집 –삼척지역 상엿집과 상장례 문화」온라인 콘텐츠를
                통해서 상엿집과 상장례 문화에 대한 작은 관심과 사랑을
                부탁드립니다. 국립민속박물관장 김종대
            </p>
            <p class="text-center">2022년 12월 국립민속박물관장 김종대</p>
        </div>
    </section>
    <section class="section" style="background:lightgray">
        <div class="section-container">
            <video
                src="./prologue/prologue-video.mp4"
                controls
                class="section-video"></video>
        </div>
    </section>
    
</main>
