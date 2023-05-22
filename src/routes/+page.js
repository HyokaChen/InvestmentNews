 /** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try{
        let resp = await fetch('/api/items');
        let json_data = await resp.json()
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
        let pageCallback = json_data.pageCallback;
        return {
            data: {
                data: dataList,
                pageCallback: pageCallback
            }
        };
    }catch(err){
        console.log(err);
    }
}