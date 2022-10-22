<script>
    export let content;
</script>

<div class="relative bg-gray-800 overflow-hidden">
	<div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
		<svg
			class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
			width="364"
			height="384"
			viewBox="0 0 364 384"
			fill="none"
		>
			<defs>
				<pattern
					id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
					x="0"
					y="0"
					width="20"
					height="20"
					patternUnits="userSpaceOnUse"
				>
					<rect x="0" y="0" width="4" height="4" fill="currentColor" />
				</pattern>
			</defs>
			<rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
		</svg>
	</div>
	<div class="relative pt-6 pb-16 sm:pb-24">
		<main class="mt-8 sm:mt-10 ">
			<div class="mx-auto max-w-7xl">
				<div class="lg:grid lg:grid-cols-12 lg:gap-12">
					<div
						class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
					>
						<div>
							<div
								class="inline-flex items-center text-white bg-gray-900 rounded-md p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
							>
								<span
									class="ml-0.5 px-4 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-green-500 to-cyan-600 rounded-md"
									>{content.info}</span
								>
								<a href="/{content.link.path}" class="ml-4 p-1 text-sm">{content.link.value}</a>
								<svg
									aria-hidden="true"
									class="ml-2 w-5 h-5 text-gray-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										fill-rule="evenodd"
									/>
								</svg>
							</div>
							{@html content.H1}
							<p
								class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-base lg:text-base xl:text-base antialiased"
								id="id_1"
							>
								{content.text_1}
							</p>
							<p
								class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-base lg:text-base xl:text-base antialiased"
								id="id_2"
							>
								{content.text_2}
							</p>
							<!--														<p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Наши партнёры</p>-->
							<div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
								<div class="flex flex-wrap items-start justify-between">
									<div class="flex justify-center px-1">
										<img
											alt="Tuple"
											class="h-9 sm:h-10"
											src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
										/>
									</div>
									<div class="flex justify-center px-1">
										<img
											alt="Workcation"
											class="h-9 sm:h-10"
											src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
										/>
									</div>
									<div class="flex justify-center px-1">
										<img
											class="h-9 sm:h-10"
											src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
											alt="StaticKit"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- <Form_v1 {...contentForm_v1} /> -->
				</div>
			</div>
		</main>
	</div>
</div>
