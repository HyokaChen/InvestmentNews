<script>
    import {
        page
    } from '$app/stores';
    import TopAppBar, { Row, Section, Title} from '@smui/top-app-bar';
</script>

<nav>
    <TopAppBar
      variant="static"
      color='primary'
    >
    <Row>
        <Section>
            <a href="/" class="home"><Title>主页</Title></a>
        </Section>
    </Row>
    </TopAppBar>
</nav>

<style>
    .home {
        font-weight: bold;
        text-decoration: none;
        color: aliceblue;
    }
</style>
