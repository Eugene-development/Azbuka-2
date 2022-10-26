<script>
	/** @type {import('./$types').PageData} */
	export let content;
	import { useInvert } from '$lib/functions/broker';
	import { visibleMobileMenu } from '$lib/store/stores.js';
	const { invert } = useInvert;
</script>

<div class="min-h-full border-b-2 border-cyan-400">
	<nav class="bg-gray-800">
		<div class="max-w-full mx-auto px-2 sm:px-4 lg:px-6">
			<div class="flex items-center justify-between h-12">
				<div class="flex items-center">
					<div class="hidden lg:block">
						<div class="flex items-baseline space-x-1">
							{#each content.subMenu as { value, path }}
								<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
								<a
									href="/{path}"
									class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xs font-medium"
									>{value}</a
								>
							{/each}
						</div>
					</div>
				</div>
				<div class="mr-2">
					<div class=" flex items-center md:ml-2">
						<div class="items-center">
							<div class="flex items-center justify-between">
								<div
									class="flex space-x-1 bg-gray-700 hover:bg-gray-600 px-2 py-1 mx-1 rounded-md items-center antialiased"
								>
									<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 text-gray-50"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
										/>
									</svg>
									<a
										href="tel:{content.linkPhone}"
										class="text-gray-50 text-xs sm:text-base font-bold ">{content.phone}</a
									>
								</div>
								<div
									class="flex space-x-1 bg-gray-700 hover:bg-gray-600 px-2 py-1 mx-1 rounded-md items-center antialiased"
								>
									<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 text-gray-50"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
										/>
									</svg>
									<p class="text-gray-50 text-xs sm:text-base font-bold">{content.email}</p>
								</div>
							</div>
						</div>

						<!--                        <button type="button" class="bg-gray-800 p-1 rounded-full text-cyan-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white animate-pulse">-->
						<!--                            <span class="sr-only">View notifications</span>-->
						<!--                            &lt;!&ndash; Heroicon name: outline/bell &ndash;&gt;-->
						<!--                            <svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">-->
						<!--                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />-->
						<!--                            </svg>-->
						<!--                        </button>-->
					</div>
				</div>
			</div>
		</div>
	</nav>
</div>
<div class="pt-1 pb-4 relative bg-gray-800 overflow-hidden">
	<nav
		class="relative  mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-6"
		aria-label="Global"
	>
		<div class="flex items-center flex-1 justify-between">
			<div class="flex mt-2 ml-2 items-center justify-between w-full md:w-auto">
				<a href="/">
					<span class="sr-only">Logo</span>
					<img class="h-8 w-auto sm:h-12" src={content.logo} alt="logo" />
				</a>
				<div class="mr-2 flex items-center md:hidden">
					<!--                    <button type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">-->
					<button
						on:click={() => visibleMobileMenu.update(invert)}
						type="button"
						class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!-- Heroicon name: outline/menu -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="hidden space-x-8 md:flex md:ml-10 mt-3 mr-4">
				{#each content.menu as { value, path }}
					<a
						href="/{path}"
						class="font-medium text-white hover:text-gray-300 transition ease-in-out delay-100 hover:scale-110 duration-500"
						>{value}</a
					>
				{/each}
			</div>
		</div>
	</nav>
</div>
