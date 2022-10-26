<script>
	export let content;
</script>

<div class="py-16 text-center bg-gray-100">
	<h2 class="text-base text-red-700 font-semibold tracking-wide uppercase">Рубрика</h2>
	<h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
		{content.mainText.h1}
	</h1>
	<!--    <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>-->
</div>

<div class="bg-gray-100">
	<div
		class="max-w-3xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 lg:grid-cols-2"
	>
		<div>
			<h2 class="max-w-3xl mx-auto text-2xl tracking-tight font-extrabold text-gray-800">
				{content.mainText.title}
			</h2>
			<!--            <h2 class="max-w-3xl mx-auto text-3xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-700 to-blue-700 sm:text-3xl">Распашные шкафы и шкафы купе недорого и качественно</h2>-->
			<p class="mt-4 text-gray-500">{content.mainText.description}</p>

			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				{#each content.types as { title, description, link }}
					<a href="/{link}" class="border-t border-gray-200 pt-4">
						<p class=" text-gray-900 font-bold text-lg">{title}</p>
						<p class="mt-2 text-sm text-gray-500">{description}</p>
						<p class="mt-4 text-red-700 text-sm">Подробнее -></p>
					</a>
				{/each}
			</dl>
		</div>
		<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-4 lg:gap-6">
			{#each content.img as { path, alt }}
				<img class="bg-gray-100 rounded-lg h-52 w-auto" src={path} {alt} />
			{/each}
		</div>
	</div>
</div>
