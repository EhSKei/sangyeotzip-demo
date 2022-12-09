<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Navbar from "../lib/Navbar.svelte";

    onMount(() => {
        window.moveTo(0, 0);
    });
</script>

Chapt
<main transition:fade>
    <Navbar />
    <section class="hero" style="background-image:url('./chapter02/003.webp">
        <div class="hero-text">
            <h1 class="hero-header"></h1>
        </div>
    </section>

    <section class="section">
        <div class="section-container">
            <h1 class="section-header">끝내는 글, 민속문화의 보고 상엿집</h1>
            <hr>
            <div class="row row-cols-1">
                <p>
                    지금까지 국립민속박물관에서 삼척 맹방리 상엿집과 상장례 문화를
                    조사하고 기록한 것을 살펴보았습니다. 삼척 맹방리 상엿집은 겉으로
                    보기에는 초라하고 볼품없고 다소 무섭기까지한 오래된
                    건축물이었습니다. 하지만 낡은 상엿집을 천천히 알아보고 조사해
                    나가면서 우리가 발견한 것은 놀라운 것이었습니다. 삼척 맹방리
                    상엿집은 대한제국시기인 광무3년(1899년)에 중수된 무려 120년
                    이상이나된 오래된 상엿집이었고, 상엿집 속에는 아직도 상여
                    부속품들이 남아 있었습니다. 또한 상엿집과 상장례에 대한 마을
                    주민들의 기억을 더듬어 민족 공동체 문화의 핵심 요소인 상장례
                    문화도 살펴 볼 수 있었습니다. 삼척 맹방리 상엿집의 발견은
                    조사자들에게는 뜻깊은 경험이었습니다. 이번 온라인 콘텐츠를
                    통해서 여러 분들도 상엿집과 전통 상장례 문화에 대해 조금이나마
                    관심을 가지시는 계기가 되었으면 합니다. 감사합니다.
                </p>
            </div>
            <div class="row row-cols-1">
                <p>
                    만든 사람들
                    <br />총괄: 이관호(민속연구과장)
                    <br />기획: 위 철(학예연구관)
                    <br />실무: 박수환(학예연구사), 손정수, 장서윤(이상
                    학예연구원)
                    <br />논고 및 도면: 최장순(강원대 건축학과 교수)
                    <br />사진: 문덕관
                    <br />제작: SDNT(대표: 전현성, 디자인: □□□)
                </p>
            </div>
        </div>
    </section>
</main>
