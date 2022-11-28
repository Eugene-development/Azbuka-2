<script>
	export let content;
</script>

<div class="bg-gray-100">
	<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16 ">
		<div class="space-y-12">
			<div class="space-y-5 text-center sm:space-y-4">
				<h2 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
					{content.mainText.titleCategory}
				</h2>
				<p class="text-xl  text-gray-900">{content.mainText.descriptionCategory}</p>
			</div>
			<div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:grid-cols-3 lg:gap-10">
				{#each content.products as { name, text, img, alt }}
					<div
						class="py-10 px-6  text-center rounded-lg xl:px-8 xl:text-left shadow-2xl shadow-gray-600"
					>
						<div class="space-y-8 xl:space-y-10">
							<img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src={img} {alt} />
							<div class="space-y-2 xl:flex xl:items-center xl:justify-between">
								<div class="font-medium text-lg leading-6 space-y-1 divide-y divide-green-300">
									<h3 class="py-1 text-gray-800 text-2xl">{name}</h3>
									<p class="py-1 text-gray-800 text-base">{text}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<!--on:click|preventDefault|once={sendToCart(id)}-->
