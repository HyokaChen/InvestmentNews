<script>
	import Card, {
		Content,
		PrimaryAction,
		Media,
		MediaContent,
	} from '@smui/card';
  import { goto } from '$app/navigation';
  export let oneNews;

  function click_detail(){
    window.open(`https://36kr.com/p/${oneNews.itemId}`)
  }
</script>

<div class="card-display" style="width: 36rem;">
  <div class="card-container">
    <Card>
      <PrimaryAction on:click={click_detail}>
        <Media class="card-media-16x9" style="background-image: url({oneNews.image});" aspectRatio="16x9" />
        <Content class="mdc-typography--body2" style="font-size:0.75rem;">
          <h2 class="mdc-typography--headline6" style="margin: 0;color: cyan;font-size:1.1rem;">
            {oneNews.title}
          </h2>
          <h4
            class="mdc-typography--subtitle2"
            style="margin: 8px 0 8px; color: #888;font-size:0.9rem;">
            {oneNews.subTitle}
          </h4>
          {oneNews.description}
        </Content>
      </PrimaryAction>
    </Card>
  </div>
</div>