<script>
	export let BC;
</script>

<div class="relative">
	<div class="absolute inset-0">
		<img class="w-full h-full object-cover grayscale" src={BC.pathImgBC} alt="фото фона" />
		<div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
	</div>
	<div class="relative max-w-7xl mx-auto py-8 px-4 sm:py-10 sm:px-6">
		<ol class="max-w-screen-xl w-full mx-auto pb-8 flex space-x-4">
			<li class="flex">
				<div class="flex items-center">
					<a href="/" class="text-gray-100 hover:text-gray-200">
						<svg
							class="flex-shrink-0 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
							/>
						</svg>
						<span class="sr-only">Главная</span>
					</a>
				</div>
			</li>

			{#if BC.parentPage}
				<li class="flex">
					<div class="flex items-center">
						<svg
							class="flex-shrink-0 w-4 h-full text-gray-200"
							viewBox="0 0 24 44"
							preserveAspectRatio="none"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
						</svg>
						<a
							href="/{BC.parentPageLink}"
							class="ml-4 text-sm font-medium text-gray-100 hover:text-gray-200">{BC.parentPage}</a
						>
					</div>
				</li>
			{/if}

			<li class="flex">
				<div class="flex items-center">
					<svg
						class="flex-shrink-0 w-4 h-full text-gray-200"
						viewBox="0 0 24 44"
						preserveAspectRatio="none"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
					</svg>
					<span
						class="ml-4 text-sm font-medium text-gray-100 hover:text-gray-200"
						aria-current="page">{BC.currentPage}</span
					>
				</div>
			</li>
		</ol>

		<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
			{BC.titleBC}
		</h1>
		<p class="mt-6 text-xl text-indigo-100 max-w-3xl">{BC.descriptionBC}</p>
		<!-- <button
				on:click|preventDefault={changeVisibleFormConsultation}
			class="mt-8 px-12 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 bg-opacity-40 hover:bg-green-400 hover:bg-opacity-30"
		>
			Запись на замер
		</button>  -->
	</div>
</div>
