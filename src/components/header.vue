<template>
	<div id="header">
		<nav class="header-view">
			<div class="header-logo"></div>
			<ul class="header-table-view">
				<li class="header-table-cell" :class="item.active" v-for="(item, index) in headItems" @click="tab(index)">
					<router-link :to="item.url" v-text="item.title"></router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script type="text/javascript">
var headItems = [{name: 'home', active: 'home-active', url: '/#top', title: '首页'},
{name: 'product', active: '', url: '/#top', title: '产品'},
{name: 'about', active: '', url: '/#top', title: '关于'},
{name: 'us', active: '', url: '/#top', title: '我们'}];
export default {
    data() {
        return {
            headItems: headItems
        }
    },
	methods: {
		tab(index){
			let self = this;
			this.headItems.forEach(function(obj){
				if(self.headItems.indexOf(obj) == index){
					obj.active = 'home-active';
				}else{
					obj.active = '';
				}
			});
		}
	}
}
</script>