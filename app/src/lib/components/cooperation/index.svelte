<script>
	/** @type {import('./$types').PageData} */
	export let content;
</script>

<!--<h1>-->
<!--	<span class="mt-10 block text-center text-base font-semibold uppercase tracking-wide text-red-800"-->
<!--				>Акции</span-->
<!--				>-->
<!--	<span-->
<!--			class="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"-->
<!--	>Лучшие предложения</span-->
<!--	>-->
<!--</h1>-->

<div class="bg-white">
	<div class="max-w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
		<div class="bg-gray-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
			<div class="pt-10 pb-12 px-3 sm:pt-16 sm:px-8 lg:py-8 lg:pr-0 xl:py-22 xl:px-10">
				<div class="lg:self-center">
					<h2
						class="mx-auto text-4xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-gray-200 to-blue-100 "
					>
						<span class="block">{content.title}</span>
					</h2>
					<p class="mt-4 mb-24 text-lg leading-6 text-sky-100">{content.description}</p>
					<a
						href={content.link}
						sveltekit:prefetch
						class=" bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-slate-800 hover:bg-indigo-50"
						>Узнать подробнее</a
					>
				</div>
			</div>
			<div class="-mt-16 ml-8 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
				<img
					class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
					src={content.img}
					alt={content.alt}
				/>
			</div>
		</div>
	</div>
</div>
