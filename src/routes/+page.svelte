<script>
	import LayoutGrid, {
		Cell
	} from '@smui/layout-grid';
	import ArticleItem from '$lib/ArticleItem.svelte';
	import Button, { Label } from '@smui/button';
	

	/** @type {import('./$types').PageData} */
	export let data;
	$: news_list = data.data.data;
	$: pageCallback = data.data.pageCallback;

	async function page_increment(){
		// 拉取最新数据, https://gateway.36kr.com/api/mis/nav/ifm/subNav/flow POST, 
		// {"partner_id":"web","timestamp":1663340178746,"param":{"subnavType":1,"subnavNick":"contact","pageSize":30,"pageEvent":1,"pageCallback":"eyJmaXJzdElkIjozOTIzODQ1LCJsYXN0SWQiOjM5MjE0MzEsImZpcnN0Q3JlYXRlVGltZSI6MTY2MzMzMTQyNDA4OCwibGFzdENyZWF0ZVRpbWUiOjE2NjMyMjEzNzE3MjF9","siteId":1,"platformId":2}}
		let resp = await fetch(`/api/items?pageCallback=${pageCallback}`);
		let json_data = await resp.json();
		let itemList = json_data.itemList;
		let dataList = new Array();
		itemList.forEach(ele => {
			let templateMaterial = ele.templateMaterial
			dataList.push({
				title: templateMaterial.widgetTitle,
				subTitle: templateMaterial.authorName,
				description: templateMaterial.summary,
				image: templateMaterial.widgetImage,
				itemId: templateMaterial.itemId
			})
		});
		data.data.data = [...data.data.data, ...dataList];
		data.data.pageCallback = json_data.pageCallback;
	}
</script>

<svelte:head>
	<title>首页</title>
	<meta name="description" content="投资融资新闻" />
</svelte:head>


<div>
	<section>
		<LayoutGrid>
			{#if news_list.length === 0}
				<div>没有数据......</div>
			{:else}
				{#each news_list as news, i}
					<Cell span={6} align="middle">
						<div class='news'>
							<ArticleItem oneNews='{news}'/>
						</div>
					</Cell>
				{/each}
			{/if}
		</LayoutGrid>
	</section>
	<div class="more">
		<Button variant="unelevated" on:click={page_increment}>
			<Label>加载更多</Label>
		</Button>
	</div>
	
</div>

<style>
	.news {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--mdc-theme-secondary, #333);
		color: var(--mdc-theme-on-secondary, #fff);
	}

	.more {
		justify-content: center;
		align-items: center;
		display: flex;
	}
</style>